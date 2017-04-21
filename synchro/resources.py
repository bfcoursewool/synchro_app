from synchro import library_resources, library_frontend_build
from fanstatic import Library
from fanstatic import Resource
from fanstatic import Group
import time

## TODO -- Can we reign this in a bit? How badly do we need bootstrap, for example, now that we have a more robust frontend? 
## Can we get rid of wowjs please? 
from synchro.third_party_resources import (
  jquery, 
  shopify_buy_button,
  wowjs,
  d3js,
  vivus
)

synchro_es6 = Resource(
  library_frontend_build, 'synchro.js',
  depends=[
    jquery,
    d3js,
    vivus,
    wowjs,
    shopify_buy_button
  ],
  bottom=True
)
