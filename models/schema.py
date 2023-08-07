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