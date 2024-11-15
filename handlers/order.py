import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetOrder,
    GetOrderSchemaWithMeta,
    UpdateOrderStatus,GetOrderSearchSchemaWithMeta
 
)
from typing import List, Dict
from .database import get_db
from models.model import Cart,CartItem,FoodModel,EndUser,Order,OrderItem
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc,Enum,func
from modules.utils import pagination
from firebase_admin import messaging
from datetime import datetime, date
router = APIRouter()
auth_handler = AuthToken()



@router.get("/orderSearches", tags=["parcel"],response_model=GetOrderSearchSchemaWithMeta)#, response_model=Dict[str,List[GetOrder]])
async def search_orders(
   reservedate:date = date.today(),status:str="Pending",
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    status = status.capitalize()
    order_data = db.query(Order).filter(func.date(Order.createdate)==reservedate,Order.tables!="parcel",Order.status==status).order_by(desc(Order.createdate)).all()
    return {"orderSearch":order_data,"meta":{"total_pages":1}}

@router.get("/orderDetails", tags=["order"], response_model=Dict[str,List[GetOrder]])
async def get_orders(
    reservedate: date = date.today() , tableId: str=None,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    order_data = db.query(Order).filter(Order.reservedate==reservedate,Order.tables==tableId).order_by(desc(Order.createdate)).all()
    print(order_data)
    return {"order-detail":order_data}


@router.get("/orders", tags=["order"],response_model=GetOrderSchemaWithMeta)#, response_model=Dict[str,List[GetOrder]])
async def get_orders(
    page: int = 1 , per_page: int=10,shop:str ="shop1",status:str="Pending",
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    status = status.capitalize()
    count = db.query(Order).filter(Order.shop==shop,Order.status==status).count()
    meta_data =  pagination(page,per_page,count)
    order_data = db.query(Order).filter(Order.shop==shop,Order.status==status).order_by(desc(Order.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"order":order_data,"meta":meta_data}



@router.get("/orders/{id}", tags=["order"], response_model=Dict[str,GetOrder])
def get_order_byid(id: int, db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)):
    order = db.get(Order, id)
    if not order:
        raise HTTPException(status_code=404, detail="Order ID not found.")
    return {"order":order}

@router.put("/orders/{id}", tags=["member"], response_model=Dict[str,GetOrder])
async def update_order_status(id: int, data:UpdateOrderStatus ,db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)):
    db_order = db.query(Order).get(id)
    if not db_order:
        raise HTTPException(status_code=404, detail="Order ID not found.")
    db_order.status = data.order.status
    db.commit()
    db.refresh(db_order)
    return {"order":db_order}