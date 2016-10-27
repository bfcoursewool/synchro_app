from synchro import fanstatic_app
from werkzeug.serving import run_simple

run_simple(
  '0.0.0.0',
  5000,
  fanstatic_app, 
  use_reloader=True
)