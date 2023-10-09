import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetOrderSchemaWithMeta
 
)
from typing import List, Dict
from .database import get_db
from models.model import Cart,CartItem,FoodModel,EndUser,Order,OrderItem
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc,Enum
from modules.utils import pagination
from firebase_admin import messaging
router = APIRouter()
auth_handler = AuthToken()


@router.get("/orders", tags=["order"],response_model=GetOrderSchemaWithMeta)#, response_model=Dict[str,List[GetOrder]])
async def get_orders(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(Order).count()
    meta_data =  pagination(page,per_page,count)
    order_data = db.query(Order).order_by(desc(Order.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"order":order_data,"meta":meta_data}