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
    #cred = credentials.Certificate("royaltrip-admin-sdk.json")
    #firebase_app = firebase_admin.initialize_app(cred)
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
    from handlers import login, auth, upload,member,profile,client,tier,point,transition,report,reservation,evtsource
    from handlers.database import SessionLocal, engine
    #import models.model as app_model
    import handlers.database as app_model
    from models.model import User, Role,EndUser,Tier

    app_model.Base.metadata.create_all(bind=engine)
    logging.basicConfig(
       format='AloDawPyi:{levelname:7} {message}', style='{', level=logging.DEBUG)

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
