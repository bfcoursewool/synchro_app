from urlparse import urlparse
from flask import (
  Blueprint,
  render_template,
  make_response,
  abort,
  request,
  redirect
)
from synchro.third_party_resources import bootstrap, bootstrap_css
from synchro.resources import synchro_es6
from synchro.third_party_resources import videojsga, videojsie8, d3js, vivus
from synchro import const

landing_pages = Blueprint('landing_pages', __name__)

endpoint_info_dict = {
  'genesis': {
    'v0': {
      'template': 'landing_pages/genesis/genesis.html',
      'scripts': [synchro_es6],
      'template_vars': {
        'stylesheet': 'genesis/genesis.css'
      }
    },
    '1': {
      'template': 'landing_pages/genesis/genesis.html',
      'scripts': [synchro_es6],
      'template_vars': {
        'is_variant': True,
        'stylesheet': 'genesis/genesis.css'
      }
    }
  },
  'cognos': {
    'v0': {
      'template': 'landing_pages/cognos/cognos.html',
      'scripts': [synchro_es6],
      'template_vars': {
        'stylesheet': 'cognos/cognos.css'
      }
    }
  },
  'salt': {
    'v0': {
      'template': 'landing_pages/salt/salt.html',
      'scripts': []
    }
  },
  'gold': {
    'v0': {
      'template': 'landing_pages/gold/susan/index.html',
      'scripts': [synchro_es6],
      'template_vars': {
         'is_variant': False,
         'stylesheet': 'gold/susan/gold_susan.css'
      }
    },
    'old-gold': {
      'template': 'landing_pages/gold/gold_organic.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'poster_image': 'http://cdn.besynchro.com/gold/gold-lg-video-poster2.png',
        'stylesheet': 'gold/gold_lemon-ginger.css'
      }
    },
    '1': {
      'template': 'landing_pages/gold/susan/index.html',
      'scripts': [synchro_es6],
      'template_vars': {
         'is_variant': True,
         'stylesheet': 'gold/susan/gold_susan.css'
      }
    },
    '2': {
        'template': 'landing_pages/gold/susan/index.html',
        'scripts': [synchro_es6],
        'template_vars': {
         'is_variant': True,
         'stylesheet': 'gold/susan/gold_susan.css'
      },
    }
  },
  'digestcleanse': {
    'v0': {
      'template': 'landing_pages/digestcleanse/digestcleanse.html',
      'scripts': []
    },
    'v1': {
      'template': 'landing_pages/digestcleanse/digestcleanse_v1.html',
      'scripts': []
    }
  },
  'cro002': {
    'v1': {
      'template': 'landing_pages/gold/abtests/cro_002/variant_1.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/abtests/cro_002.css'
      }
    },
    'v2': {
      'template': 'landing_pages/gold/abtests/cro_002/variant_2.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/abtests/cro_002.css'
      }
    }
  },
  'cro004': {
    'v1': {
      'template': 'landing_pages/gold/abtests/cro_004/variant_1.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'stylesheet': 'gold/abtests/cro_004.css'
      }
    },
    'v2': {
      'template': 'landing_pages/gold/abtests/cro_004/variant_2.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/abtests/cro_004.css'
      }
    },
    'v3': {
      'template': 'landing_pages/gold/abtests/cro_004/variant_3.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'poster_image': 'http://cdn.besynchro.com/gold/gold-video-poster2.jpg',
        'stylesheet': 'gold/abtests/cro_004.css'
      }
    }
  },
  'cro005': {
    'v1': {
      'template': 'landing_pages/gold/abtests/cro_005/variant_1.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'stylesheet': 'gold/abtests/cro_005.css'
      }
    }
  },
  'cro006': {
    'v1': {
      'template': 'landing_pages/gold/abtests/cro_006/variant_1.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'stylesheet': 'gold/abtests/cro_006.css'
      }
    }
  },
  'cro007': {
    'v1': {
      'template': 'landing_pages/gold/abtests/cro_007/variant_1.html',
      'scripts': [synchro_es6, videojsie8, videojsga],
      'template_vars': {
        'is_variant': True,
        'stylesheet': 'gold/abtests/cro_007.css'
      }
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
    # For addresses like: gold.besynchro.com/1 the first arg is actually the version, but it comes
    # through here as "page" because of how the route is set up, so we'll set that as the version
    # so long as it's not "none", in which case version is already v0
    if page is not 'none':
      version = page
    page = subdomain

  if page == "genesis" and 'https://' not in request.url:
    full_url = request.url 
    ssl_url = full_url.replace('http://', 'https://')
    return redirect(ssl_url)

  # Page and version can also be passed in as GET vars, for URL-formatting reasons
  if 'p' in request.args:
    page = request.args['p']
  # Use the query param to set the version iff there is not a URL route doing the same. 
  # ie, we want the URL route to take precedent over the query param... this is to make VWO work better.
  if 'v' in request.args and version == 'v0':
    version = request.args['v']

  # Make sure instances respond correctly to health checker pings
  if page == 'none':
    return ('', 200)

  # Fail if we don't have a valid page, and default to v0 if the version is invalid
  assert page in endpoint_info_dict
  if version not in endpoint_info_dict[page]:
    version = 'v0'

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

