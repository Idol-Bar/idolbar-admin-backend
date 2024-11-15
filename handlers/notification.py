import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetNotiSchema,
    CreateNotiSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import NotiModel,AdminNotiModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
from firebase_admin import messaging
router = APIRouter()
auth_handler = AuthToken()


@router.get("/notifications", tags=["notification"])#, response_model=Dict[str,List[GetNotiSchema]])
async def get_noti(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(NotiModel).count()
    meta_data =  pagination(page,per_page,count)
    notification = db.query(NotiModel).order_by(desc(NotiModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"notification":notification,"meta":meta_data}


@router.post("/notifications", tags=["notification"], response_model=Dict[str,GetNotiSchema])
async def add_noti(
    request: Request, data: CreateNotiSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    notification = NotiModel(**data.notification.dict())
    db.add(notification)
    db.commit()
    db.refresh(notification)
    data_message = {"postType":"notification","notiId":f"{notification.id}"}
    message = messaging.Message(notification=messaging.Notification(title=data.notification.title,body=data.notification.description),android=messaging.AndroidConfig( priority='normal', notification=messaging.AndroidNotification( default_sound=True ), ), topic=data.notification.tier,data=data_message)
    response = messaging.send(message)
    return {"notification":notification}

@router.get("/notifications/{id}", tags=["notification"], response_model=Dict[str,GetNotiSchema])
def get_noti_byid(id: int, db: Session = Depends(get_db)):
    notification = db.get(NotiModel, id)
    if not notification:
        raise HTTPException(status_code=404, detail="Notification ID not found.")
    return {"notification":notification}

@router.delete("/notifications/{_id}", tags=["notification"])
async def delete_noti(_id: int, db: Session = Depends(get_db)):
    notification = db.get(NotiModel, _id)
    db.delete(notification)
    db.commit()
    return {"message": "Notification has been deleted succesfully"}


@router.get("/notimanagers", tags=["notification"])#, response_model=Dict[str,List[GetNotiSchema]])
async def get_admin_noti(
    page: int = 1 , per_page: int=10,shop:str="shop1",
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(AdminNotiModel).filter(AdminNotiModel.shop==shop).count()
    meta_data =  pagination(page,per_page,count)
    notification = db.query(AdminNotiModel).filter(AdminNotiModel.shop==shop).order_by(desc(AdminNotiModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"notimanager":notification,"meta":meta_data}

@router.get("/notimanagers/{id}", tags=["notification"])
def get_admin_noti_byid(id: int, db: Session = Depends(get_db)):
    notimanager = db.get(AdminNotiModel, id)
    if not notimanager:
        raise HTTPException(status_code=404, detail="Notification ID not found.")
    return {"notimanager":notimanager}


@router.put("/notimanagers/{id}", tags=["notification"])
async def admin_noti_seen(id: int,db: Session = Depends(get_db)):
    db_noti = db.query(AdminNotiModel).get(id)
    if not db_noti:
        raise HTTPException(status_code=404, detail="Noti ID not found.")
    db_noti.read =  True
    db.commit()
    db.refresh(db_noti)
    return {"notimanager":db_noti}


@router.get("/getNotiCount", tags=["notification"])
async def get_noti_count(
     db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(AdminNotiModel).filter(AdminNotiModel.read==False).count()
    return {"count":count}