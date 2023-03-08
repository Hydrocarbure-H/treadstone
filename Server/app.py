from flask import Flask
from src.endpoints.articles import route
from flask_cors import CORS

from src.db.db import connect_to_db
from src.db.construct_db import construct_db
from src.process.process_data import process_data

app = Flask(__name__)
CORS(app)
app.register_blueprint(route)

db = connect_to_db()
construct_db(db)

process_data(db)

db.close()
if __name__ == '__main__':
    app.run(debug=True)
