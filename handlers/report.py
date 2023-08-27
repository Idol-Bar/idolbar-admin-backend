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
from models.model import User, Role,Point,Transition
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc
router = APIRouter()
auth_handler = AuthToken()

@router.get("/reports/{status}", tags=["member"])
def get_member_byid(status: str, db: Session = Depends(get_db)):
    #points_with_no_owner = db.query(Point).filter(Point.owner == None).count()
    points_with_owner = db.query(Point).filter(Point.owner!=None).count()
    pay_point = db.query(Transition).filter(Transition.fromUser=="admin").count()
    receive_point = db.query(Transition).filter(Transition.toUser=="admin").count()
    
    report = {"id":1,"total_point":points_with_owner,"pay_point":pay_point,"receive_point":receive_point}
    return {"report":report}