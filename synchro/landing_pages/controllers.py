from flask import Blueprint, render_template, abort
from synchro.third_party_resources import bootstrap, bootstrap_css
from synchro.resources import synchro_shopify

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
    'v1': 'gold/gold_v1.html'
  },
  'digestcleanse': {
    'v0': 'digestcleanse/digestcleanse.html',
    'v1': 'digestcleanse/digestcleanse_v1.html'
  }
}

@landing_pages.route('/<page>/', defaults={'version': 'v0'})
@landing_pages.route('/<page>/<version>')
def landing_page(page, version):
  synchro_shopify.need()
  bootstrap.need()
  bootstrap_css.need()

  if page not in uri_to_template or version not in uri_to_template[page]:
    abort(404)

  return render_template(uri_to_template[page][version])