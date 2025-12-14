from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class QuizAnswer(BaseModel):
    question_index: int
    selected_option: str
    points: int

class QuizSubmission(BaseModel):
    quiz_type: str  # 'youth', 'adult', 'business'
    user_name: str
    user_email: str
    answers: List[QuizAnswer]

class QuizResponse(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    quiz_type: str
    user_name: str
    user_email: str
    answers: List[QuizAnswer]
    total_score: int
    result_category: str
    result_message: str
    cta_message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class ContactSubmission(BaseModel):
    name: str
    email: str
    message: str
    quiz_id: str = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

def calculate_quiz_result(quiz_type: str, total_score: int):
    """Calculate quiz result based on quiz type and score"""
    
    if quiz_type == 'youth':
        if 7 <= total_score <= 12:
            return {
                "category": "The Creative Explorer",
                "message": "You have great ideas, but need a map! You enjoy aesthetics and need structure to turn curiosity into code.",
                "cta": "Focus on the fun and visual aspects of the $149 Tech Jumpstart."
            }
        elif 13 <= total_score <= 17:
            return {
                "category": "The Logic Architect",
                "message": "You show clear patterns of systematic thinking and planning. You are a natural developer in the making!",
                "cta": "Strongest CTA. Focus on the strategic planning aspect of the $149 Tech Jumpstart."
            }
        else:  # 18-21
            return {
                "category": "The Future Hacker",
                "message": "You are driven by deep curiosity and figuring out complex mechanics. You have the grit for advanced systems.",
                "cta": "Focus on the advanced projects in the $249 BuildLab (as an ultimate goal)."
            }
    
    elif quiz_type == 'adult':
        if 7 <= total_score <= 13:
            return {
                "category": "Curious Beginner",
                "message": "You need motivation and a clear plan. Your immediate next step is the $149 Tech Jumpstart to test the waters and gain structure.",
                "cta": "Book your $149 Tech Jumpstart session to get started with a clear plan."
            }
        elif 14 <= total_score <= 18:
            return {
                "category": "Motivated Builder",
                "message": "You have the right mindset but lack a portfolio. Your best fit is the $249 BuildLab to gain interview-ready project experience quickly.",
                "cta": "Join the $249 BuildLab to build your portfolio and gain real project experience."
            }
        else:  # 19-21
            return {
                "category": "Career Accelerator",
                "message": "You have the discipline and logic to succeed. Don't waste time self-teaching.",
                "cta": "Book a Free Tech Clarity Session to tailor your $499 Foundations Pro: 6-Week SPRINT."
            }
    
    else:  # business
        if 7 <= total_score <= 11:
            return {
                "category": "Efficiency Leader",
                "message": "You have a great foundation. Let's discuss Automation & Optimization.",
                "cta": "Book a Developer Power Hour Bundle to discuss a specific optimization opportunity."
            }
        elif 12 <= total_score <= 16:
            return {
                "category": "Hidden Costs Warning",
                "message": "You are leaking staff time and risking errors. Your biggest need is System Integration.",
                "cta": "Book a Free Strategy Session to discuss the LaunchPad: Technical Scope & Discovery."
            }
        else:  # 17-21
            return {
                "category": "Scaling Crisis Alert",
                "message": "Your tech stack is actively holding back growth. Immediate action is required to prevent critical failure.",
                "cta": "Book a Free Strategy Session now to discuss a Strategic Retainer Partnership."
            }

@api_router.post("/quiz/submit", response_model=QuizResponse)
async def submit_quiz(submission: QuizSubmission):
    """Submit quiz and calculate results"""
    total_score = sum(answer.points for answer in submission.answers)
    result = calculate_quiz_result(submission.quiz_type, total_score)
    
    quiz_response = QuizResponse(
        quiz_type=submission.quiz_type,
        user_name=submission.user_name,
        user_email=submission.user_email,
        answers=submission.answers,
        total_score=total_score,
        result_category=result["category"],
        result_message=result["message"],
        cta_message=result["cta"]
    )
    
    await db.quiz_responses.insert_one(quiz_response.dict())
    return quiz_response

@api_router.post("/contact")
async def submit_contact(contact: ContactSubmission):
    """Submit contact form"""
    contact_dict = contact.dict()
    contact_dict['id'] = str(uuid.uuid4())
    contact_dict['timestamp'] = datetime.utcnow()
    
    await db.contacts.insert_one(contact_dict)
    return {"message": "Contact form submitted successfully", "id": contact_dict['id']}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
