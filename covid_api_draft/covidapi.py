import pyrebase
import requests
import json
from flask import Flask, jsonify, request
app = Flask(__name__)


#CONFIG


firebase = pyrebase.initialize_app(firebaseConfig)
db = firebase.database()

auth = firebase.auth()

@app.route("/login", methods=["GET", "POST"])
def login():
	if request.method == "POST":
		email = request.json.get("email")
		pwd = request.json.get("password")
		#print(email)

		try:
			auth.sign_in_with_email_and_password(email, pwd)
			user_info = auth.sign_in_with_email_and_password(email, pwd)
			account_info = auth.get_account_info(user_info['idToken'])
			login_success = jsonify({"message": "Successful login!", "user_cred": user_info})
			return login_success
		except Exception as e:
			print(e)
			unsuccessful = jsonify({"message": "Login information is incorrect"})
			return unsuccessful
	teet = jsonify({"message": "here"})
	return teet

@app.route("/sign_up", methods=["GET", "POST"])
def sign_up():
	if request.method == "POST":
		try:
			email = request.json.get("email")
			pwd = request.json.get("password")

			user = auth.create_user_with_email_and_password(email, pwd)
			db.child("users").child(token).set({"email": email})
			status = jsonify({"message": "Account succesfully created!"})
			status.status_code = 200
			return status
		except Exception as e:
			print(e)
			status = jsonify({"message": "Email already in use!"})
			status.status_code = 401
			return status
	teet = jsonify({"message": "here"})
	return teet		

@app.route("/load", methods=["GET", "POST"])
def load():
	try:
		if request.method == "POST":
			data = request.json.get('data')
			user = request.json.get('user')
			email = data["email"]
			head, sep, tail = email.partition('@')
			data = data['symptoms']
			db.child("users").child(head).set(data)

	except Exception as e:
		print(e)
		teet = jsonify({"message": "here"})
		return teet	
	teet = jsonify({"message": "here"})
	return teet

@app.route("/get" , methods=["GET", "POST"])
def get():
	try:
		if request.method == "POST":
			users = db.child("users").get()
			print(users.val())
	except Exception as e:
		print(e)
		teet = jsonify({"message": "here"})
		return teet	
	teet = jsonify({"message": "here"})
	return teet

if __name__ == "__main__":
	app.run(debug=True)

