from flask import jsonify, request
from flask_restful import Resource


class Articles(Resource):
    def get(self):
        return jsonify({'articles': ['article1', 'article2']}, 200)
