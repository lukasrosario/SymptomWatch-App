import pyrebase
import requests
from flask import Flask, jsonify, request
app = Flask(__name__)



config = {
	"apiKey": "AIzaSyAB8dckJ5Vnp0nu8HjkkM-TebQhK-BUjdM",
    "authDomain": "bu-covid-tracker.firebaseapp.com",
    "databaseURL": "https://bu-covid-tracker.firebaseio.com",
    "projectId": "bu-covid-tracker",
    "storageBucket": "bu-covid-tracker.appspot.com",
    "messagingSenderId": "854257212533",
    "appId": "1:854257212533:web:f4020ec38beb072b162c3c",
    "measurementId": "G-MMS2VLQ5BW"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

auth = firebase.auth()

@app.route("/login", methods=["GET", "POST"])
def login():
	if request.method == "POST":
		email = request.json.get("email")
		pwd = request.json.get("password")

		try:
			auth.sign_in_with_email_and_password(email, pwd)
			user_info = sign_in_with_email_and_password(email, pwd)
			account_info = auth.get_account_info(user_info['idToken'])
			if account_info["user"][0]["emailVerified"] == False:
				verify_message = jsonify({"message": "Please verify your message"})
				return verify_message
			login_success = jsonify({"message": "Successful login!"})
			return login_success
		except:
			unsuccessful = jsonify({"message": "Loging information is incorrect"})
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
			auth_send_email_verification(user["idToken"])
			db.child("users").child(token).set({"email": email})
			status = jsonify({"message": "Account succesfully created!"})
			status.status_code = 200
			return status
		except:
			status = jsonify({"message": "Email already in use!"})
			status.status_code = 401
			return status
	teet = jsonify({"message": "here"})
	return teet		


if __name__ == "__main__":
	app.run()

















