from flask import Flask, render_template
from flask_fanstatic import Fanstatic

app = Flask(__name__)
app.config.from_object("config")
fanstatic = Fanstatic(app)

fanstatic.resource('js/shopify_test.js', name='shopify_test')

from synchro.carousel_demo.controllers import carousel_demo

app.register_blueprint(carousel_demo)