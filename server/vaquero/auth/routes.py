from flask import Blueprint, request, render_template, jsonify, current_app

from vaquero.auth.handelers import create_user, login_user
from vaquero.auth.exceptions import AuthException

auth = Blueprint('auth', __name__, url_prefix='/auth')


@auth.errorhandler(AuthException)
def handle_auth_error(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response


@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        create_user(request.form['email'], request.form['password'],
                    request.form['first_name'], request.form['last_name'])
        return "Success"
    else:
        return render_template('register.html')


@auth.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    payload = login_user(email, password)
    response = current_app.make_response(jsonify(payload))
    response.set_cookie('token', value=payload['token'])
    return response
