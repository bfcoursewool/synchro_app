import sys
synchro_app = "/var/www/html/synchro_app"
if not synchro_app in sys.path:
    sys.path.insert(0, synchro_app)

from synchro_app import app as application
