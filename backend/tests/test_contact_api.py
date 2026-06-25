"""Backend tests for OKN /api/contact endpoint."""
import os
import uuid
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).resolve().parents[1] / ".env")

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fall back to frontend env (public URL) so we test what user sees.
    fe_env = Path("/app/frontend/.env")
    for line in fe_env.read_text().splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip()
            break

BASE_URL = (BASE_URL or "").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
def test_root_alive(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200, r.text
    data = r.json()
    assert "OKN" in data.get("message", "")


# ---------- POST /api/contact ----------
def test_create_contact_valid(client):
    payload = {
        "name": "TEST_Alice",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "organisation": "TEST Org",
        "audience": "investor",
        "message": "Please share the data room.",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 201, r.text
    body = r.json()
    assert body["name"] == payload["name"]
    assert body["email"] == payload["email"]
    assert body["organisation"] == payload["organisation"]
    assert body["audience"] == payload["audience"]
    assert body["message"] == payload["message"]
    assert isinstance(body.get("id"), str) and len(body["id"]) > 0
    assert isinstance(body.get("created_at"), str) and len(body["created_at"]) > 0

    # Persistence: should appear in GET list
    r2 = client.get(f"{API}/contact")
    assert r2.status_code == 200
    items = r2.json()
    assert any(it["id"] == body["id"] for it in items)


def test_create_contact_without_organisation(client):
    payload = {
        "name": "TEST_Bob",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "audience": "cdr",
        "message": "Need 1000t CDR.",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 201, r.text
    body = r.json()
    assert body["organisation"] in (None, "")


def test_create_contact_invalid_email(client):
    payload = {
        "name": "TEST_Carol",
        "email": "not-an-email",
        "audience": "general",
        "message": "Hi",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422, r.text


def test_create_contact_missing_required_name(client):
    payload = {
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "audience": "general",
        "message": "Hi",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422, r.text


def test_create_contact_missing_required_message(client):
    payload = {
        "name": "TEST_Dave",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "audience": "general",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422, r.text


def test_create_contact_empty_strings_rejected(client):
    payload = {
        "name": "",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "audience": "general",
        "message": "",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422, r.text


# ---------- GET /api/contact ----------
def test_list_contacts_returns_list_recent_first(client):
    # Insert two with distinct emails
    e1 = f"test_{uuid.uuid4().hex[:8]}@example.com"
    e2 = f"test_{uuid.uuid4().hex[:8]}@example.com"
    r1 = client.post(f"{API}/contact", json={
        "name": "TEST_First", "email": e1, "audience": "general", "message": "m1"
    })
    r2 = client.post(f"{API}/contact", json={
        "name": "TEST_Second", "email": e2, "audience": "general", "message": "m2"
    })
    assert r1.status_code == 201 and r2.status_code == 201

    r = client.get(f"{API}/contact")
    assert r.status_code == 200, r.text
    items = r.json()
    assert isinstance(items, list)
    assert len(items) >= 2
    # No mongo _id leaking
    for it in items[:5]:
        assert "_id" not in it
        assert "id" in it and "created_at" in it

    # Most-recent first: e2 should appear before e1
    idx1 = next((i for i, it in enumerate(items) if it["email"] == e1), -1)
    idx2 = next((i for i, it in enumerate(items) if it["email"] == e2), -1)
    assert idx1 != -1 and idx2 != -1
    assert idx2 < idx1, "Expected most-recent first ordering"
