from flask import Flask, url_for, request, render_template, jsonify
from markupsafe import escape
# escape is multiple regexs that look through element and checks if it is not a code
# Learn SQL queries
app = Flask(__name__)


@app.route('/')
def welcome():
    return render_template('index.html')
    # Flask will go through all lines in html that is why we use links with url_for so flask can execute them

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file.save(f"savings/{file.filename}")
    return "File uploaded successfully"
# Question: How to use upload?

@app.route('/user/<name>')
def hello(name):
    return render_template("hello.html", name = name)

@app.route('/submit', methods = ['POST'])
def submit():
    data = request.form['data']
    return f"You submitted {data}"
# Question: How to use and get data?

@app.route('/json')
def json_example():
    return jsonify({"message":"Goodbye People"})

@app.route('/users/<username>')
def profile(username):
    return f'{username}\'s profile'

# with app.test_request_context():
#     print(url_for('index'))
#     print(url_for('login'))
#     print(url_for('login', next='/'))
#     print(url_for('profile', username='John Doe'))
# Allows you to see the path to the certain element

@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()

# the example above is the same one as the example below

@app.get('/login')
def login_get():
    return show_the_login_form()

@app.post('/login')
def login_post():
    return do_the_login()

if __name__ == "__main__":
    app.run(debug = True, port = 8080)