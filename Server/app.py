from flask import Flask
from src.endpoints.articles import route
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(route)

if __name__ == '__main__':
    app.run(debug=True)
