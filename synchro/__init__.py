import os
from flask import Flask, render_template
from fanstatic import Fanstatic, Library
import time

MAIN_DIRECTORY = os.path.dirname(os.path.realpath(__file__))

app = Flask(__name__)
app.config.from_object("config")
app.debug = True

library_resources = Library('synchro', 'resources', version=str(int(time.time()/60)))
library_frontend_build = Library('synchro_frontend_build', 'frontend_build', version=str(int(time.time()/60)))

from synchro.landing_pages.controllers import landing_pages
from synchro.admin.controllers import admin_section
from synchro.webhooks.controllers import webhook_handlers

app.register_blueprint(landing_pages)
app.register_blueprint(admin_section)
app.register_blueprint(webhook_handlers)

fanstatic_app = Fanstatic(app)

@app.teardown_appcontext
def shutdown_db_session(exception=None):
  from synchro.models import db_session
  db_session.remove()