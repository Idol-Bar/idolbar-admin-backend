import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    GetBannerSchema,
    CreateBannerSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import BannerModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
router = APIRouter()
auth_handler = AuthToken()


@router.get("/banners", tags=["banner"])#, response_model=Dict[str,List[GetBannerSchema]])
async def get_banner(
    page: int = 1 , per_page: int=10,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(BannerModel).count()
    meta_data =  pagination(page,per_page,count)
    banner = db.query(BannerModel).order_by(desc(BannerModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"banner":banner,"meta":meta_data}


@router.post("/banners", tags=["banner"], response_model=Dict[str,GetBannerSchema])
async def add_banner(
    request: Request, data: CreateBannerSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    banner = BannerModel(**data.banner.dict())
    db.add(banner)
    db.commit()
    db.refresh(banner)

    return {"banner":banner}

@router.get("/banners/{id}", tags=["banner"], response_model=Dict[str,GetBannerSchema])
def get_banner_byid(id: int, db: Session = Depends(get_db)):
    banner = db.get(BannerModel, id)
    if not member:
        raise HTTPException(status_code=404, detail="Banner ID not found.")
    return {"banner":banner}

@router.delete("/banners/{_id}", tags=["banner"])
async def delete_banner(_id: int, db: Session = Depends(get_db)):
    banner = db.get(BannerModel, _id)
    db.delete(banner)
    db.commit()
    return {"message": "Banner has been deleted succesfully"}