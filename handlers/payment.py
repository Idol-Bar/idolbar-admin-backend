import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    PaymentSchema,
    CreatePaymentSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import PaymentModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
router = APIRouter()
auth_handler = AuthToken()


@router.get("/payments", tags=["payment"])#, response_model=Dict[str,List[GetBannerSchema]])
async def get_payment(
    page: int = 1 , per_page: int=8,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(PaymentModel).count()
    meta_data =  pagination(page,per_page,count)
    payment = db.query(PaymentModel).order_by(desc(PaymentModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"payment":payment,"meta":meta_data}


@router.post("/payments", tags=["payment"], response_model=Dict[str,PaymentSchema])
async def add_payment(
    request: Request, data: CreatePaymentSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    payment_db = PaymentModel(**data.payment.dict())
    db.add(payment_db)
    db.commit()
    db.refresh(payment_db)
    return {"payment":payment_db}

@router.get("/payments/{id}", tags=["payment"], response_model=Dict[str,PaymentSchema])
def get_payment_byid(id: int, db: Session = Depends(get_db)):
    payments = db.get(PaymentModel, id)
    if not payments:
        raise HTTPException(status_code=404, detail="Payment ID not found.")
    return {"payment":payments}

@router.delete("/payments/{_id}", tags=["payment"])
async def payment_delete(_id: int, db: Session = Depends(get_db)):
    payment_db = db.get(PaymentModel, _id)
    db.delete(payment_db)
    db.commit()
    return {"message": "Payment has been deleted succesfully"}

@router.put("/payments/{id}", tags=["payment"], response_model=Dict[str,PaymentSchema])
async def update_payments(id: int, data: CreatePaymentSchemaRequest,db: Session = Depends(get_db)):
    db_payment = db.query(PaymentModel).get(id)
    if not db_payment:
        raise HTTPException(status_code=404, detail="Payment ID not found.")
    db_payment.name =  data.payment.name
    db_payment.shop =  data.payment.shop
    db_payment.account =  data.payment.account
    db.commit()
    db.refresh(db_payment)
    return {"payment":db_payment}