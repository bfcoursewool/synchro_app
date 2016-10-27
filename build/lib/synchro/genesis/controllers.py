from flask import Blueprint, render_template, g
from js.jquery import jquery

genesis = Blueprint('genesis', __name__, url_prefix='/genesis')

@genesis.route('/')
def genesis_prime():
  jquery.need()
  return render_template('genesis/genesis.html')