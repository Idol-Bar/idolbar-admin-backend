import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    AddPointSchema,
)
from typing import List, Dict
from .database import get_db
from models.model import User, Role,EndUser,Transition,Point,TierRule,Tier,Money
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc
from modules.utils import calc_percent
router = APIRouter()
auth_handler = AuthToken()

rules = {"gold":5,"platinum":10,"diamond":15}

@router.post("/points", tags=["point"])
async def add_point(
    request: Request, point_info: AddPointSchema, db: Session = Depends(get_db)#, current_user: CurrentUser = Depends(get_current_user)
):
    logger.info(point_info.dict())
    logger.info("Validate Point and Pay")
    if point_info.unit>0:
        owner_points_count = db.query(Point).filter(Point.owner_id == point_info.userId).all()
        if len(owner_points_count)<int(point_info.unit):
            return HTTPException(status_code=400, detail="Not Enought Point")
        try:
            owner = db.query(EndUser).get(point_info.userId)
            logger.info("Pay Point")
            db_points = db.query(Point).limit(point_info.unit).all()
            for point in db_points:
                new_transition = Transition(fromUser=owner.username,toUser="admin",status="bonus")
                point.owner = None
                point.transitions.append(new_transition)
            db.commit()
        except Exception as e:
            db.rollback()
            raise e
    logger.info("Add point to depending on Tier")
    tier = db.query(Tier).filter_by(user_id=point_info.userId).first()
    percent = calc_percent(amount=point_info.amount,percentage=rules[tier.name])
    owner = db.query(EndUser).get(point_info.userId)
    for _ in range(percent):
        new_transition = Transition(fromUser="admin",toUser=owner.username,status="buy")
        new_point = Point(unit=1, owner=owner,transitions=[new_transition])
        db.add(new_point)
        db.add(new_transition)
    money_log = Money(amount=point_info.amount,user_id=point_info.userId,status=f"pay {point_info.amount} MMK with {point_info.unit} Point")
    db.add(money_log)
    db.commit()
    return {"amount":point_info.amount,"percentage":percent,"tier":tier.name}



# owner = db.query(EndUser).get(point_info.userId)
# for _ in range(point_info.unit):
#     new_transition = Transition(fromUser="admin",toUser=owner.username,status="success")
#     new_point = Point(unit=1, owner=owner,transitions=[new_transition])
#     db.add(new_point)
#     db.add(new_transition)
# db.commit()
#rule = db.query(TierRule).filter(TierRule.lower <= number, TierRule.higher >= number).first()