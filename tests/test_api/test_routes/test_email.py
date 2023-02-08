from email.policy import default
from http import client
import json
from pydoc import cli
from re import template
from urllib import response
from fastapi.testclient import TestClient

from app.routes.v1.modules.email import router, send_email
from tests.test_api.test_routes import test_settings
from tests.test_api.test_routes.emailhtmlbody import myvalue


test_settings.use_setings()

client = TestClient(router)

new_email_template = {
  "title": "Weekend",
  "service_name": "ses",
  "schema_name": "",
  "table_name": "",
  "email_column": "email",
  "language": "0",
  "subject": "see the db",
  "user_created": True,
  "body_html": myvalue,
  "body_design": {},
  "foreign_key_column": "id"
}

print(myvalue)

id=0

def test_create_email_templates():
    global id
    response = client.post("/templates" , json=new_email_template,)
    print(response)
    assert response.status_code == 200
    id = response.json()["template_id"]
    print(id)
    return id


def test_my_template_type():
    response = client.get("/templates/created")
    print (response)
    assert response.status_code == 200

mydata = {
  "recipient_addresses": [
    "ashwni@humbee.app"
  ],
  "subject": "See email",
  "body_html": myvalue
}


def test_send_email():
    response = client.post("/send_email" , json=mydata,)
    print(response)
    assert response.status_code == 200

data = {
  "template_id": id,
  "receipient_addresses": [
    "ashwni@humbee.app"
  ],
  "variables_data": {
    "primary" : "", 
    "derived" : ""
  }
}
'''
def test_send_templated_email():
  print(id)
  response = client.post("/send_templated_email" , json=data)
  assert response.status_code == 200
  print(response)
'''