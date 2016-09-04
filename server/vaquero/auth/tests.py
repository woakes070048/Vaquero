import unittest

from vaquero import app, db
from vaquero.auth.handelers import create_user, login_user, verify_token
from vaquero.auth.handelers import _get_token, _verify_user


class AuthHandlersTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        app.config.from_object('config.Testing')
        db.session.close()
        db.drop_all()
        db.create_all()

    def setUp(self):
        self.email = 'test_email@gmail.com'
        self.password = '123456'
        self.first_name = 'FirstName'
        self.last_name = 'LastName'

        self.user = create_user(self.email, self.password,
                                self.first_name, self.last_name)

    def tearDown(self):
        db.session.delete(self.user)
        db.session.commit()

    def test_verify_user(self):
        assert _verify_user(self.email, self.password) is True

    def test_login_user(self):
        payload = login_user(self.email, self.password)
        assert payload['success'] is True

    def test_get_token(self):
        token = _get_token(self.email, self.password)
        assert token is not None

    def test_verify_token(self):
        token = _get_token(self.email, self.password)
        assert verify_token(token) is True
