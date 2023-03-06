from flask import jsonify, request
from flask_restful import Resource


class HelloWorld(Resource):
    def get(self):
        return jsonify({'message': 'Hello World!'}, 200)

    def post(self):
        json_data = request.get_json(force=True)
        # Check if the request is valid
        if not json_data:
            return {'message': 'No input data provided'}, 400
        un = json_data['username']
        pw = json_data['password']
        return jsonify({'username': un, 'password': pw}, 200)
