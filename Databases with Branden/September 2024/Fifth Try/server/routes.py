from app import app, db, bcrypt
from flask import request, jsonify
from models import User, Post, Comment
from app import bcrypt 
from flask_jwt_extended import create_access_token, unset_jwt_cookies



@app.route("/")
def hello_world():
    return "Hello World"


@app.route("/register", methods = ["POST"])
def register_user():
    data = request.get_json()   

    user_exists = (
        User.query.filter_by(username = data.get("username")).first() is not None
    )
    if user_exists:
        return jsonify({"Failed to create an account": "Username already exists"}), 409


    username = data.get("username")
    password = data.get("password") 
    bio = data.get("bio")

    hashed_password = bcrypt.generate_password_hash(password)

    new_user = User(username = username, password = hashed_password, bio = bio)
 
    db.session.add(new_user)
    db.session.commit()
 
    return jsonify(new_user.to_json()), 201

@app.route("/login", methods = ["POST"])
def login_page():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "Invalid username"}), 401
    if not bcrypt.check_password_hash(user.password, password) :
        return jsonify({"error": "Invalid password"}), 401
    
    return jsonify(user.to_json()), 200
 


@app.route("/token", methods = ["POST"])
def create_token():
    data = request.get_json()

    user = User.query.filter_by(username = data.get("username")).first()

    if user is None:
        return jsonify({"error": "Invalid username"}), 401
    if not bcrypt.check_password_hash(user.password, data.get("password")):
        return jsonify({"error": "Invalid password"}), 401

    access_token = create_access_token(identity = user.user_id)

    return jsonify({"access_token": access_token}), 200

@app.route("/logout", methods = ["POST"])
def logout_user():
    response = jsonify({"message": "Logout successful"})
    unset_jwt_cookies(response)

    return response, 200


@app.route("/profile", methods = ["GET"])
def get_profile():
    pass






# @app.route("/login", methods =["POST"])
# @app.route("/users", methods = ["PUT"])
# @app.route("/users" methods = ["DELETE"])
# @app.route("/users" methods = ["GET"])
# @app.route("/users" methods = ["POST"])