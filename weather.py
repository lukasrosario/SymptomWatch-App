#Script takes the city state and country and returns the temperature and humidty 
#List of city ID city.list.json.gz can be downloaded here http://bulk.openweathermap.org/sample/

#Sample call weather.py Boston MA US

import requests
import json
import sys


#city = sys.argv[1]
#state = sys.argv[2]
#country = sys.argv[3]
#grabs city state and country from user
parameters = 'q=' + sys.argv[1] + ',' + sys.argv[2] + ',' + sys.argv[3] + '&units=imperial&appid=135a11070d877103cee5fe57de8d3f2b'

#call api with city, state, country
response = requests.get("http://api.openweathermap.org/data/2.5/weather?" + parameters)

#check request status code
if response.status_code != 200:
	print("Check status code")

#makes printing humidty easier for a python noob like me
var = '%'

#function grabs temp and prints it to screen
def jprint_temp(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text + ' degrees F')

#function grabs humidity and prints it to screen
def jprint_hum(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text + var + ' humidity')

#grabs main key from response dictionary and prints temp and humidty
main = response.json()['main']
temp = main['temp']
humidity = main['humidity']
jprint_temp(temp)
jprint_hum(humidity)





#Response status code reference
#200: Everything went okay, and the result has been returned (if any).
#301: The server is redirecting you to a different endpoint. This can happen when a company switches domain names, or an endpoint name is changed.
#400: The server thinks you made a bad request. This can happen when you don’t send along the right data, among other things.
#401: The server thinks you’re not authenticated. Many APIs require login ccredentials, so this happens when you don’t send the right credentials to access an API.
#403: The resource you’re trying to access is forbidden: you don’t have the right permissions to see it.
#404: The resource you tried to access wasn’t found on the server.
#503: The server is not ready to handle the request.