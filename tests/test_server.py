from fastapi.testclient import TestClient
from backend.server import app

client = TestClient(app)

def test_root():
    response = client.get("/api")
    assert response.status_code == 200
    assert response.json() == {"service": "OKN Public Marketing API", "status": "ok"}

def test_contact_validation():
    # Test invalid audience
    response = client.post(
        "/api/contact",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "audience": "invalid_audience",
            "message": "Hello"
        }
    )
    # The endpoint validates audience, causing 422 (Pydantic / EmailStr) or 400
    assert response.status_code in (400, 422)
