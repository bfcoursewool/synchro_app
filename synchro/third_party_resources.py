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

tether = Resource(
  library_resources,
  'bootstrap/js/tether.min.js',
  depends=[]
)

bootstrap = Resource(
  library_resources,
  'bootstrap/js/bootstrap.min.js',
  depends=[
    jquery,
    tether
  ]
)

bootstrap_css = Resource(
  library_resources,
  'bootstrap/css/bootstrap.min.css'
)

shopify = Resource(
  library_resources,
  'shopify/shopify-buy.polyfilled.globals.min.js'
)

shopify_buy_button = Resource(
  library_resources,
  'shopify/buybutton.js',
  depends=[]
)

wowjs = Resource(
  library_resources,
  'wow/wow.min.js',
)