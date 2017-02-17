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
from synchro.third_party_resources import wowjs, videojsga, videojsie8
from synchro import const

landing_pages = Blueprint('landing_pages', __name__)

endpoint_info_dict = {
  'genesis': {
    'v0': {
      'template': 'landing_pages/genesis/genesis.html',
      'scripts': [synchro_shopify]
    }
  },
  'salt': {
    'v0': {
      'template': 'landing_pages/salt/salt.html',
      'scripts': [synchro_shopify]
    }
  },
  'gold': {
    'v0': {
      'template': 'landing_pages/gold/gold.html',
      'scripts': [synchro_buy_button, synchro_effects, gold_analytics, wowjs],
      'template_vars': {
        'stylesheet': 'gold/gold.css'
      }
    },
    'v1': {
      'template': 'landing_pages/gold/gold_video.html',
      'scripts': [synchro_buy_button, synchro_effects, gold_analytics, wowjs, videojsie8, videojsga],
      'template_vars': {
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/gold_video.css'
      }
    },
    'p1': {
      'template': 'landing_pages/gold/gold_pain.html',
      'scripts': [synchro_buy_button, synchro_effects, gold_analytics, wowjs],
      'template_vars': {
        'stylesheet': 'gold/gold.css'
      }
    },
    'pv1': {
      'template': 'landing_pages/gold/gold_pain_video.html',
      'scripts': [synchro_buy_button, synchro_effects, gold_analytics, wowjs, videojsie8, videojsga],
      'template_vars': {
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/gold_video.css'
      }
    },
    'cro002-1': {
      'template': 'landing_pages/gold/gold_cro002-1.html',
      'scripts': [synchro_buy_button, synchro_effects, gold_analytics, wowjs, videojsie8, videojsga],
      'template_vars': {
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/gold_cro002.css'
      }
    },
    'cro002-2': {
      'template': 'landing_pages/gold/gold_cro002-2.html',
      'scripts': [synchro_buy_button, synchro_effects, gold_analytics, wowjs, videojsie8, videojsga],
      'template_vars': {
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/gold_cro002.css'
      }
    }
  },
  'digestcleanse': {
    'v0': {
      'template': 'landing_pages/digestcleanse/digestcleanse.html',
      'scripts': [synchro_shopify]
    },
    'v1': {
      'template': 'landing_pages/digestcleanse/digestcleanse_v1.html',
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

  # Only set page to the parsed 'subdomain' in case it's actually letters.
  # in other words if this is a health-check request going directly to an instance's ephemeral ip
  # let's not set the page to 3 numerical digits.
  if const.kENVIRONMENT == 'production' and subdomain.isalpha():
    page = subdomain

  # Page and version can also be passed in as GET vars, for URL-formatting reasons
  if 'p' in request.args:
    page = request.args['p']
  if 'v' in request.args:
    version = request.args['v']

  # Make sure instances respond correctly to health checker pings
  if page == "none":
    return ('', 200)

  # Fail if we don't have a valid page or version.
  assert page in endpoint_info_dict
  assert version in endpoint_info_dict[page]

  # Assert that each version entry in the info_dict contains both a template to render and a list of scripts to include.
  # A failed assertion should happen only during development, so this helps ensure developer consistency.
  assert 'template' in endpoint_info_dict[page][version]
  assert 'scripts' in endpoint_info_dict[page][version]

  # Include all the JS assets we need.
  for script in endpoint_info_dict[page][version]['scripts']:
    script.need()
  bootstrap.need()
  bootstrap_css.need()

  # If there is a dict of template vars, let's grab it and pass it as kwargs to render_template
  template_vars = {}
  if 'template_vars' in endpoint_info_dict[page][version]:
    template_vars = endpoint_info_dict[page][version]['template_vars']

  return render_template(
    endpoint_info_dict[page][version]['template'],
    kENV=const.kENVIRONMENT,
    **template_vars
  )

