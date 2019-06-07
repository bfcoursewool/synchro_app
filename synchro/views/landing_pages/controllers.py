from urlparse import urlparse
from urllib import urlencode
from flask import (
  Blueprint,
  render_template,
  make_response,
  abort,
  request,
  redirect
)
import random
from flask_cdn import url_for
from synchro import const

landing_pages = Blueprint('landing_pages', __name__)

endpoint_info_dict = {
  'gold': {
    'v0': {
      'template': 'landing_pages/gold-og/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'turmeric-supplement': {
      'template': 'landing_pages/gold-og/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'original': {
      'template': 'landing_pages/gold-og/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'original-turmeric-supplement': {
      'template': 'landing_pages/gold-og/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'lemon-ginger': {
      'template': 'landing_pages/gold/v2-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'lemon-ginger-turmeric-supplement': {
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
      'template': 'landing_pages/ketomanna/v1-0-paid-a/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-chocolate-fudge-r': {
      'template': 'landing_pages/ketomanna/v1-0-paid-r/0-index.html',
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
    'ketoplan': {
      'template': 'landing_pages/keto-bundle/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-chocolate-fudge': {
      'template': 'landing_pages/ketomanna/v1-0-paid-a/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-chocolate-fudge-r': {
      'template': 'landing_pages/ketomanna/v1-0-paid-r/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-cleanse-program': {
      'template': 'landing_pages/keto-cleanse/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    'keto-cleanse-program-home': {
      'template': 'landing_pages/keto-cleanse/directory/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-cleanse-program-1': {
      'template': 'landing_pages/keto-cleanse/week-1/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-cleanse-program-2': {
      'template': 'landing_pages/keto-cleanse/week-2/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-cleanse-program-3': {
      'template': 'landing_pages/keto-cleanse/week-3/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'cognos': {
    'v0': {
      'template': 'landing_pages/cognos/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    }
  },
  'km003': {
    'v1': {
      'template': 'landing_pages/experiments/km003/v1/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'v2': {
      'template': 'landing_pages/experiments/km003/v2/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  }
}

@landing_pages.route('/', defaults={'page': 'none', 'version': 'v0', 'prod_category': None})
@landing_pages.route('/<page>/', defaults={'version': 'v0', 'prod_category': None})
@landing_pages.route('/<page>/<version>', defaults={'prod_category': None})
@landing_pages.route('/<prod_category>/<page>/<version>')
def landing_page(page, version, prod_category):
  parsed_url = urlparse(request.url_root)
  host = parsed_url[1].split(':')[0] # Don't care about port, if it's in the netloc
  subdomain = host.split('.')[0]

  # Only set page to the parsed 'subdomain' in case it's actually letters.
  # in other words if this is a health-check request going directly to an instance's ephemeral ip
  # let's not set the page to 3 numerical digits.
  if const.kENVIRONMENT == 'production' and subdomain.isalpha():
    # For addresses like: gold.besynchro.com/1, or keto.besynchro.com/ketomanna/keto-chocolate-fudge
    # we have to do a little shifting around of values, because in each URL the subdomain is serving
    # as either the <page> or the <prod_category>, while the URI values are themselves serving as
    # different values.
    if page is not 'none' and version is not 'v0':
      prod_category = subdomain
    elif page is not 'none':
      version = page
      page = subdomain
    else:
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

  # Assert that each version entry in the info_dict contains a template to render.
  # A failed assertion should happen only during development, so this helps ensure developer consistency.
  assert 'template' in endpoint_info_dict[page][version]

  # If there is a dict of template vars, let's grab it and pass it as kwargs to render_template
  template_vars = {}
  if 'template_vars' in endpoint_info_dict[page][version]:
    template_vars = endpoint_info_dict[page][version]['template_vars']
    template_vars['is_variant'] = noindex

  ## This is just some random stuff to make our keto-cleanse-program page appear to be tracking
  ## users and assigning them a "participant_id". We just cookie them and make sure to tack the saved
  ## participant_id onto the URL they accessed... easy.
  if 'keto-cleanse-program-' in version:
    url_participant_id = request.args.get('participant_id')
    if not url_participant_id:
      current_query_string = urlencode(request.args)
      fake_participant_id = request.cookies.get('participant_id')
      if fake_participant_id:
        query_string = "participant_id=%s&%s" % (fake_participant_id, current_query_string)
        return redirect('%s?%s' % (request.base_url, query_string), code=302)
      else:
        fake_participant_id = random.randint(1, 500000)
        query_string = "participant_id=%s&%s" % (fake_participant_id, current_query_string)
        resp = make_response(redirect('%s?%s' % (request.base_url, query_string), code=302))
        resp.set_cookie('participant_id', str(fake_participant_id))
        return resp

  return render_template(
    endpoint_info_dict[page][version]['template'],
    kENV=const.kENVIRONMENT,
    **template_vars
  )
