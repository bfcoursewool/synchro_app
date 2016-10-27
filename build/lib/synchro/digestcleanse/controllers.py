from flask import Blueprint, render_template, g
from js.jquery import jquery

digestcleanse = Blueprint('digestcleanse', __name__, url_prefix='/digestcleanse')

@digestcleanse.route('/')
def digestcleanse_prime():
  jquery.need()
  return render_template('digestcleanse/digestcleanse.html')

@digestcleanse.route('/v1')
def digestcleanse_v1():
  jquery.need()
  return render_template('digestcleanse/digestcleanse_v1.html')