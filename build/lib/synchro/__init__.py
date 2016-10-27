from flask import Flask, render_template
from fanstatic import Fanstatic, Library
import time

app = Flask(__name__)
app.config.from_object("config")
app.debug = True

library_resources = Library('synchro', 'resources', version=str(int(time.time()/60)))
library_frontend_build = Library('synchro_frontend_build', 'frontend_build', version=str(int(time.time()/60)))

from synchro.carousel_demo.controllers import carousel_demo
from synchro.genesis.controllers import genesis
from synchro.gold.controllers import gold
from synchro.salt.controllers import salt
from synchro.digestcleanse.controllers import digestcleanse
## TODO -- Make an admin section blueprint

app.register_blueprint(carousel_demo)
app.register_blueprint(genesis)
app.register_blueprint(gold)
app.register_blueprint(salt)
app.register_blueprint(digestcleanse)

fanstatic_app = Fanstatic(app)