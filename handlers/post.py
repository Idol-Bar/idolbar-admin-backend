import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetPostSchema,
    CreatePostSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import PostModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
from firebase_admin import messaging
router = APIRouter()
auth_handler = AuthToken()


@router.get("/posts", tags=["post"])#, response_model=Dict[str,List[GetPostSchema]])
async def get_post(
page: int = 1 , per_page: int=8,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(PostModel).count()
    meta_data =  pagination(page,per_page,count)
    post_data = db.query(PostModel).order_by(desc(PostModel.publishdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"post":post_data,"meta":meta_data}


@router.post("/posts", tags=["post"], response_model=Dict[str,GetPostSchema])
async def add_post(
    request: Request, data: CreatePostSchemaRequest, db: Session = Depends(get_db)
):
    if(data.post.isnoti):
        logger.info("send notification")
        message = messaging.Message(notification=messaging.Notification(title=data.post.title,body=data.post.description),android=messaging.AndroidConfig( priority='normal', notification=messaging.AndroidNotification( default_sound=True ), ), topic="alodawpyei")
        response = messaging.send(message)
        print(response)
    #posts = PostModel(title=data.post.title, category=data.post.category,description=data.post.description,postImage=data.post.postImage)
    posts = PostModel(**data.post.dict())
    db.add(posts)
    db.commit()
    db.refresh(posts)

    return {"post":posts}

@router.get("/posts/{id}", tags=["post"], response_model=Dict[str,GetPostSchema])
def get_post_byid(id: int, db: Session = Depends(get_db)):
    post_data = db.get(PostModel, id)
    if not post_data:
        raise HTTPException(status_code=404, detail="Post ID not found.")
    return {"post":post_data}

@router.delete("/posts/{post_id}", tags=["post"])
async def delete_post(post_id: int, db: Session = Depends(get_db)):
    post_data = db.get(PostModel, post_id)
    db.delete(post_data)
    db.commit()
    return {"message": "News has been deleted succesfully"}



@router.put("/posts/{id}", tags=["member"], response_model=Dict[str,GetPostSchema])
async def update_post(id: int, data: CreatePostSchemaRequest,db: Session = Depends(get_db)):
    db_post = db.query(PostModel).get(id)
    if not db_post:
        raise HTTPException(status_code=404, detail="News ID not found.")
    db_post.title =  data.post.title
    db_post.category =  data.post.category
    db_post.description =  data.post.description
    db_post.postImage =  data.post.postImage
    db_post.publishdate = data.post.publishdate
    db.commit()
    db.refresh(db_post)
    return {"post":db_post}