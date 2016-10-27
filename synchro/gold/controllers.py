from flask import Blueprint, render_template, g
from synchro.third_party_resources import jquery, bootstrap, bootstrap_css

gold = Blueprint('gold', __name__, url_prefix='/gold')

@gold.route('/')
def gold_prime():
  bootstrap.need()
  bootstrap_css.need()
  jquery.need()
  return render_template('gold/gold.html')