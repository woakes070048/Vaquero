import datetime

import jwt

from vaquero import db, app
from vaquero.auth.models import User
from vaquero.auth.exceptions import AuthException


def create_user(email, password, first_name, last_name):
    user = User(email, password, first_name, last_name)
    db.session.add(user)
    db.session.commit()
    return user


def login_user(email, password):
    if _verify_user(email, password):
        token = _get_token(email, password).decode('utf-8')
        return {'success': True, 'message': 'Login Successful', 'token': token}
    else:
        raise AuthException('Login Failed')


def verify_token(token):
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'])
        email = payload['email']

        user = User.query.filter_by(email=email).first()
        if user is None:
            raise AuthException('Unable to validate identity')

        return True
    except jwt.DecodeError:
        raise AuthException('Token is Invalid')
    except jwt.ExpiredSignatureError:
        raise AuthException('Token has expired')


def _verify_user(email, password):
    user = User.query.filter_by(email=email).first()
    if user.check_password(password):
        return True
    else:
        return False


def _get_token(email, password):
    return jwt.encode(
            {'email': email,
             'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)},
            app.config['SECRET_KEY'])
