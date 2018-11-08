from urlparse import urlparse
from flask import (
  Blueprint,
  render_template,
  make_response,
  abort,
  request,
  redirect
)
from flask_cdn import url_for
from synchro import const

landing_pages = Blueprint('landing_pages', __name__)

endpoint_info_dict = {
  'gold': {
    'v0': {
      'template': 'landing_pages/gold/v2-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'v2': {
      'template': 'landing_pages/gold/v2-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'turmeric-supplement': {
      'template': 'landing_pages/gold/v2-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'genesis': {
    'v0': {
      'template': 'landing_pages/genesis/v2-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'v2': {
      'template': 'landing_pages/genesis/v2-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'ketomanna': {
    'v0': {
      'template': 'landing_pages/ketomanna/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'keto-chocolate-fudge': {
      'template': 'landing_pages/ketomanna/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'keto': {
    'v0': {
      'template': 'landing_pages/keto-bundle/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'keto-plan': {
      'template': 'landing_pages/keto-bundle/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
  },
  'cognos': {
    'v0': {
      'template': 'landing_pages/cognos/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'v1': {
      'template': 'landing_pages/cognos/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'cro008': {
    'v1': {
      'template': 'landing_pages/experiments/cro008/v1/0-index.html',
      'template_vars': {
        'is_variant': True,
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

    ## Redirect to https if this isn't a health-checker request
    if request.headers.get('X-Forwarded-Proto', '').lower() != "https":
      full_url = request.url
      ssl_url = full_url.replace('http://', 'https://')
      return redirect(ssl_url, code=301)

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
  noindex = False
  assert page in endpoint_info_dict
  if version not in endpoint_info_dict[page]:
    version = 'v0'
    noindex = True

  # Assert that each version entry in the info_dict contains both a template to render and a list of scripts to include.
  # A failed assertion should happen only during development, so this helps ensure developer consistency.
  assert 'template' in endpoint_info_dict[page][version]

  # If there is a dict of template vars, let's grab it and pass it as kwargs to render_template
  template_vars = {}
  if 'template_vars' in endpoint_info_dict[page][version]:
    template_vars = endpoint_info_dict[page][version]['template_vars']
    template_vars['is_variant'] = noindex

  return render_template(
    endpoint_info_dict[page][version]['template'],
    kENV=const.kENVIRONMENT,
    **template_vars
  )
