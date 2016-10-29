from flask import Blueprint, render_template, g
from synchro.third_party_resources import bootstrap, bootstrap_css, jquery

genesis = Blueprint('genesis', __name__, url_prefix='/genesis')

@genesis.route('/')
def genesis_prime():
  bootstrap.need()
  bootstrap_css.need()
  return render_template('genesis/genesis.html')