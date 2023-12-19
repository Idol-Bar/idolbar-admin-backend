import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    EventSchema,
    CreateEventSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import EventModel
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from sqlalchemy import desc
from modules.utils import pagination
router = APIRouter()
auth_handler = AuthToken()


@router.get("/events", tags=["events"])#, response_model=Dict[str,List[GetBannerSchema]])
async def get_events(
    page: int = 1 , per_page: int=8,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(EventModel).count()
    meta_data =  pagination(page,per_page,count)
    events = db.query(EventModel).order_by(desc(EventModel.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"event":events,"meta":meta_data}


@router.post("/events", tags=["events"], response_model=Dict[str,EventSchema])
async def add_event(
    request: Request, data: CreateEventSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    events_db = EventModel(**data.event.dict())
    db.add(events_db)
    db.commit()
    db.refresh(events_db)
    return {"event":events_db}

@router.get("/events/{id}", tags=["events"], response_model=Dict[str,EventSchema])
def get_event_byid(id: int, db: Session = Depends(get_db)):
    events = db.get(EventModel, id)
    if not events:
        raise HTTPException(status_code=404, detail="Event ID not found.")
    return {"event":events}

@router.delete("/events/{_id}", tags=["events"])
async def event_delete(_id: int, db: Session = Depends(get_db)):
    event_db = db.get(EventModel, _id)
    db.delete(event_db)
    db.commit()
    return {"message": "Event has been deleted succesfully"}

@router.put("/events/{id}", tags=["events"], response_model=Dict[str,EventSchema])
async def update_events(id: int, data: CreateEventSchemaRequest,db: Session = Depends(get_db)):
    db_event = db.query(EventModel).get(id)
    if not db_event:
        raise HTTPException(status_code=404, detail="Event ID not found.")
    db_event.name =  data.event.name
    db_event.shop =  data.event.shop
    db_event.description =  data.event.description
    db_event.reservedate =  data.event.reservedate
    db_event.postImage =  data.event.postImage
    logger.info(data.event)
    db.commit()
    db.refresh(db_event)
    return {"event":db_event}