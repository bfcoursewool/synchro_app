from flask import Flask, render_template
from flask_fanstatic import Fanstatic

app = Flask(__name__)
app.config.from_object("config")
fanstatic = Fanstatic(app)

fanstatic.resource('js/shopify_test.js', name='shopify_test')

from synchro.carousel_demo.controllers import carousel_demo
from synchro.genesis.controllers import genesis
from synchro.gold.controllers import gold
from synchro.salt.controllers import salt
from synchro.digestcleanse.controllers import digestcleanse

app.register_blueprint(carousel_demo)
app.register_blueprint(genesis)
app.register_blueprint(gold)
app.register_blueprint(salt)
app.register_blueprint(digestcleanse)