from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="OKN Public Marketing API")
api_router = APIRouter(prefix="/api")


# ---------------- Contact submissions ----------------
class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    organization: Optional[str] = Field(default=None, max_length=160)
    audience: str = Field(default="general")  # buyer | investor | government | media | general
    subject: Optional[str] = Field(default=None, max_length=160)
    message: str = Field(min_length=1, max_length=4000)


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    organization: Optional[str] = None
    audience: str = "general"
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"service": "OKN Public Marketing API", "status": "ok"}


@api_router.post("/contact", response_model=Contact, status_code=201)
async def create_contact(payload: ContactCreate):
    allowed = {"buyer", "investor", "government", "media", "general"}
    if payload.audience not in allowed:
        raise HTTPException(status_code=400, detail=f"audience must be one of {sorted(allowed)}")

    obj = Contact(**payload.model_dump())
    doc = obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.contact_submissions.insert_one(doc)
    return obj


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts(limit: int = 100):
    cursor = db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).limit(min(limit, 500))
    items = await cursor.to_list(length=min(limit, 500))
    for it in items:
        if isinstance(it.get("created_at"), str):
            it["created_at"] = datetime.fromisoformat(it["created_at"])
    return items


# ---------------- Stats endpoint (used by hero counters / footer) ----------------
@api_router.get("/stats")
async def stats():
    """Static brand stats consumed by the frontend so the page can show
    a single source of truth and animate counters on view."""
    return {
        "fixed_carbon_pct": 84.5,
        "market_leader_pct": 70,
        "general_biochar_pct": 50,
        "permanence_years": 1000,
        "years_validated": 6,
        "sites": 18,
        "crops": 16,
        "regions": 8,
        "disease_outbreaks": 0,
        "yield_rice_pct": 97,
        "yield_shallots_pct": 62,
        "yield_chili_pct": 60,
        "yield_oilpalm_pct": 29,
        "fertiliser_reduction_pct": 30,
        "indonesia_share_pct": 17,
        "indonesia_annual_potential_mt_co2e": 43_200_000,
        "national_facilities_supportable": 1500,
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
