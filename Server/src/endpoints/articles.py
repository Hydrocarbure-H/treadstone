from flask import jsonify
from flask import Blueprint

from src.db.db import connect_to_db

route = Blueprint('route', __name__)


@route.route('/', methods=['GET'])
@route.route('/articles', methods=['GET'])
def articles():
    # Get all the articles
    db = connect_to_db()
    cursor = db.cursor(buffered=True)
    cursor.execute("USE treadstone")
    cursor.execute(
        "SELECT articles.id, articles.title, authors.name, articles.content, articles.date FROM articles INNER JOIN authors ON articles.author = authors.id")
    if cursor.rowcount == 0:
        return jsonify({
            'error': 'No articles found'
        }, 404)
    else:
        art_list = []
        for article in cursor.fetchall():
            art_list.append({
                'id': article[0],
                'title': article[1],
                'subtitle': article[2],
                'content': article[3],
                'description': article[3],
                'date': article[4]
            })

    return jsonify(art_list, 200)


@route.route('/articles/view/<int:article_id>', methods=['GET'])
def articles_view(article_id):
    # Get the article with the id
    db = connect_to_db()
    cursor = db.cursor(buffered=True)
    cursor.execute("USE treadstone")
    cursor.execute(
        "SELECT articles.title, authors.name, articles.content, articles.date FROM articles INNER JOIN authors ON articles.author = authors.id WHERE articles.id = " + str(
            article_id))
    if cursor.rowcount == 0:
        return jsonify({
            'error': 'Article not found'
        }, 404)
    else:
        article = cursor.fetchone()
        title = article[0]
        author = article[1]
        content = article[2]
        date = article[3]
        return jsonify({
            'title': title,
            'subtitle': author,
            'content': content,
            'description': content,
            'date': date
        }, 200)
