from app import app, db
from flask import request, jsonify
from models import User


@app.route("/api/users", methods = ["POST"])
def create_user():
    try:
        data = request.get_json()

        required_fields = ["username", "password"]

        for field in required_fields:
            if field not in data:
                return (
                    jsonify({"Error": f"{field} is required to create a new user"}), 400
                )
        username = data.get("username")
        password = data.get("password")
        previous_career = data.get("previous_career")
        is_admin = data.get("is_admin")
        created_at = data.get("created_at")

        new_user = User(
            username = username, password = password, previous_career = previous_career, is_admin = is_admin, created_at = created_at

        )

        # failed_user = User(username, password, previous_career, is_admin, created_at)

        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.to_json()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route("/api/comments", methods = ["GET"])
def get_comments():
    pass


@app.route("/")
def hello_world():
    return "Hello World"
