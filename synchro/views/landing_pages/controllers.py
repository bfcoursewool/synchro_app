from urlparse import urlparse
from urllib import urlencode
import json
from flask import (
  Blueprint,
  render_template,
  make_response,
  abort,
  request,
  redirect
)
import copy
import random
from flask_cdn import url_for
from synchro import const

landing_pages = Blueprint('landing_pages', __name__)

endpoint_info_dict = {
  'gold': {
    # Base/Fallback Gold LP (never link directly to this version)
    'v0': {
      'template': 'landing_pages/gold-capsules/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold Original LP for Organic
    'original-turmeric-supplement': {
      'template': 'landing_pages/gold-og/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    # Gold Lemon Ginger LP for Organic
    'lemon-ginger-turmeric-supplement': {
      'template': 'landing_pages/gold-og/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold LP for Paid (Facebook/Instagram)
    'fb': {
      'template': 'landing_pages/gold-og/v1-0-paid-a/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold LP for Paid (Adwords)
    'gg': {
      'template': 'landing_pages/gold-og/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold LP for Retargeting (Facebook/Instagram)
    'r': {
      'template': 'landing_pages/gold-og/v1-0-paid-r/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold Capsules LP for Organic
    'turmeric-capsules': {
      'template': 'landing_pages/gold-capsules/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    # Gold Capsules LP with Susan Autoplay
    'turmeric-capsules-susan': {
      'template': 'landing_pages/gold-capsules/susan/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold Capsules LP for Paid (Facebook/Instagram)
    'turmeric-capsules-fb': {
      'template': 'landing_pages/gold-capsules/v1-0-paid-a/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold Capsules LP for Retargeting (Facebook/Instagram)
    'turmeric-capsules-r': {
      'template': 'landing_pages/gold-capsules/v1-0-paid-r/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Gold Customers Reviews
    'reviews': {
      'template': 'landing_pages/reviews/gold-elixir/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    }
  },
  'genesis': {
    # Genesis LP for Organic
    'v0': {
      'template': 'landing_pages/genesis/v2-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    # Genesis LP for Paid (Facebook/Instagram)
    'fb': {
      'template': 'landing_pages/genesis/v2-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Genesis LP for Paid (Adwords)
    'gg': {
      'template': 'landing_pages/genesis/v2-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'ketomanna': {
    # Ketomanna LP for Organic
    'v0': {
      'template': 'landing_pages/ketomanna/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    # Ketomanna LP for Paid (Facebook/Instagram)
    'fb': {
      'template': 'landing_pages/ketomanna/v1-0-paid-a/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Ketomanna LP for Paid (Adwords)
    'gg': {
      'template': 'landing_pages/ketomanna/v1-0-paid-a/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Ketomanna LP for Retargeting (Facebook/Instagram)
    'r': {
      'template': 'landing_pages/ketomanna/v1-0-paid-r/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'ketoplan': {
    # Ketoplan LP for Organic
    'v0': {
      'template': 'landing_pages/keto-bundle/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    # Ketoplan LP for Paid (Facebook/Instagram)
    'fb': {
      'template': 'landing_pages/keto-bundle/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Ketoplan LP for Paid (Adwords)
    'gg': {
      'template': 'landing_pages/keto-bundle/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  'keto-cleanse': {
    # Keto Cleanse LP for Organic
    'v0': {
      'template': 'landing_pages/keto-cleanse/v1-0/0-index.html',
      'template_vars': {
        'is_variant': False,
      }
    },
    # Keto Cleanse LP for Paid (Facebook/Instagram)
    'fb': {
      'template': 'landing_pages/keto-cleanse/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Keto Cleanse LP for Paid (Adwords)
    'gg': {
      'template': 'landing_pages/keto-cleanse/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Keto Cleanse Program Home Page for Direct
    'home': {
      'template': 'landing_pages/keto-cleanse/directory/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Keto Cleanse Program Week 1 Page for Direct
    'week-1': {
      'template': 'landing_pages/keto-cleanse/week-1/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Keto Cleanse Program Week 2 Page for Direct
    'week-2': {
      'template': 'landing_pages/keto-cleanse/week-2/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    # Keto Cleanse Program Week 3 Page for Direct
    'week-3': {
      'template': 'landing_pages/keto-cleanse/week-3/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    }
  },
  ## This subpath to be phased out once new subdomain is live
  'keto': {
    'v0': {
      'template': 'landing_pages/keto-bundle/v1-0/0-index.html',
      'template_vars': {
        'is_variant': True,
      }
    },
    'keto-cleanse-program': {
      'template': 'landing_pages/keto-cleanse/v1-0-paid/0-index.html',
      'template_vars': {
        'is_variant': True,
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
  }
  ## Experiments
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
    # Only do this whole page/version/category switcharoo for the old subdodmains... live.besynchro.com
    # should work basically exactly like the dev site.
    if subdomain != 'live':
      if page is not 'none' and version is not 'v0':
        prod_category = subdomain
      elif page is not 'none':
        version = page
        page = subdomain
      else:
        page = subdomain
    else:
      if page is 'none':
        return redirect('https://besynchro.com', code=301)

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
  variant_default = False
  assert page in endpoint_info_dict
  if version not in endpoint_info_dict[page]:
    version = 'v0'
    variant_default = True
    noindex = True


  # Assert that each version entry in the info_dict contains a template to render.
  # A failed assertion should happen only during development, so this helps ensure developer consistency.
  assert 'template' in endpoint_info_dict[page][version]

  # If there is a dict of template vars, let's grab it and pass it as kwargs to render_template
  template_vars = {}
  if 'template_vars' in endpoint_info_dict[page][version]:
    template_vars = copy.deepcopy(endpoint_info_dict[page][version]['template_vars'])
    if variant_default:
      template_vars['is_variant'] = noindex

  ## This is just some random stuff to make our keto-cleanse-program page appear to be tracking
  ## users and assigning them a "participant_id". We just cookie them and make sure to tack the saved
  ## participant_id onto the URL they accessed... easy.
  if 'keto-cleanse-program-' in version or 'home' in version or 'week-1' in version or 'week-2' in version or 'week-3' in version:
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

  ## Do some cookie magic so we can detect returning customers and offer them a discounted deal...
  previous_activity = request.cookies.get('synchro_purchase_tracking')
  try:
    previous_activity = json.loads(previous_activity)
  except:
    previous_activity = {}
  resp = make_response(render_template(
    endpoint_info_dict[page][version]['template'],
    kENV=const.kENVIRONMENT,
    page=page,
    returning=previous_activity.get(page, {}).get('purchased', False),
    **template_vars
  ))
  if page not in previous_activity:
    previous_activity[page] = {
      'visited': True,
      'purchased': False
    }
  resp.set_cookie('synchro_purchase_tracking', json.dumps(previous_activity), domain=".besynchro.com")
  return resp
