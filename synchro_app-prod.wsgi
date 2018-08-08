import sys
import os
synchro_app = "/var/www/html/synchro_ops/synchro_app"
if not synchro_app in sys.path:
    sys.path.insert(0, synchro_app)

os.environ['SYNCHRO_ENV'] = 'PRODUCTION'

def application(environ, start_response):
  os.environ['CACHE_VERSION'] = environ['CACHE_VERSION']
  from synchro import app as _app
  return _app(environ, start_response)

from synchro import app as application
