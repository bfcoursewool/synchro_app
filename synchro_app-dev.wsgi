import sys
import os
synchro_app = "/var/www/html/synchro_ops/synchro_app"
if not synchro_app in sys.path:
    sys.path.insert(0, synchro_app)

os.environ['SYNCHRO_ENV'] = 'DEVELOPMENT'

from synchro import app as application
