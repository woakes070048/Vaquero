from stockman import db
from stockman.auth.models import User

db.drop_all()
db.create_all()
