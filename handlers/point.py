import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    AddPointSchema,
)
from typing import List, Dict
from .database import get_db
from models.model import User, Role,EndUser,Transition,Point,TierRule,Tier,Money,PointLogs
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc,func
from modules.utils import calc_percent
router = APIRouter()
auth_handler = AuthToken()


@router.post("/points", tags=["point"])
async def add_point(
    request: Request, point_info: AddPointSchema, db: Session = Depends(get_db)#, current_user: CurrentUser = Depends(get_current_user)
):
    logger.info(point_info.dict())
    logger.info("Validate Point and Pay")
    tier = db.query(Tier).filter_by(user_id=point_info.userId).first()
    if point_info.unit>0:
        owner_points_count = db.query(Point).filter(Point.owner_id == point_info.userId).all()
        if len(owner_points_count)<int(point_info.unit):
            return HTTPException(status_code=400, detail="Not Enought Point")
        try:
            owner = db.query(EndUser).get(point_info.userId)
            logger.info("Pay Point")
            db_points = db.query(Point).limit(point_info.unit).all()
            for point in db_points:
                new_transition = Transition(fromUser=owner.username,toUser="admin",status="pay")
                point.owner = None
                point.transitions.append(new_transition)
            pay_point_log = PointLogs(amount=point_info.amount,point=point_info.unit,tier=tier.name,username=owner.username,
                        phoneno=owner.phoneno,status="Pay Point",fromUser=owner.username,toUser="admin")
            db.add(pay_point_log)
            db.commit()
        except Exception as e:
            db.rollback()
            raise e
    logger.info("Add point to depending on Tier")
    tier_data = db.query(TierRule).filter(TierRule.name == tier.name).first()
    percent = calc_percent(amount=point_info.amount,percentage=tier_data.percentage)
    owner = db.query(EndUser).get(point_info.userId)
    for _ in range(percent):
        new_transition = Transition(fromUser="admin",toUser=owner.username,status="buy")
        new_point = Point(unit=1, owner=owner,transitions=[new_transition])
        db.add(new_point)
        db.add(new_transition)
    money_log = Money(amount=point_info.amount,user_id=point_info.userId,status=f"pay {point_info.amount} MMK with {point_info.unit} Point")
    reward_point_log = PointLogs(amount=point_info.amount,point=percent,tier=tier.name,username=owner.username,
                        phoneno=owner.phoneno,status="Reward",toUser=owner.username,fromUser="admin")
    db.add(money_log)
    db.add(reward_point_log)
    db.commit()
    logger.info("Update Tier")
    total_amount = db.query(func.sum(Money.amount)).filter(Money.user_id == f"{point_info.userId}").scalar()
    rule = db.query(TierRule).filter(TierRule.lower <= total_amount, TierRule.higher >= total_amount).first()
    if rule and rule.name!=tier.name:
        owner = db.query(EndUser).get(point_info.userId)
        role = Role(name=rule.name)
        owner.role = [role]
        db.commit()
        db.refresh(owner)
        logger.info("Update Tier User Table")
    return {"amount":point_info.amount,"percentage":percent,"tier":tier.name,"total":total_amount}



# owner = db.query(EndUser).get(point_info.userId)
# for _ in range(point_info.unit):
#     new_transition = Transition(fromUser="admin",toUser=owner.username,status="success")
#     new_point = Point(unit=1, owner=owner,transitions=[new_transition])
#     db.add(new_point)
#     db.add(new_transition)
# db.commit()
#rule = db.query(TierRule).filter(TierRule.lower <= number, TierRule.higher >= number).first()