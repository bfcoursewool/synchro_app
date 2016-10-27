from flask import Blueprint, render_template, g

genesis = Blueprint('genesis', __name__, url_prefix='/genesis')

@genesis.route('/')
def genesis_prime():
  g.fanstatic.needs('shopify_test')
  return render_template('genesis/genesis.html')