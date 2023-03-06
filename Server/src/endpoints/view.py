from flask import jsonify, request
from flask_restful import Resource


class View(Resource):
    def get(self):
        # Get the article_id at the end of the URL endpoint
        article_id = request.view_args['article_id']


        # Return the article
        return jsonify({article_id: "coucou"}, 200)
