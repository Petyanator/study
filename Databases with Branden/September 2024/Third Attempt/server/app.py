from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = ("mariadb+pymysql://root:@localhost:3306/wcodingdb")

app.config["SQLACHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

import routes

if __name__ == "__main__":
    app.run(debug=True)