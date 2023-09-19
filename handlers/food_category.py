import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetFoodCategorySchema,
    CreateFoodCategorySchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import FoodCategoryModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
router = APIRouter()
auth_handler = AuthToken()


@router.get("/foodCategories", tags=["food"])#, response_model=Dict[str,List[GetBookSchema],str,str])
async def get_categories(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(FoodCategoryModel).count()
    meta_data =  pagination(page,per_page,count)
    categories = db.query(FoodCategoryModel).order_by(desc(FoodCategoryModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return jsonable_encoder({"foodCategory":categories,"meta":meta_data})



@router.post("/foodCategories", tags=["food"], response_model=Dict[str,GetFoodCategorySchema])
async def add_category(
    request: Request, data: CreateFoodCategorySchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    category = FoodCategoryModel(**data.foodCategory.dict())
    db.add(category)
    db.commit()
    db.refresh(category)

    return {"foodCategory":category}

@router.get("/foodCategories/{id}", tags=["food"], response_model=Dict[str,GetFoodCategorySchema])
def get_category_byid(id: int, db: Session = Depends(get_db)):
    category = db.get(FoodCategoryModel, id)
    if not category:
        raise HTTPException(status_code=404, detail="Book ID not found.")
    return {"food-category":category}

@router.delete("/foodCategories/{_id}", tags=["food"])
async def category_delete(_id: int, db: Session = Depends(get_db)):
    category = db.get(FoodCategoryModel, _id)
    db.delete(category)
    db.commit()
    return {"message": "Category has been deleted succesfully"}


@router.put("/foodCategories/{id}", tags=["food"], response_model=Dict[str,GetFoodCategorySchema])
async def update_category(id: int, data: CreateFoodCategorySchemaRequest,db: Session = Depends(get_db)):
    db_category = db.query(FoodCategoryModel).get(id)
    if not db_category:
        raise HTTPException(status_code=404, detail="Category ID not found.")
    db_category.name =  data.foodCategory.name
    db_category.postImage =  data.foodCategory.postImage
    logger.info(data.foodCategory)
    db.commit()
    db.refresh(db_category)
    return {"foodCategory":db_category}


@router.get("/foodcatlists", tags=["food"])#, response_model=Dict[str,List[GetBookSchema],str,str])
async def get_all_categories(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    categories = db.query(FoodCategoryModel).order_by(desc(FoodCategoryModel.createdate)).all()
    return jsonable_encoder({"foodcatlist":categories})