import sys
synchro_app = "/var/www/html/synchro_app"
if not synchro_app in sys.path:
    sys.path.insert(0, synchro_app)
print sys.path

from synchro_app import app as application
