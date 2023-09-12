import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    ReserveSchema,
    CreateReserveSchemaRequest,
    TablesSchema,
    CreateTableSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import Reservation, Tables
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc,func
from datetime import datetime, date
from uuid import uuid4
router = APIRouter()
auth_handler = AuthToken()


@router.get("/reservations", tags=["reservation"], response_model=Dict[str,List[ReserveSchema]])
async def get_reservation(
    tables:str = None,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    if tables:
        reservation = db.query(Reservation).join(Tables, Reservation.tables).filter(func.date(Reservation.reservedate)==date.today(),Tables.name==tables).order_by(desc(Reservation.createdate)).all()
        return {"reservation":reservation}
    else:
        #reservation = db.query(Reservation).join(Tables, Reservation.tables).filter(func.date(Reservation.reservedate)==date.today()).order_by(desc(Reservation.createdate)).all()
        return {"reservation":[]}


@router.post("/reservations", tags=["reservation"])#, response_model=Dict[str,ReserveSchema])
async def add_reservation(
    request: Request, reservation: CreateReserveSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(reservation.dict())
    data = reservation.reservation
    logger.info(data.tables[0])
    is_reserved = db.query(Reservation).join(Tables, Reservation.tables).filter(func.date(Reservation.reservedate) == data.reservedate,Tables.name==data.tables[0]).first()
    if is_reserved:
        raise HTTPException(status_code=400, detail="Reservation already registered.")
    tables = Tables(name=data.tables[0],reservedate=data.reservedate)
    order = Reservation(username=data.username, phoneno=data.phoneno,reservedate=data.reservedate,reservetime=data.reservetime,
                    description=data.description,status=data.status,active=True,tables=[tables])
    db.add(order)
    db.add(tables)
    db.commit()
    db.refresh(order)

    return {"reservation":order}

@router.get("/restables", tags=["reservation"], response_model=Dict[str,List[TablesSchema]])
async def get_tables(
    reservedate:date = None,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    if reservedate:
        restables = db.query(Tables).filter(func.date(Tables.reservedate)==reservedate).order_by(desc(Tables.createdate)).all()
        return {"restable":restables}
    else:
        restables = db.query(Tables).filter(func.date(Tables.reservedate)==date.today()).order_by(desc(Tables.createdate)).all()
        return {"restable":restables}


@router.post("/restables", tags=["reservation"])#, response_model=Dict[str,ReserveSchema])
async def add_tables(
    request: Request, data: CreateTableSchemaRequest, db: Session = Depends(get_db)
):
    logger.info(data.dict())
    tables = data.dict()
    tables["restable"]["id"] = str(uuid4())
    return {"restable":tables["restable"]}