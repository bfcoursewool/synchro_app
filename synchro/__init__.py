from flask import Flask, render_template
from fanstatic import Fanstatic, Library
import time

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