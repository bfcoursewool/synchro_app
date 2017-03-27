from synchro import library_resources, library_frontend_build
from fanstatic import Library
from fanstatic import Resource
from fanstatic import Group
import time

from synchro.third_party_resources import (
  jquery, 
  shopify_buy_button,
  wowjs,
  d3js
)

synchro_es6 = Resource(
  library_frontend_build, 'synchro.js',
  depends=[
    jquery,
    d3js,
    wowjs,
    shopify_buy_button
  ],
  bottom=True
)
