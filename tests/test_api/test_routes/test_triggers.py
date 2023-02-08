from http import client
import json
import re
from urllib import response

from fastapi.testclient import TestClient
from app.routes.v1.modules import email

from app.routes.v1.modules.triggers import router
from tests.test_api.test_routes import test_settings
client = TestClient(router)

test_settings.use_setings()


new_data = {
  "trigger_name": "tired",
  "name": "tired",
  "schema_name": "public",
  "table_name": "users",
  "primary_key_column": "",
  "configuration": {"variables": {"primary": {"sub_count": {"column_name": "subscriber_count", "data_type": "integer", "state": "new"}, "first_name": {"column_name": "first_name", "data_type": "text", "state": "new"}, "last_name": {"column_name": "last_name", "data_type": "text", "state": "new"}}, "derived": {"name": {"variable1": "first_name", "variable2": "last_name", "operation": "+", "data_type": "text"}}}, "conditions": [[{"variable_name": "sub_count", "comparator": ">=", "condition_value": "1", "logical_operator": ""}]]},
  "event": "INSERT",
  "title": "[]",
  "sms_template_id": 0,
  "email_template_id": 43,
  "email_service": "ses",
  "email_column": "email",
  "language": "0",
  "subject": "",
  "body_html": "",
  "body_design": {},
  "sms_service": "",
  "contains_country_code": True,
  "country_code_column": "country_code",
  "phone_number_column": "phone_number",
  "sms_type": "",
  "message_body": ""
}

val = {}
my_val = 0
#id = 0
def test_trigger():
  global my_val
  response = client.post("/" ,json=new_data,)
  print(response)
  assert response.status_code == 200
  res = response.json()
  res_str = json.dumps(res)
  val = json.loads(res_str)
  my_val = val["id"]
  print(my_val)
  return my_val


  #json_str = json.dumps(response.json())
  #my_val = json.loads(json_str["id"])
  #return my_val


#new_id = id
#json_str = json.dumps(test_triggers())
#id_val = json.loads(json_str[id])


def test_events():
    print(my_val)
    response = client.post("/events" , json={
    "operation": "enable",
    "trigger_name": new_data["trigger_name"],
    "trigger_id": my_val,
    "trigger_configuration" : new_data,
    "table_name": new_data["table_name"] 
    },)
    assert response.status_code == 200
    print(response)

route = ""


def test_tigger_id():
  global route
  route = "/"+str(my_val)
  print(route)
  response = client.get(route)
  print(response)
  assert response.status_code == 200


def test_delete_event():
  print(my_val)
  response = client.delete("/events" , json={
    "id": my_val
  },)
  print(response)
  assert response.status_code == 200



def test_schemas():
    response = client.get("/schemas")
    assert response.status_code == 200
    assert response.json() == {
        "schemas": [
            "pg_temp_1",
            "pg_toast_temp_1",
            "pg_catalog",
            "information_schema",
            "public",
            "hdb_catalog",
            "hdb_views",
            "tgf_catalog"
            ]
    }

def test_tables_schema_public():
    response = client.get("/tables/public")
    assert response.status_code == 200
    assert response.json() == {
        "tables": [
            "creator_tags",
            "event_attendees",
            "event_tags",
            "events",
            "orders",
            "subscriber",
            "tags",
            "user_leads",
            "users"
            ]
        }
def test_tables_schema_hdb_catalog():
    response = client.get("/tables/hdb_catalog")
    assert response.status_code == 200
    assert response.json() == {
          "tables": [
    "event_invocation_logs",
    "event_log",
    "event_triggers",
    "hdb_action",
    "hdb_action_log",
    "hdb_action_permission",
    "hdb_allowlist",
    "hdb_computed_field",
    "hdb_cron_event_invocation_logs",
    "hdb_cron_events",
    "hdb_cron_triggers",
    "hdb_custom_types",
    "hdb_function",
    "hdb_permission",
    "hdb_query_collection",
    "hdb_relationship",
    "hdb_remote_relationship",
    "hdb_scheduled_event_invocation_logs",
    "hdb_scheduled_events",
    "hdb_schema_update_event",
    "hdb_table",
    "hdb_version",
    "remote_schemas"
          ]
        }

def test_tables_schema_hdb_views():
    response = client.get("/tables/hdb_views")
    assert response.status_code == 200
    assert response.json() == {
         "tables": []
        }

def test_tables_schema_tgf_catalog():
    response = client.get("/tables/tgf_catalog")
    assert response.status_code == 200
    assert response.json() == {
           "tables": [
            "email_templates",
            "event_logs",
            "event_triggers",
            "sms_templates",
            "static_variables"
            ]
        }


def test_columns_users_table():
    response = client.get("/columns/users")
    assert response.status_code == 200
    assert response.json() == {
          "columns": [
    {
      "name": "id",
      "data_type": "integer"
    },
    {
      "name": "created_at",
      "data_type": "timestamp with time zone"
    },
    {
      "name": "updated_at",
      "data_type": "timestamp with time zone"
    },
    {
      "name": "email",
      "data_type": "text"
    },
    {
      "name": "phone_number",
      "data_type": "numeric"
    },
    {
      "name": "country_code",
      "data_type": "integer"
    },
    {
      "name": "username",
      "data_type": "text"
    },
    {
      "name": "profile_pic",
      "data_type": "text"
    },
    {
      "name": "role",
      "data_type": "text"
    },
    {
      "name": "subscriber_count",
      "data_type": "integer"
    },
    {
      "name": "first_name",
      "data_type": "text"
    },
    {
      "name": "last_name",
      "data_type": "text"
    },
    {
      "name": "phone_verification_status",
      "data_type": "text"
    }
  ]
    }


def test_event_type():
    response = client.get("/events/email")
    print(response)
    assert response.status_code == 200

'''assert response.json() == {
  "triggers": [
    {
      "id": 65,
      "title": "rdid",
      "table_name": "users",
      "name": "rdid",
      "language": "0",
      "preview": "dda",
      "active": True
    },
    {
      "id": 75,
      "title": "sign up mail ",
      "table_name": "users",
      "name": "sign_up_mail_",
      "language": "0",
      "preview": "welcome to humbee folks",
      "active": True
    },
    {
      "id": 70,
      "title": "Orders",
      "table_name": "orders",
      "name": "Orders",
      "language": "0",
      "preview": "Order confirmed",
      "active": False
    }
  ]
}'''

    


tigger_type = email

def test_event_logs_trigger_type():
  response = client.get("/event_logs/{trigger_type}")
  print(response)
  assert response.status_code == 200


def test_count_event_logs():
  response = client.get("/event_logs/count/{trigger_type}")
  print(response)
  assert response.status_code == 200
  
