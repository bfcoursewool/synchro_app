from synchro import library_resources, library_frontend_build

from fanstatic import Library
from fanstatic import Resource
from fanstatic import Group
import time

jquery = Resource(
  library_resources,
  'jquery/jquery-3.1.1.min.js'
)

jquery_ui_css = Resource(
  library_resources,
  'jquery/jquery-ui.theme.min.css',
  depends=[]
)

jquery_ui = Resource(
  library_resources,
  'jquery/jquery-ui.min.js',
  depends=[
    jquery,
    jquery_ui_css
  ]
)

bootstrap = Resource(
  library_resources,
  'bootstrap/dist/js/bootstrap.min.js'
)

bootstrap_css = Resource(
  library_resources,
  'bootstrap/dist/css/bootstrap.min.css'
)