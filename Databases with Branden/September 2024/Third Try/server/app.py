from flask import Flask,request,jsonify
from flask_cors import CORS, cross_origin
import sqlalchemy

app = Flask(__name__)
CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

db = sqlalchemy.create_engine("mariadb+pymysql://root:@localhost:3306/user_info", echo = True)

@app.route("/")
def hello_world():
    return "Hello World"



def get_passwords():
    pass






if __name__ == "__main__":

    app.run(port=8008, debug=True)