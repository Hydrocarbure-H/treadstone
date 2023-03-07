from flask import jsonify
from flask import Blueprint

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


@route.route('/articles/view/<string:article_id>', methods=['GET'])
def articles_view(article_id):
    # Generate a random article composed of a title, subtitle and a lorem
    title = "Treadstone - Apised"
    subtitle = "This article is specific"
    lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nisl eu nunc. Nullam auctor, nisl eget ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl n"
    return jsonify({
        'title': title,
        'subtitle': subtitle,
        'content': lorem,
        'id': article_id
    }, 200)
