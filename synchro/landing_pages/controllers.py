from flask import Blueprint, render_template
from synchro.third_party_resources import bootstrap, bootstrap_css

landing_pages = Blueprint('landing_pages', __name__, url_prefix='/pages')

uri_to_template = {
  'genesis': {
    'v0': 'genesis/genesis.html'
  },
  'salt': {
    'v0': 'salt/salt.html'
  },
  'gold': {
    'v0': 'gold/gold.html',
    'af': 'gold/gold_af.html'
  },
  'digestcleanse': {
    'v0': 'digestcleanse/digestcleanse.html',
    'v1': 'digestcleanse/digestcleanse_v1.html'
  }
}

@landing_pages.route('/<page>/', defaults={'version': 'v0'})
@landing_pages.route('/<page>/<version>')
def landing_page(page, version):
  bootstrap.need()
  bootstrap_css.need()
  return render_template(uri_to_template[page][version])
