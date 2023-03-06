from flask import Flask
from flask_restful import Api

from src.endpoints.hello import HelloWorld
from src.endpoints.articles import Articles
from src.endpoints.view import View

app = Flask(__name__)
api = Api(app)

api.add_resource(HelloWorld,
                 '/hello')

api.add_resource(Articles,
                 '/',
                 '/articles')

api.add_resource(View,
                 '/view')

if __name__ == '__main__':
    app.run(debug=True)
