from flask import Flask, jsonify
from flask_cors import CORS
import datetime
import json

app = Flask(__name__)
CORS(app)

def get_names():
    with open("names.json", "r") as file:
        names_info = file.read()
        data = json.loads(names_info)
    return data

@app.route("/api/default-name")
def get_default_name():
    data = get_names()
    return jsonify(data[0])  # Return the first item as default

@app.route("/api/<name>")
def get_current_time(name):
    data = get_names()
    for info in data:
        if info["name"].lower() == name.lower():
            return jsonify({
                "name": info["name"],
                "career": info["career"],
                "date": datetime.datetime.now().strftime("%Y/%m/%d, %H:%M:%S")
            })
    return jsonify({"error": "Name not found"}), 404

if __name__ == "__main__":
    app.run(debug=True, port=8080)
