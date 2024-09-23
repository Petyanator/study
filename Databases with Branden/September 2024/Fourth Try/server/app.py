from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import sqlalchemy, pymysql

# Fifth try make app, routes, models.py

app = Flask(__name__)
CORS(app)
app.config["CORS_HEADERS"] = "Content_Type"

db = sqlalchemy.create_engine(
    "mariadb+pymysql://root:@localhost:3306/experiments", echo=True
)

@app.route('/')
def boom():
    return "Boom"

@app.route("/comments", methods = ["POST"])
@cross_origin()
def add_comments():
    data = request.get_json()
    username = data.get("username")
    comment_text = data.get("comment_text")

    get_comment_to_db(username,comment_text)

    return jsonify({"message": "Data was sent successfully"}), 200

def get_comment_to_db(username, comment_text):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
        INSERT INTO experiment1 (comment_id, username, comment_text)
        VALUES (NULL, :username, :comment_text)                                              
        """), {
            "username": username,
            "comment_text": comment_text
        })
        conn.commit()

@app.route("/api/comment", methods=["GET"])
def show_comments():
    comments = get_info_comments()
    return jsonify(comments), 200



def get_info_comments():
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("SELECT * FROM experiment1"))
    comments = []
    for row in result:
        comments.append({
            "username": row[1],
            "comment_text": row[2]
        })
    return comments


if __name__ == "__main__":
    app.run(debug=True)