from werkzeug.security import generate_password_hash, check_password_hash

from vaquero import db
from vaquero.common.models import Base


class User(Base):
    __tablename__ = 'users'

    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)

    def __init__(self, email, password, first_name, last_name):
        self.email = email,
        self.set_password(password)

        self.first_name = first_name
        self.last_name = last_name

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
