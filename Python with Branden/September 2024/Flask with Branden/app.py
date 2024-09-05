from flask import Flask, render_template
from markupsafe import escape
app = Flask(__name__)

@app.route('/')
def get_homepage():
    return render_template('index.html')

@app.route('/hello')
def about_mepage():
    return render_template('cat.html')

@app.route('/user/<username>')
def show_user_profile(username):
    return f'User {escape(username)}'