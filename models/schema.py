from datetime import datetime, date
from uuid import uuid4, UUID
from typing import List, Optional, Any
from pydantic import BaseModel, validator,Field
from sqlalchemy.orm import Query
import json
import uuid
class OrmBase(BaseModel):
    id: int

    @validator("*", pre=True)
    def evaluate_lazy_columns(cls, v):
        if isinstance(v, Query):
            return v.all()
        return v

    class Config:
        orm_mode = True


class RoleSchema(OrmBase):
    name: str


class UserSchema(OrmBase):
    email: str
    username: str
    createdate: datetime
    role: List[RoleSchema]


class NewUserSchema(BaseModel):
    email: str
    username: str
    password: str
    role: str


class CurrentUser(BaseModel):
    id: int
    username: str
    role: str

    class Config:
        orm_mode = True


class LoginSchema(BaseModel):
    username: str
    password: str

    class Config:
        orm_mode = True

##MemberSchema

class MemberSchema(OrmBase):
    username: str
    password: str
    createdate: datetime
    active: Optional[bool] = False
    role: List[RoleSchema]
    postImage: Optional[List] = []

    class Config:
        orm_mode = True

"""class MemberSchemaResponse(BaseModel):
    member: List[MemberSchema]"""

class ProfileSchema(OrmBase):
    username: str
    createdate: datetime
    active: Optional[bool] = False
    role: List[RoleSchema]
    postImage: Optional[List] = []

    class Config:
        orm_mode = True

class SelectPasswordSchema(BaseModel):
    id:int
    username:str
    class Config:
        orm_mode = True

class PasswordSchema(BaseModel):
    username:Optional[str]
    old_password:Optional[str]
    new_password:Optional[str]
    confirm_password:Optional[str]
    class Config:
        orm_mode = True

class UpdatePasswordSchema(BaseModel):
    updatePassword:PasswordSchema

class CreateMemberSchema(BaseModel):
    username: str
    password: str
    role: str
    active: Optional[bool] = False
    postImage: Optional[List] = []

    class Config:
        orm_mode = True

class CreateMemberSchemaRequest(BaseModel):
    member: CreateMemberSchema


###Client Schema

class TierSchema(OrmBase):
    name: str

class ClientSchema(OrmBase):
    username: str
    birthday: str
    createdate: datetime
    phoneno: str
    status: bool
    active: Optional[bool] = False
    tier: List[TierSchema]  = []
 
    postImage: Optional[List] = []

    class Config:
        orm_mode = True

class MetaSchema(OrmBase):
    id: Optional[int] =  1
    total_pages: int
    page: Optional[int] =  1
   
class ClientSchemaWithMeta(BaseModel):
    client: List[ClientSchema] = []
    meta : MetaSchema


###Tier Rule Schema

class TierRuleSchema(OrmBase):
    name: str
    lower: int
    higher: int
    percentage: int
    description: str
    postImage: Optional[List] = []
    createdate: datetime
    
    class Config:
        orm_mode = True

class CreateTierRuleSchema(OrmBase):
    id: Optional[int]
    name: str
    lower: int
    higher: int
    percentage: int
    description: str
    postImage: Optional[List] = []

    class Config:
        orm_mode = True

class CreateTierRuleSchemaRequest(BaseModel):
    tierRule: CreateTierRuleSchema

### Point Schema 

class AddPointSchema(OrmBase):
    id: Optional[int]
    userId: int
    unit: int
    amount:Optional[int]=0