from flask import Flask, render_template
import json

app = Flask(__name__)

def get_countries():
    with open("countries.json", "r") as file:
        countries_data = file.read()
        data = json.loads(countries_data)
    return data


@app.route("/")
def show_countries():
    data = get_countries()
    return render_template('index.html', data = data)

@app.route("/countries_and_capitals")
def show_everything():
    data = get_countries()
    return render_template('everything.html', data = data)

@app.route("/country/<country_name>")
def get_name(country_name):
    country_name = country_name.lower()
    country_name = country_name.capitalize()
    data = get_countries()
    for name in data:
        a = name
        b = a["country"]
        if a["country"] == country_name:
            return render_template('country.html', name = name)


if __name__ == "__main__":
    get_countries()
    app.run(debug = True, port = 8080)