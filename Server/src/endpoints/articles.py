from flask import jsonify
from flask import Blueprint

from src.db.db import connect_to_db

route = Blueprint('route', __name__)


@route.route('/', methods=['GET'])
@route.route('/articles', methods=['GET'])
def articles():
    lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc"
    title = "Treadstone - Apised"
    subtitle = "This article come from API"
    # generate a random number of articles composed of a title, subtitle and a lorem, between 1 and 10
    art_list = []
    for i in range(1, 10):
        art_list.append({
            'title': title,
            'subtitle': subtitle,
            'content': lorem
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
            'date': date
        }, 200)
