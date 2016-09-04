from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config.from_object('config.Development')


@app.route('/')
def index():
    return render_template('index.html')

db = SQLAlchemy(app)

from vaquero.auth.routes import auth as auth_module
app.register_blueprint(auth_module)
