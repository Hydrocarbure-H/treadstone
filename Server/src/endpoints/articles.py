from flask import jsonify
from flask import Blueprint

route = Blueprint('route', __name__)


@route.route('/', methods=['GET'])
@route.route('/articles', methods=['GET'])
def articles():
    return jsonify({'articles': "coucou"}, 200)


@route.route('/articles/view/<string:article_id>', methods=['GET'])
def articles_view(article_id):
    return jsonify({article_id: "coucou"}, 200)
