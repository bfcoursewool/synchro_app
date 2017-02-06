import os
from flask import Flask, render_template
from fanstatic import Fanstatic, Library
import time
import KISSmetrics
from raven.contrib.flask import Sentry

# So we can send alias events from the backend and track people from landing page -> shopify checkout
from synchro.const import kKISSMETRICS_API_KEY
KM = KISSmetrics.Client(key=kKISSMETRICS_API_KEY)

app = Flask(__name__)
app.config.from_object('config')
app.debug = True

# Log server-side errors, aggregate, and email them to devs
sentry = Sentry(app, dsn='https://35f8ce49bcbf4b2fa0299a69b5a0b4c5:47fa94c247c74d949dce28fba7bb1d32@sentry.io/130658')

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

fanstatic_app = Fanstatic(app, bottom=True)

@app.teardown_appcontext
def shutdown_db_session(exception=None):
  from synchro.models.meta import db_session
  db_session.remove()