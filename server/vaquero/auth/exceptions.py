from vaquero.common.exceptions import BaseException


class AuthException(BaseException):
    status_code = 401
