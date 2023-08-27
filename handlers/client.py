import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    ClientSchemaWithMeta,
    ClientSchema
)
from typing import List, Dict
from .database import get_db
from models.model import EndUser, Tier,Point
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc
router = APIRouter()
auth_handler = AuthToken()


@router.get("/clients", tags=["client"], response_model=ClientSchemaWithMeta)
async def get_client(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(EndUser).count()
    meta_data =  pagination(page,per_page,count)
    clients = db.query(EndUser).join(Tier, EndUser.tier).order_by(desc(EndUser.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"client":clients,"meta":meta_data}

@router.get("/clients/{id}", tags=["client"], response_model=Dict[str,ClientSchema])
def get_client_byid(id: int, db: Session = Depends(get_db)):
    client = db.get(EndUser, id)
    if not client:
        raise HTTPException(status_code=404, detail="User ID not found.")
    return {"client":client}



@router.get("/getpoint/{id}", tags=["client"])
def get_point_byid(id: int, db: Session = Depends(get_db)):
    owner_points_count = db.query(Point).filter(Point.owner_id == id).all()
    return {"total_point":len(owner_points_count)}

# @router.get("/searchclients", tags=["client"])
# async def search_all(
#     page: int = 1 , per_page: int=10,
#     db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
# ):
#     return {"searchclients":[]}

@router.get("/searchclients", tags=["client"])
def search_client(phoneno: str = None, db: Session = Depends(get_db)):
    if not phoneno or not len(phoneno)>0:
        return {"searchclient":[]}
    client = db.query(EndUser).filter(EndUser.phoneno.contains(phoneno)).all()
    return {"searchclient":client}