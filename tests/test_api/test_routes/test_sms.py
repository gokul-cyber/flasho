from cgitb import reset
from pydoc import resolve
from urllib import response
from fastapi.testclient import TestClient
from app.routes.v1.modules.sms import router

from tests.test_api.test_routes import test_settings

test_settings.use_setings()


client = TestClient(router)

sms_data = {
    "title": "new data",
    "service_name": "sns",
    "schema_name": "public",
    "table_name": "users",
    "contains_country_code": True,
    "country_code_column":  "country_code",
    "phone_number_column": "phone_number",
    "type": "Promotional",
    "language": "0",
    "message_body": "Hi",
    "foreign_key_column": ""
}

id =0

def test_create_sms_template():
    global id
    response = client.post("/templates" , json=sms_data,)
    print(response)
    assert response.status_code == 200
    id = response.json()["template_id"]
    return id



def test_get_sms_template():
    response = client.get("/templates")
    assert response.status_code == 200

send_sms_data = {
  "receipient_phone_number": "+917905998978",
  "message_body": "Hello",
  "message_type": "Promotional"
}

def test_send_sms():
    response = client.post("/send_sms" , json=send_sms_data,)
    print(response)
    assert response.status_code == 200

templated_sms={
  "template_id": id,
  "phone_numbers": [
    "+917905998978"
  ],
  "variables_data": {}
}

'''
def test_send_templated_sms():
    response = client.post("/send_templated_sms" , json=templated_sms,)
    print(response)
    assert response.status_code == 200

'''