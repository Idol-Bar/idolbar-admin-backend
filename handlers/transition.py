import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    CreateMemberSchemaRequest,
    MemberSchema
)
from typing import List, Dict
from .database import get_db
from models.model import User, Role,PointLogs
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc
router = APIRouter()
auth_handler = AuthToken()


@router.get("/transitions", tags=["transition"])
async def get_transition(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    #members = db.query(User).all()
    count = db.query(PointLogs).count()
    meta_data =  pagination(page,per_page,count)
    transition = db.query(PointLogs).order_by(desc(PointLogs.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"transition":transition,"meta":meta_data}


@router.get("/sharepts", tags=["transition"])
async def get_transition(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    #members = db.query(User).all()
    count = db.query(PointLogs).filter(PointLogs.status=="Share").count()
    meta_data =  pagination(page,per_page,count)
    transition = db.query(PointLogs).filter(PointLogs.status=="Share").order_by(desc(PointLogs.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"sharept":transition,"meta":meta_data}


@router.get("/paypts", tags=["transition"])
async def get_paypoint(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    #members = db.query(User).all()
    count = db.query(PointLogs).filter(PointLogs.status=="Pay Point").count()
    meta_data =  pagination(page,per_page,count)
    transition = db.query(PointLogs).filter(PointLogs.status=="Pay Point").order_by(desc(PointLogs.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"paypt":transition,"meta":meta_data}


@router.get("/rewardpts", tags=["transition"])
async def get_rewardpts(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    #members = db.query(User).all()
    count = db.query(PointLogs).filter(PointLogs.status=="Reward").count()
    meta_data =  pagination(page,per_page,count)
    transition = db.query(PointLogs).filter(PointLogs.status=="Reward").order_by(desc(PointLogs.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"rewardpt":transition,"meta":meta_data}



@router.get("/searchtransitions", tags=["transition"])
def search_client(phoneno: str = None, db: Session = Depends(get_db)):
    if not phoneno or not len(phoneno)>0:
        return {"searchclient":[]}
    transition = db.query(PointLogs).filter(PointLogs.phoneno.contains(phoneno)).all()
    return {"searchtransition":transition}