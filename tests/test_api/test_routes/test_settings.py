from http import client
from urllib import response
from fastapi.testclient import TestClient

from app.routes.v1.modules.settings import router


client = TestClient(router)

def use_setings():
    test_set_connection_url()
    test_initialize_ses()
    test_initialize_sns()
    test_get_integrations()

data = {
    "parameter_type": "credentials",
    "user": "postgres",
    "password": "FvJuXQ2urcvIMgfDHFX8",
    "host": "devinfluencer.ckiwohkuy8qs.us-east-1.rds.amazonaws.com",
    "port": "5432",
    "database": "postgres",
    "connection_string": ""
}



def test_set_connection_url():
    #client = TestClient(router)
    response = client.post("/set_connection_url",json=data,)
    assert response.status_code == 200
    assert response.json() == {
        "status": "success",
        "message": "You are connected to the database"
    }
    

def test_initialize_ses():
    response = client.post("/initialize_ses" , json={
        "aws_access_key_id": "AKIASRTM7OHKF6TKORRZ",
        "aws_secret_access_key": "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",
        "aws_region": "us-east-1",
        "source_email_address": "hello@humbee.app"
    },)
    assert response.status_code == 200
    assert response.json() == {
        "status": "success",
        "message": "The Email service has been initialized"
    }

def test_initialize_sns():
    response = client.post("/initialize_sns" , json={
        "aws_access_key_id": "AKIASRTM7OHKF6TKORRZ",
        "aws_secret_access_key": "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",
        "aws_region": "us-east-1"
    },)
    assert response.status_code == 200
    assert response.json() == {
        "status": "success",
        "message": "The SMS service has been initialized"
        }

def test_get_integrations():
    #client = TestClient(router)
    response = client.get("/get_integrations")
    assert response.status_code == 200



def test_get_dbcredentials():
    response = client.get("/get_credentials/postgres")
    assert response.status_code == 200

def test_get_emailcredentials():
    response = client.get("/get_credentials/ses")
    assert response.status_code == 200

def test_get_smscredentials():
    response = client.get("/get_credentials/sns")
    assert response.status_code == 200



def test_toggle_activation_ses():
    response = client.post("/toggle_activation/ses")
    assert response.status_code == 200

def test_toggle_activation_sns():
    response = client.post("/toggle_activation/sns")
    assert response.status_code == 200



def test_add_users_table():
    response = client.post("/add_users_table" , json={
        "table_name": "",
        "primary_key_column": ""
    },)
    assert response.status_code == 200

def test_get_users_table():
    response = client.get("/get_users_table")
    assert response.status_code == 200

def test_check_join_possible():
    response = client.post("/check_join_possible" , json={
        "user_table": "public.users",
        "current_table": "public.users",
        "primary_key_column": "id",
        "foreign_key_column": "subscriber_count"
    },)
    assert response.status_code == 200


def test_delete_dbintegration():
    response = client.delete("/delete_integration/postgres")
    assert response.status_code == 200

def test_delete_sesintegration():
    response = client.delete("/delete_integration/ses")
    assert response.status_code == 200


def test_delete_snsintegration():
    response = client.delete("/delete_integration/sns")
    assert response.status_code == 200
