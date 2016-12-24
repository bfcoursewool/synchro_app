from urlparse import urlparse
from flask import (
  Blueprint, 
  render_template, 
  make_response,
  abort,
  request
)
from synchro.third_party_resources import bootstrap, bootstrap_css
from synchro.resources import synchro_shopify, synchro_buy_button, synchro_effects, gold_analytics
from synchro.third_party_resources import wowjs

landing_pages = Blueprint('landing_pages', __name__)

endpoint_info_dict = {
  'genesis': {
    'v0': {
      'template': 'genesis/genesis.html',
      'scripts': [synchro_shopify]
    }
  }, 
  'salt': {
    'v0': {
      'template': 'salt/salt.html', 
      'scripts': [synchro_shopify]
    }
  },
  'gold': {
    'v0': {
      'template': 'gold/gold_af.html',
      'scripts': [synchro_buy_button, synchro_effects, gold_analytics, wowjs]
    }
  },
  'digestcleanse': {
    'v0': {
      'template': 'digestcleanse/digestcleanse.html',
      'scripts': [synchro_shopify]
    },
    'v1': {
      'template': 'digestcleanse/digestcleanse_v1.html', 
      'scripts': [synchro_shopify]
    }
  }
}

@landing_pages.route('/', defaults={'page': 'none', 'version': 'v0'})
@landing_pages.route('/<page>/', defaults={'version': 'v0'})
@landing_pages.route('/<page>/<version>')
def landing_page(page, version): 
  parsed_url = urlparse(request.url_root)
  host = parsed_url[1].split(':')[0] # Don't care about port, if it's in the netloc
  subdomain = host.split('.')[0]

  if page == "none": 
    return ('', 200)
  if subdomain != "dev" and host != "localhost": 
    page = subdomain

  # TODO -- would prefer some form of assertion here so we can get visibility into people
  # requesting weird URLs but for now throwing a 404 will work. 
  if page not in endpoint_info_dict or version not in endpoint_info_dict[page]: 
    abort(404)

  # Assert that each version entry in the info_dict contains both a template to render and a list of scripts to include. 
  # A failed assertion should happen only during development, so this helps ensure developer consistency. 
  assert 'template' in endpoint_info_dict[page][version]
  assert 'scripts' in endpoint_info_dict[page][version]

  for script in endpoint_info_dict[page][version]['scripts']:
    script.need()
  bootstrap.need()
  bootstrap_css.need()

  return render_template(endpoint_info_dict[page][version]['template'])
