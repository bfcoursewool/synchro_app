from flask import Blueprint, render_template, g
from synchro.third_party_resources import bootstrap, bootstrap_css, jquery

digestcleanse = Blueprint('digestcleanse', __name__, url_prefix='/digestcleanse')

@digestcleanse.route('/')
def digestcleanse_prime():
  bootstrap.need()
  bootstrap_css.need()
  return render_template('digestcleanse/digestcleanse.html')

@digestcleanse.route('/v1')
def digestcleanse_v1():
  bootstrap.need()
  bootstrap_css.need()
  return render_template('digestcleanse/digestcleanse_v1.html')