from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class EmailSubscription(BaseModel):
    email: str

class SubscriptionResponse(BaseModel):
    id: str
    email: str
    subscribed_at: str
    message: str

def is_valid_email(email: str) -> bool:
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

@api_router.get("/")
async def root():
    return {"message": "OneByteOne API - Helping You Succeed, One Byte at a Time"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/subscribe", response_model=SubscriptionResponse)
async def subscribe_email(subscription: EmailSubscription):
    """Subscribe email for roadmap downloads"""
    email = subscription.email.strip().lower()
    
    if not email or not is_valid_email(email):
        raise HTTPException(status_code=400, detail="Invalid email address")
    
    existing = await db.subscriptions.find_one({"email": email})
    if existing:
        return SubscriptionResponse(
            id=existing['id'],
            email=email,
            subscribed_at=existing['subscribed_at'],
            message="You're already subscribed! Check your email for the download links."
        )
    
    subscription_id = str(uuid.uuid4())
    subscribed_at = datetime.now(timezone.utc).isoformat()
    
    doc = {
        "id": subscription_id,
        "email": email,
        "subscribed_at": subscribed_at,
        "source": "roadmap_download"
    }
    
    await db.subscriptions.insert_one(doc)
    
    return SubscriptionResponse(
        id=subscription_id,
        email=email,
        subscribed_at=subscribed_at,
        message="Success! Check your email for the download links."
    )

@api_router.get("/subscriptions", response_model=List[dict])
async def get_subscriptions():
    """Get all email subscriptions (admin)"""
    subscriptions = await db.subscriptions.find({}, {"_id": 0}).to_list(1000)
    return subscriptions

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()