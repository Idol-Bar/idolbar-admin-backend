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
from models.model import User, Role,Point
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc
router = APIRouter()
auth_handler = AuthToken()


@router.get("/members", tags=["member"])
async def get_member(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    #members = db.query(User).all()
    count = db.query(User).count()
    meta_data =  pagination(page,per_page,count)
    members = db.query(User).join(Role, User.role).order_by(desc(User.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"member":members,"meta":meta_data}


@router.get("/members/{id}", tags=["member"], response_model=Dict[str,MemberSchema])
def get_member_byid(id: int, db: Session = Depends(get_db)):
    member = db.get(User, id)
    if not member:
        raise HTTPException(status_code=404, detail="User ID not found.")
    return {"member":member}

@router.post("/members", tags=["member"], response_model=Dict[str,MemberSchema])
async def add_member(
    request: Request, user: CreateMemberSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(user.dict())
    is_user = db.query(User).filter(User.username == user.member.username).first()
    if is_user:
        raise HTTPException(status_code=400, detail="Username already registered.")
    hashed_password = auth_handler.encode_password(user.member.password)
    role = Role(name=user.member.role)
    member = User(username=user.member.username, password=hashed_password, role=[role],postImage=user.member.postImage)
    db.add(member)
    db.add(role)
    db.commit()
    db.refresh(member)
    return {"member":member}


@router.delete("/members/{member_id}", tags=["member"])
async def delete_member(member_id: int, db: Session = Depends(get_db)):
    member = db.get(User, member_id)
    db.delete(member)
    db.commit()
    return {"message": "User has been deleted succesfully"}


@router.put("/members/{id}", tags=["member"], response_model=Dict[str,MemberSchema])
async def update_member(id: int, member: CreateMemberSchemaRequest,db: Session = Depends(get_db)):
    db_member = db.query(User).get(id)
    if not db_member:
        raise HTTPException(status_code=404, detail="User ID not found.")
    role = Role(name=member.member.role)
    hashed_password = auth_handler.encode_password(member.member.password)
    db_member.username =  member.member.username
    db_member.password =  hashed_password
    db_member.active = member.member.active
    db_member.postImage = member.member.postImage
    db_member.role = [role]
    db.commit()
    db.refresh(db_member)
    return {"member":db_member}

