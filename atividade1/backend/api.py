import json

from flask import Flask
from flask_cors import CORS
from flask import request

app = Flask(__name__)

CORS(app, origins=["*"])

playlist_db: list[dict[str, str]] = [
    {
        'musica': 'Riptide',
        'artista': 'Vance Joy',
    },

]

@app.route("/hello-world")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/playlist", methods=["GET", "POST"])
def playlist():
    if request.method == 'GET':
        return json.dumps(playlist_db)
    elif request.method == 'POST':
        playlist_db.append(request.get_json())
        return json.dumps({
            'success': 'Inserido com sucesso'
        })
    return json.dumps({
        'error': 'Method not allowed'
    })
