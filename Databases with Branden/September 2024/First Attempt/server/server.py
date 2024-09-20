from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import sqlalchemy

db = sqlalchemy.create_engine(
    "mariadb+pymysql://root:@localhost:3306/userdb", echo=True
)

app = Flask(__name__)

@app.route("/register", methods = ["POST"])