import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetFAQSchema,
    CreateFAQSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import FaqModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
router = APIRouter()
auth_handler = AuthToken()


@router.get("/faqs", tags=["faq"])#, response_model=Dict[str,List[GetBookSchema],str,str])
async def get_faqs(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(FaqModel).count()
    meta_data =  pagination(page,per_page,count)
    faq = db.query(FaqModel).order_by(desc(FaqModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return jsonable_encoder({"faq":faq,"meta":meta_data})



@router.post("/faqs", tags=["faq"], response_model=Dict[str,GetFAQSchema])
async def add_faq(
    request: Request, data: CreateFAQSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    faq = FaqModel(**data.faq.dict())
    db.add(faq)
    db.commit()
    db.refresh(faq)

    return {"faq":faq}

@router.get("/faqs/{id}", tags=["faq"], response_model=Dict[str,GetFAQSchema])
def get_faq_byid(id: int, db: Session = Depends(get_db)):
    faq = db.get(FaqModel, id)
    if not faq:
        raise HTTPException(status_code=404, detail="FAQ ID not found.")
    return {"faq":faq}

@router.delete("/faqs/{_id}", tags=["faq"])
async def faq_delete(_id: int, db: Session = Depends(get_db)):
    faq = db.get(FaqModel, _id)
    db.delete(faq)
    db.commit()
    return {"message": "FAQ has been deleted succesfully"}


@router.put("/faqs/{id}", tags=["faq"], response_model=Dict[str,GetFAQSchema])
async def update_faq(id: int, data: CreateFAQSchemaRequest,db: Session = Depends(get_db)):
    db_faq = db.query(FaqModel).get(id)
    if not db_faq:
        raise HTTPException(status_code=404, detail="FAQ ID not found.")
    db_faq.question =  data.faq.question
    db_faq.answer =  data.faq.answer
    db.commit()
    db.refresh(db_faq)
    return {"faq":db_faq}
