from flask import request

from vaquero.auth.handelers import verify_token


def auth_required(func):
    def wrapper(*args, **kwargs):
        verify_token(request.headers['x-access-token'])
        return func(*args, **kwargs)
    return wrapper
