import requests
import json

BASE = "http://127.0.0.1:5000/"


info = {"email": "lax166alex@gmail.com", "password": "123456", "symptoms": {
																	"cough": True,
																	"fever": True}}

'''response = requests.post(BASE + "/sign_up", json=info)
response = requests.post(BASE + "/login", json=info)
response = response.json()
user = response['user_cred']
response = requests.post(BASE + "/load", json={'user': user, 'data': info})
print(response)
'''
response = requests.post(BASE + "/get")
response = response.json()
print(response)