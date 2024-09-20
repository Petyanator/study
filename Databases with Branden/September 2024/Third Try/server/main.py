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
    username = data.get("username")
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    register_new_user_to_db(username,name,email,password)

    return jsonify({"message":"Data was sent successfully"})

def register_new_user_to_db(username,name,email,password):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
                    INSERT INTO users (id,username,name,email,password)
                    VALUES (NULL, :username, :name, :email, :password)                                              
                                              """),
                                              {
                                                  "username": username,
                                                  "name" : name,
                                                  "email":email,
                                                  "password": password
                                              })
        conn.commit()


@app.route("/update_info", methods = ["PUT"])
# Used to update data
def update_info():
    data = request.get_json()
    user_id = data.get("id")
    email = data.get("email")
    password = data.get("password")

    update_some(user_id, email, password)

    return jsonify({"message":"Data was updated successfully"})

def update_some(user_id,email,password):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
UPDATE users SET email = :email, password = :password WHERE id = :id

"""),{
    "id": user_id,
    "email": email,
    "password": password
})
        conn.commit()


@app.route("/api/comment", methods=["POST"])
@cross_origin()
def get_comment():
    data = request.get_json()
    username = data.get("username")
    comment = data.get("comment")

    update_comment(username, comment)

    return jsonify({"message":"Comment was sent successfully"})

def update_comment(username, comment):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
INSERT INTO comments (id, username, comment)
VALUES (NULL,:username,:comment)                                              

"""),{
    "username": username,
    "comment": comment
})
        conn.commit()


@app.route("/")
def hello_world():

    return "Hello World"



if __name__ == "__main__":
    app.run(port=8008, debug=True)