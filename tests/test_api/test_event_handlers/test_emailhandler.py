import os
from fastapi.testclient import TestClient

from event_handlers import db

from event_handlers.email_handler import send_request

print(os.getcwd())

def test_sendreq():
    assert send_request()
