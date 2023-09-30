import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetFoodSchema,
    CreateFoodSchemaRequest,
    FoodSchemaWithMeta
)
from typing import List, Dict
from .database import get_db
from models.model import FoodModel,FoodCategoryModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
from firebase_admin import messaging
router = APIRouter()
auth_handler = AuthToken()


@router.get("/foods", tags=["food"],response_model=FoodSchemaWithMeta)
async def get_food(
page: int = 1 , per_page: int=12,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(FoodModel).count()
    meta_data =  pagination(page,per_page,count)
    post_data = db.query(FoodModel).order_by(desc(FoodModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()

    return {"food":post_data,"meta":meta_data}


@router.post("/foods", tags=["food"])#, response_model=Dict[str,GetFoodSchema])
async def add_food(
    request: Request, data: CreateFoodSchemaRequest, db: Session = Depends(get_db)
):
    food = data.food
    category = db.get(FoodCategoryModel, data.food.category_id)
    foods = FoodModel(name=food.name, category=category,code=food.code,description=food.description,
            instock=food.instock,bestsell=food.bestsell,todayspecial=food.todayspecial,
            discount=food.discount,price=food.price,postImage=food.postImage)
    db.add(foods)
    db.commit()
    db.refresh(foods)
    return {"food":foods}


@router.get("/foods/{id}", tags=["food"], response_model=Dict[str,GetFoodSchema])
def get_food_byid(id: int, db: Session = Depends(get_db)):
    food_data = db.get(FoodModel, id)
    if not food_data:
        raise HTTPException(status_code=404, detail="Food ID not found.")
    return {"food":food_data}

@router.delete("/foods/{food_id}", tags=["food"])
async def delete_food(food_id: int, db: Session = Depends(get_db)):
    food_data = db.get(FoodModel, food_id)
    db.delete(food_data)
    db.commit()
    return {"message": "Food has been deleted succesfully"}


@router.put("/foods/{id}", tags=["food"], response_model=Dict[str,GetFoodSchema])
async def update_food(id: int, data: CreateFoodSchemaRequest,db: Session = Depends(get_db)):
    db_food = db.query(FoodModel).get(id)
    category = db.get(FoodCategoryModel, data.food.category_id)
    if not db_food:
        raise HTTPException(status_code=404, detail="Food ID not found.")
    db_food.name =  data.food.name
    db_food.description = data.food.description
    db_food.instock = data.food.instock
    db_food.bestsell = data.food.bestsell
    db_food.todayspecial = data.food.todayspecial
    db_food.discount = data.food.discount
    db_food.price = data.food.price
    db_food.postImage = data.food.postImage
    db_food.category =  category
    logger.info(data.food)
    db.commit()
    db.refresh(db_food)
    return {"food":db_food}