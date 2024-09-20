from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import sqlalchemy, pymysql
app = Flask(__name__)
CORS(app)
app.config["CORS_HEADERS"] = "Content_Type"

db = sqlalchemy.create_engine("mariadb+pymysql://root:@localhost:3306/user_info", echo = True)


@app.route("/registration", methods = ["POST"])
@cross_origin()
def register_user():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    register_new_user_to_db(name,email,password)

    return jsonify({"message":"Data was sent successfully"})

def register_new_user_to_db(name,email,password):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
                    INSERT INTO users (id,name,email,password)
                    VALUES (NULL, :name, :email, :password)                                              
                                              """),
                                              {
                                                  "name" : name,
                                                  "email":email,
                                                  "password": password
                                              })
        conn.commit()
    return register_new_user_to_db()


@app.route("/")
def hello_world():
    return "Hello World"



if __name__ == "__main__":
    app.run(port=8008, debug=True)