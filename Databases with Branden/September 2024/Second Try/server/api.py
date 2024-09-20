from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import sqlalchemy

app = Flask(__name__)
CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

db = sqlalchemy.create_engine(
    "mariadb+pymysql://root:@localhost:3306/debates", echo = True
    )

@app.route('/')
def hello_world():
    return 'Hello World'

@app.route("/comments", methods = ["POST"])
@cross_origin()
def comments():
    data = request.get_json()
    comment = data.get("comment")

    submit_comment_to_db(comment)

    return jsonify({"message":"Comment was sent successfully"}), 200
    
def submit_comment_to_db(comment):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
        INSERT INTO comments (id, comment)
        VALUES (NULL,:comment)"""),
        {
            "comment":comment    
        })
        conn.commit()

@app.route("/topicreg", methods = ["POST"])
@cross_origin()
def topic_reg():
    data = request.get_json()
    topicname = data.get("topicname")

    submit_topic_to_db(topicname)

    return jsonify({"message":"Topic was sent successfully"}),200

def submit_topic_to_db(topicname):
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
        INSERT INTO topicname (num,topicname)
        VALUES (NULL,:topicname)"""),
        {
            "topicname":topicname
        })
        conn.commit()

@app.route("/maininfo", methods = ["GET"])
def showinfo():
    with db.connect() as conn:
        result = conn.execute(sqlalchemy.text("""
        SELECT comments.id, comments.comment, topicname.num, topicname.topicname FROM comments
        JOIN topicname
        """))
    print(result.all)
        

if __name__ == "__main__":
    app.run(debug=True, port=8008)
