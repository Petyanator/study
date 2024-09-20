from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import sqlalchemy
# This is back end
app = Flask(__name__)
CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

db = sqlalchemy.create_engine(
    "mariadb+pymysql://root:@localhost:3306/friends", echo = True
)


@app.route('/')
def hello_world():
    return "Hello World"

@app.route('/registration', methods = ["POST"])
@cross_origin()
def registration():
    data = request.get_json()
    name = data.get("name")
    familyname = data.get("familyname")
    birthdate = data.get("birthdate")

    register_new_user_to_db(name,familyname, birthdate)

    return jsonify({"message": "Registration was successful"}), 200

def register_new_user_to_db(name,familyname, birthdate):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
        INSERT INTO birth (id,name,familyname,birthdate)
        VALUES (NULL,:name,:familyname,:birthdate)
                                              """),
        {
            "name":name,
            "familyname": familyname,
            "birthdate":birthdate
        }
        )
        conn.commit()

if __name__ == "__main__":
    app.run(port=8008, debug=True)