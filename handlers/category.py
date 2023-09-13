import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetCategorySchema,
    CreateCategorySchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import CategoryModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
router = APIRouter()
auth_handler = AuthToken()


@router.get("/categories", tags=["category"])#, response_model=Dict[str,List[GetBookSchema],str,str])
async def get_categories(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(CategoryModel).count()
    meta_data =  pagination(page,per_page,count)
    categories = db.query(CategoryModel).order_by(desc(CategoryModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return jsonable_encoder({"category":categories,"meta":meta_data})



@router.post("/categories", tags=["category"], response_model=Dict[str,GetCategorySchema])
async def add_category(
    request: Request, data: CreateCategorySchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    category = CategoryModel(**data.category.dict())
    db.add(category)
    db.commit()
    db.refresh(category)

    return {"category":category}

@router.get("/categories/{id}", tags=["category"], response_model=Dict[str,GetCategorySchema])
def get_category_byid(id: int, db: Session = Depends(get_db)):
    category = db.get(CategoryModel, id)
    if not category:
        raise HTTPException(status_code=404, detail="Book ID not found.")
    return {"category":category}

@router.delete("/categories/{_id}", tags=["category"])
async def category_delete(_id: int, db: Session = Depends(get_db)):
    category = db.get(CategoryModel, _id)
    db.delete(category)
    db.commit()
    return {"message": "Category has been deleted succesfully"}


@router.put("/categories/{id}", tags=["category"], response_model=Dict[str,GetCategorySchema])
async def update_category(id: int, data: CreateCategorySchemaRequest,db: Session = Depends(get_db)):
    db_category = db.query(CategoryModel).get(id)
    if not db_category:
        raise HTTPException(status_code=404, detail="Category ID not found.")
    db_category.name =  data.category.name
    db_category.postImage =  data.category.postImage
    logger.info(data.category)
    db.commit()
    db.refresh(db_category)
    return {"category":db_category}


@router.get("/catlists", tags=["category"])#, response_model=Dict[str,List[GetBookSchema],str,str])
async def get_all_categories(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    categories = db.query(CategoryModel).order_by(desc(CategoryModel.createdate)).all()
    return jsonable_encoder({"catlist":categories})