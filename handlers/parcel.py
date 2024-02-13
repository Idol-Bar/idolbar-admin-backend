import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetParcel,
    GetParcelSchemaWithMeta,
    UpdateParcelStatus,GetParcelSearchSchemaWithMeta
 
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


@router.get("/parcelSearches", tags=["parcel"],response_model=GetParcelSearchSchemaWithMeta)#, response_model=Dict[str,List[GetOrder]])
async def search_parcels(
    shop:str ="shop1",status:str="PENDING",reservedate:date = date.today(),
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    status = status.capitalize()
    order_data = db.query(Order).filter(func.date(Order.createdate)==reservedate,Order.shop==shop,Order.status==status,Order.tables=="parcel").order_by(desc(Order.createdate)).all()
    return {"parcelSearch":order_data,"meta":{"total_pages":1}}



@router.get("/parcels", tags=["parcel"],response_model=GetParcelSchemaWithMeta)#, response_model=Dict[str,List[GetOrder]])
async def get_parcels(
    page: int = 1 , per_page: int=10,shop:str ="shop1",status:str="PENDING",
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    status = status.capitalize()
    count = db.query(Order).filter(Order.shop==shop,Order.status==status,Order.tables=="parcel").count()
    meta_data =  pagination(page,per_page,count)
    order_data = db.query(Order).filter(Order.shop==shop,Order.status==status,Order.tables=="parcel").order_by(desc(Order.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"parcel":order_data,"meta":meta_data}



@router.get("/parcels/{id}", tags=["parcel"], response_model=Dict[str,GetParcel])
def get_get_parcel_byid(id: int, db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)):
    order = db.get(Order, id)
    if not order:
        raise HTTPException(status_code=404, detail="Parcel ID not found.")
    return {"parcel":order}

@router.put("/parcels/{id}", tags=["parcel"], response_model=Dict[str,GetParcel])
async def update_get_parcels_status(id: int, data:UpdateParcelStatus ,db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)):
    db_order = db.query(Order).get(id)
    if not db_order:
        raise HTTPException(status_code=404, detail="Parcel ID not found.")
    db_order.status = data.parcel.status
    db.commit()
    db.refresh(db_order)
    return {"parcel":db_order}


@router.delete("/parcels/{_id}", tags=["food"])
async def delete_parcel(_id: int, db: Session = Depends(get_db)):
    parcel = db.get(Order, _id)
    return {"message": "Food has been deleted succesfully"}
