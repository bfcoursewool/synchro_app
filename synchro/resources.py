from synchro import library_resources, library_frontend_build
from fanstatic import Library
from fanstatic import Resource
from fanstatic import Group
import time

from synchro.third_party_resources import (
  jquery, 
  shopify, 
  shopify_buy_button,
  wowjs
)

synchro_shopify = Resource(
  library_frontend_build, 'synchro.min.js',
  depends=[
    jquery,
    shopify
  ]
)

synchro_buy_button = Resource(
  library_frontend_build, 'buy_button.min.js',
  depends=[
    jquery,
    shopify_buy_button
  ]
)

synchro_effects = Resource(
  library_frontend_build, 'effects.min.js',
  depends=[
    jquery,
    wowjs
  ]
)

analytics = Resource(
  library_frontend_build, 'analytics.min.js',
  depends=[
    jquery
  ]
)
