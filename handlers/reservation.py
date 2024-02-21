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
from models.model import Reservation, Tables,EndUser
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc,func,text
from datetime import datetime, date
from uuid import uuid4
from pydantic import parse_obj_as
import json
import psycopg2
router = APIRouter()
auth_handler = AuthToken()

from configs.setting import Settings

settings = Settings()

conn = psycopg2.connect(host=settings._dbhost, dbname=settings._dbname, user=settings._dbuser, password=settings._dbpass)
cursor = conn.cursor()
conn.set_isolation_level(psycopg2.extensions.ISOLATION_LEVEL_AUTOCOMMIT)


@router.get("/reservations", tags=["reservation"], response_model=Dict[str,List[ReserveSchema]])
async def get_reservation(
    tables:str = None,reservedate:date = date.today(),shop:str = None,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    if tables:
        reservation = db.query(Reservation).join(Tables, Reservation.tables).filter(func.date(Reservation.reservedate)==reservedate,Tables.name==tables,Tables.shop==shop).order_by(desc(Reservation.createdate)).all()
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
    #receive = db.query(EndUser).filter(EndUser.phoneno ==data.phoneno).first()
    #if not receive:
    #    logger.info("No User with Phone")
    #    raise HTTPException(status_code=400, detail="User Not Found.")

    is_reserved = db.query(Reservation).join(Tables, Reservation.tables).filter(func.date(Reservation.reservedate) == data.reservedate,Tables.name==data.tables[0],Tables.shop==data.shop).first()
    if is_reserved:
        raise HTTPException(status_code=400, detail="Reservation already registered.")
    tables = Tables(name=data.tables[0],reservedate=data.reservedate,shop=data.shop)
    order = Reservation(username=data.username, phoneno=data.phoneno,reservedate=data.reservedate,reservetime=data.reservetime,
                    description=data.description,status=data.status,active=True,tables=[tables])
    db.add(order)
    db.add(tables)
    db.commit()
    #for eventsource
    evt_data = json.dumps(parse_obj_as(TablesSchema,tables).dict(), default=str)
    logger.info(evt_data)
    #db.execute(text("SELECT pg_notify(:channel, :data)").bindparams(channel="match_updates", data=evt_data))
    #db.commit()
    cursor.execute(f"NOTIFY match_updates, '{evt_data}';")
    ###
    db.refresh(order)
    return {"reservation":order}

@router.get("/reservations/{id}", tags=["reservation"], response_model=Dict[str,ReserveSchema])
def get_reservation_byid(id: int, db: Session = Depends(get_db)):
    reservation = db.get(Reservation, id)
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation ID not found.")
    return {"reservation":reservation}

@router.delete("/reservations/{id}", tags=["reservation"])
async def delete_reservation(id: int, db: Session = Depends(get_db)):
    reservations = db.get(Reservation, id)
    db.delete(reservations)
    db.commit()
    return {"message": "User has been deleted succesfully"}

#####
@router.get("/restables", tags=["reservation"], response_model=Dict[str,List[TablesSchema]])
async def get_tables(
    reservedate:date = None,shop:str=None,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    if reservedate and shop:
        restables = db.query(Tables).filter(func.date(Tables.reservedate)==reservedate,Tables.shop==shop).order_by(desc(Tables.createdate)).all()
        return {"restable":restables}
    elif not reservedate and shop:
        #from router
        restables = db.query(Tables).filter(func.date(Tables.reservedate)==date.today(),Tables.shop==shop).order_by(desc(Tables.createdate)).all()
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