import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetReviewSchema,
    CreateReviewSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import ReviewModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
router = APIRouter()
auth_handler = AuthToken()


@router.get("/reviews", tags=["review"])#, response_model=Dict[str,List[GetBookSchema],str,str])
async def get_reviews(
    page: int = 1 , per_page: int=10,owner:str="",status:str="",
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(ReviewModel).filter(ReviewModel.status==status,ReviewModel.owner==owner).count()
    meta_data =  pagination(page,per_page,count)
    review = db.query(ReviewModel).filter(ReviewModel.status==status,ReviewModel.owner==owner).order_by(desc(ReviewModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return jsonable_encoder({"review":review,"meta":meta_data})



@router.post("/reviews", tags=["review"], response_model=Dict[str,GetReviewSchema])
async def add_review(
    request: Request, data: CreateReviewSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    review = ReviewModel(**data.review.dict())
    db.add(review)
    db.commit()
    db.refresh(review)

    return {"review":review}

@router.get("/reviews/{id}", tags=["review"], response_model=Dict[str,GetReviewSchema])
def get_review_byid(id: int, db: Session = Depends(get_db)):
    review = db.get(ReviewModel, id)
    if not review:
        raise HTTPException(status_code=404, detail="Review ID not found.")
    return {"review":review}

@router.delete("/reviews/{_id}", tags=["review"])
async def review_delete(_id: int, db: Session = Depends(get_db)):
    review = db.get(ReviewModel, _id)
    db.delete(review)
    db.commit()
    return {"message": "Review has been deleted succesfully"}


@router.put("/reviews/{id}", tags=["review"], response_model=Dict[str,GetReviewSchema])
async def update_review(id: int, data: CreateReviewSchemaRequest,db: Session = Depends(get_db)):
    db_review = db.query(ReviewModel).get(id)
    if not db_review:
        raise HTTPException(status_code=404, detail="Review ID not found.")
    db_review.status =  data.review.status
    db.commit()
    db.refresh(db_review)
    return {"review":db_review}
