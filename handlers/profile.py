import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    ProfileSchema,
    SelectPasswordSchema,
    UpdatePasswordSchema
)
from typing import List, Dict
from .database import get_db
from models.model import User, Role
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken

router = APIRouter()
auth_handler = AuthToken()
@router.get("/profiles", tags=["profile"], response_model=Dict[str,ProfileSchema])
async def get_profile(
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    profile =  db.get(User,current_user["id"])
    logging.info(profile.role)
    return {"profile":profile}

@router.get("/updatePasswords/{status}", tags=["profile"], response_model=Dict[str,SelectPasswordSchema])
async def get_me(
    status:str,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    profile =  db.get(User,current_user["id"])
    logging.info(profile.role)
    return {"update-password":profile}

@router.put("/updatePasswords/{id}", tags=["profile"], response_model=Dict[str,SelectPasswordSchema])
async def update_profile_password(id: int, member: UpdatePasswordSchema,db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)):
    #logging.info(f"user ID {current_user['id']}")
    logger.info(member.updatePassword)
    if member.updatePassword.new_password != member.updatePassword.confirm_password:
        raise HTTPException(status_code=404, detail="Password not match")
    profile = db.query(User).get(current_user['id'])
    if not profile:
        raise HTTPException(status_code=404, detail="User ID not found.")
    logging.info(member.updatePassword.old_password)
    logging.info(profile.password)
    if not auth_handler.verify_password(member.updatePassword.old_password, profile.password):
        logging.info("Invalid Password")
        raise HTTPException(status_code=400, detail="Invalid password")
    hashed_password = auth_handler.encode_password(member.updatePassword.new_password)
    profile.password =  hashed_password
    db.commit()
    db.refresh(profile)
    return {"update-password":profile}

