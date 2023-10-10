from datetime import datetime, date,time
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
    status: str
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

### Reservation
class CreateTableSchema(OrmBase):
    id: Optional[int]
    name: str
    reservedate: date

class CreateTableSchemaRequest(BaseModel):
    restable: CreateTableSchema

class TablesSchema(OrmBase):
    name: str
    reservedate: date
    createdate: datetime
    reservation_id:int

class ReserveSchema(OrmBase):
    username: str
    phoneno: str
    createdate: datetime
    reservedate: date
    reservetime: time
    description: str
    status: bool
    active: Optional[bool] = False
    tables: List[TablesSchema]  = []

    class Config:
        orm_mode = True

class CreateReserveSchema(OrmBase):
    id: Optional[int]
    username: str
    phoneno: str
    shop: str
    reservedate: date
    reservetime: time
    description: str
    status: Optional[bool] = True
    active: Optional[bool] = True
    tables: List

    class Config:
        orm_mode = True

class CreateReserveSchemaRequest(BaseModel):
    reservation: CreateReserveSchema

###Banner

class GetBannerSchema(OrmBase):
    id: Optional[int]
    title: str
    description: str
    createdate: datetime
    postImage: Optional[List] = []
    class Config:
        orm_mode = True

class CreateBannerSchema(OrmBase):
    id: Optional[int]
    title: str
    description: str
    postImage: Optional[List] = []

    class Config:
        orm_mode = True

class CreateBannerSchemaRequest(BaseModel):
    banner: CreateBannerSchema

###Post

class GetPostSchema(OrmBase):
    id: Optional[int]
    category: str
    title: str
    description: str
    createdate: datetime
    publishdate: datetime
    postImage: Optional[List] = []
    class Config:
        orm_mode = True

class CreatePostSchema(OrmBase):
    id: Optional[int]
    category: str
    title: str
    description: str
    publishdate: date
    isnoti: bool
    postImage: Optional[List] = []

    class Config:
        orm_mode = True

class CreatePostSchemaRequest(BaseModel):
    post: CreatePostSchema

###Category
class GetCategorySchema(OrmBase):
    id: int
    name: str
    postImage: Optional[List] = []
    createdate: datetime
    class Config:
        orm_mode = True

class CreateCategorySchema(OrmBase):
    id: Optional[int]
    name: str
    postImage: Optional[List] = []
    class Config:
        orm_mode = True

class CreateCategorySchemaRequest(BaseModel):
    category: CreateCategorySchema

###Food Category
class GetFoodCategorySchema(OrmBase):
    id: int
    name: str
    postImage: Optional[List] = []
    createdate: datetime
    class Config:
        orm_mode = True

class CreateFoodCategorySchema(OrmBase):
    id: Optional[int]
    name: str
    postImage: Optional[List] = []
    class Config:
        orm_mode = True

class CreateFoodCategorySchemaRequest(BaseModel):
    foodCategory: CreateFoodCategorySchema


class GetFoodSchema(OrmBase):
    id: Optional[int]
    name: str
    code: str
    description: str
    instock: bool
    bestsell: bool
    todayspecial: bool
    discount: int
    price: int
    createdate: datetime
    postImage: Optional[List] = []
    category: GetFoodCategorySchema  = []

    class Config:
        orm_mode = True

class FoodSchemaWithMeta(BaseModel):
    food: List[GetFoodSchema] = []
    meta : MetaSchema

class CreateFoodSchema(OrmBase):
    id: Optional[int]
    name: str
    code: str
    description: str
    instock: bool
    bestsell: bool
    todayspecial: bool
    discount: int
    price: int
    category_id: int
    postImage: Optional[List] = []
    class Config:
        orm_mode = True

class CreateFoodSchemaRequest(BaseModel):
    food: CreateFoodSchema


### Notification

class GetNotiSchema(OrmBase):
    id: Optional[int]
    title: str
    description: str
    createdate: datetime
    class Config:
        orm_mode = True

class CreateNotiSchema(BaseModel):
    title: str
    tier: str
    description: str

    class Config:
        orm_mode = True

class CreateNotiSchemaRequest(BaseModel):
    notification: CreateNotiSchema

class GetFAQSchema(OrmBase):
    id: int
    question: str
    answer: str
    createdate: datetime
    class Config:
        orm_mode = True

class CreateFAQSchema(OrmBase):
    id: Optional[int]
    question: str
    answer: str
    class Config:
        orm_mode = True

class CreateFAQSchemaRequest(BaseModel):
    faq: CreateFAQSchema


class EndUserSchema(OrmBase):
    username:str
    phoneno:str

class OrderItemSchema(BaseModel):
    id: Optional[int]
    price:Optional[int]=0
    food_id: Optional[int]=0
    quantity: Optional[int]=0
    food: GetFoodSchema

    class Config:
        orm_mode = True

class GetOrder(BaseModel):
    id: Optional[int]
    createdate: datetime
    payment: str
    postImage: Optional[List] = []
    user_id: int
    enduser:EndUserSchema
    status: str
    description: str
    order_items: Optional[List[OrderItemSchema]] = None

    class Config:
        orm_mode = True

class GetOrderSchemaWithMeta(BaseModel):
    order: List[GetOrder] = []
    meta : MetaSchema

class OrderStatus(BaseModel):
    status:str
    class Config:
        orm_mode = True

class UpdateOrderStatus(BaseModel):
    order: OrderStatus

