from http import client
from tokenize import PseudoExtras
from urllib import response
from fastapi.testclient import TestClient

from app.api import app

client = TestClient(app)

def test_admin_key():
    response = client.post("/api/create_admin_secret" , json={
        "new_key" : "hello@123"
    },)
    assert response.status_code == 200


def test_api_health():
    response = client.get("/api/health")
    assert response.status_code == 200


