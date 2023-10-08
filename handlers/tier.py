import logging
from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.logger import logger
from models.schema import (
    CurrentUser,
    TierRuleSchema,
    CreateTierRuleSchemaRequest
)
from typing import List, Dict
from .database import get_db
from models.model import TierRule,Role
from sqlalchemy.orm import Session
from modules.dependency import get_current_user
from modules.token import AuthToken
from modules.utils import pagination
from sqlalchemy import desc
router = APIRouter()
auth_handler = AuthToken()


@router.get("/tierRules", tags=["tier"])
async def get_tier_rule(
    page: int = 1 , per_page: int=25,
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    count = db.query(TierRule).count()
    meta_data =  pagination(page,per_page,count)
    post_data = db.query(TierRule).order_by(desc(TierRule.createdate)).limit(per_page).offset((page - 1) * per_page).all()
    return {"tier-rule":post_data,"meta":meta_data}


@router.get("/tierRules/{id}", tags=["tier"], response_model=Dict[str,TierRuleSchema])
def get_tier_ruke_byid(id: int, db: Session = Depends(get_db)):
    tier_rule = db.get(TierRule, id)
    if not tier_rule:
        raise HTTPException(status_code=404, detail="Tier ID not found.")
    return {"tier_rule":tier_rule}

@router.post("/tierRules", tags=["tier"], response_model=Dict[str,TierRuleSchema])
async def add_tier_rule(
    request: Request, data: CreateTierRuleSchemaRequest, db: Session = Depends(get_db)
):
    tier_rule = TierRule(**data.tierRule.dict())
    db.add(tier_rule)
    db.commit()
    db.refresh(tier_rule)
    return {"tier_rule":tier_rule}


@router.delete("/tierRules/{tier_id}", tags=["tier"])
async def delete_member(tier_id: int, db: Session = Depends(get_db)):
    tier_rule = db.get(TierRule, tier_id)
    db.delete(tier_rule)
    db.commit()
    return {"message": "User has been deleted succesfully"}


@router.get("/tiers", tags=["tier"])
async def get_tiers(
    db: Session = Depends(get_db), current_user: CurrentUser = Depends(get_current_user)
):
    post_data = db.query(TierRule.id,TierRule.name,TierRule.createdate).order_by(desc(TierRule.createdate)).all()
    return {"tier":post_data}
