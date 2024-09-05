import json

def get_countries():
    with open("countries.json", "r") as file:
        countries_data = file.read()
    return json.loads(countries_data)


    


get_countries()
# an API endpoint is to get all countries
# an endpoint to get a sepcific country adn show its capital
# an endpoint to get a specific country and show its capital

# Stretch
# Adding button navigation from html page to others using href
# manipulate the daya prior to showing it in the html template
# adding more jsons to read from/end endpoints