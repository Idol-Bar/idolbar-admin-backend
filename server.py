from fastapi import FastAPI, Depends
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.logger import logger
import logging
from fastapi.middleware.cors import CORSMiddleware
import os.path as op
from modules.token import AuthToken
import datetime
from firebase_admin import credentials
import firebase_admin
def create_app():
    app = FastAPI()
    cred = credentials.Certificate("idolbar-firebase-adminsdk.json")
    firebase_app = firebase_admin.initialize_app(cred)
    auth_handler = AuthToken()
    origins = ["*"]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    from modules.dependency import AuthHandler
    from handlers import parcel,review,payment,login, auth, upload,member,profile,client,tier,point,transition,report,reservation,evtsource,banner,post,category,food,food_category,notification,faq,order,event
    from handlers.database import SessionLocal, engine
    #import models.model as app_model
    import handlers.database as app_model
    from models.model import User, Role,EndUser,Tier,TierRule

    app_model.Base.metadata.create_all(bind=engine)
    logging.basicConfig(
       format='Idolbar:{levelname:7} {message}', style='{', level=logging.DEBUG)

    app.include_router(upload.upload_router)
    app.include_router(upload.read_router)
    app.include_router(login.router)
    app.include_router(auth.router)
    app.include_router(member.router)
    app.include_router(profile.router)
    app.include_router(client.router)
    app.include_router(tier.router)
    app.include_router(point.router)
    app.include_router(transition.router)
    app.include_router(report.router)
    app.include_router(reservation.router)
    app.include_router(evtsource.router)
    app.include_router(banner.router)
    app.include_router(post.router)
    app.include_router(category.router)
    app.include_router(food.router)
    app.include_router(food_category.router)
    app.include_router(notification.router)
    app.include_router(faq.router)
    app.include_router(order.router)
    app.include_router(event.router)
    app.include_router(payment.router)
    app.include_router(review.router)
    app.include_router(parcel.router)
    #app.include_router(posts.router,dependencies=[Depends(AdminHandler)])
    
    app.mount("/public", StaticFiles(directory="dist"), name="public")
    app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

    @app.get("/{full_path:path}")
    def getSPA():
        with open("dist/index.html", "r") as file_index:
            html_content = file_index.read()
        return HTMLResponse(html_content, status_code=200)

    @app.on_event("startup")
    async def startup_event():
        tier_data = [
            {
                "name": "silver",
                "lower": 0,
                "higher": 10000,
                "percentage": 1,
                "description": "Silver User",
                "unit":10,
                "postImage": [],
            },
            {
                "name": "gold",
                "lower": 10001,
                "higher": 20000,
                "percentage": 2,
                "description": "gold User",
                "unit":20,
                "postImage": [],
            },
            {
                "name": "platinum",
                "lower": 20001,
                "higher": 30000,
                "percentage": 3,
                "description": "Platinum User",
                "unit":30,
                "postImage": [],
            },
        ]
        user_data = [
            {
                "username": "ibaradmin",
                "password": "ibaradmin",
                "role": "admin",
                "email": "admin@gmail.com",
            },
            {
                "username": "ibarmanager1",
                "password": "ibarmanager1",
                "role": "shop1",
                "email": "ibarmanager1@gmail.com",
            },
            {
                "username": "ibarmanager2",
                "password": "ibarmanager2",
                "role": "shop2",
                "email": "ibarmanager2@gmail.com",
            },
            {
                "username": "ibarcasher",
                "password": "ibarcasher",
                "role": "casher",
                "email": "casher@gmail.com",
            }
        ]
        db = SessionLocal()
        for user in user_data:
            is_user = db.query(User).filter(User.username == user["username"]).first()
            if not is_user:
                logger.info("User  Does not Exist")
                hashed_password = auth_handler.encode_password(user["password"])
                role = Role(name=user["role"])
                db_user = User(
                    username=user["username"],
                    password=hashed_password,
                    role=[role],
                )
                db.add(db_user)
                db.add(role)
                db.commit()
            else:
                logger.info(
                    user["username"]
                    + " Already Exists with role "
                    + user["role"]
                )
        for tier in tier_data:
            is_tier_rule = db.query(TierRule).filter(TierRule.name == tier["name"]).first()
            if not is_tier_rule:
                logger.info(f"Tier {tier['name']}  Does not Exist")
                
                db_tier = TierRule(name=tier["name"],lower= tier["lower"],higher= tier["higher"],percentage= tier["percentage"],description=tier["description"],unit=tier["unit"],postImage=  [])
                db.add(db_tier)
                db.commit()
            else:
                logger.info(
                    tier["name"]
                    + " Already Exists"
                )
        logger.info("Database Startup Complete")
        
        # end_user_data = [{"username":"ppk","phoneno":"098737838"},{"username":"lma","phoneno":"09172838843"}]
        # for end_user_data in end_user_data:
        #     is_user = db.query(EndUser).filter(EndUser.username == end_user_data["username"]).first()
        #     if not is_user:
        #         tier = Tier(name="gold")
        #         db_end_user = EndUser(username=end_user_data["username"],birthday=datetime.datetime.now(),phoneno=end_user_data["phoneno"],status=True,active=True,tier=[tier])
        #         db.add(db_end_user)
        #         db.add(tier)
        #         db.commit()
        #     else:
        #         logger.info(
        #             end_user_data["username"]
        #             + " Already Exists with in EndUser "
        #         )
    return app


app = create_app()
