import os
from flask import Flask, render_template
from fanstatic import Fanstatic, Library
import time
import KISSmetrics

MAIN_DIRECTORY = os.path.dirname(os.path.realpath(__file__))

from synchro.const import kKISSMETRICS_API_KEY
KM = KISSmetrics.Client(key=kKISSMETRICS_API_KEY)

app = Flask(__name__)
app.config.from_object("config")
app.debug = True

library_resources = Library('synchro', 'resources', version=str(int(time.time()/60)))
library_frontend_build = Library('synchro_frontend_build', 'frontend_build', version=str(int(time.time()/60)))

from synchro.views.landing_pages.controllers import landing_pages
from synchro.views.admin.controllers import admin_section
from synchro.views.webhooks.controllers import webhook_handlers
from synchro.views.rest_apis.controllers import rest_api_handlers

app.register_blueprint(landing_pages)
app.register_blueprint(admin_section)
app.register_blueprint(webhook_handlers)
app.register_blueprint(rest_api_handlers)

fanstatic_app = Fanstatic(app)

@app.teardown_appcontext
def shutdown_db_session(exception=None):
  from synchro.models.meta import db_session
  db_session.remove()