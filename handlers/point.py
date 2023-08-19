import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    AddPointSchema,
)
from typing import List, Dict
from .database import get_db
from models.model import User, Role,EndUser,Transition,Point
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc
router = APIRouter()
auth_handler = AuthToken()


@router.post("/points", tags=["point"])
async def add_point(
    request: Request, point_info: AddPointSchema, db: Session = Depends(get_db)#, current_user: CurrentUser = Depends(get_current_user)
):
    logger.info(point_info.dict())
    try:
        owner = db.query(EndUser).get(point_info.userId)
        for _ in range(point_info.unit):
            new_transition = Transition(fromUser="admin",toUser=owner.username,status="success")
            new_point = Point(unit=1, owner=owner,transitions=[new_transition])
            db.add(new_point)
            db.add(new_transition)
        db.commit()
    except Exception as e:
        db.rollback()
        raise e
    return {"status":"success"}

