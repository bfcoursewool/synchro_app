from flask import Blueprint, render_template, g

digestcleanse = Blueprint('digestcleanse', __name__, url_prefix='/digestcleanse')

@digestcleanse.route('/')
def digestcleanse_prime():
  g.fanstatic.needs('shopify_test')
  return render_template('digestcleanse/digestcleanse.html')

@digestcleanse.route('/v1')
def digestcleanse_v1():
  g.fanstatic.needs('shopify_test')
  return render_template('digestcleanse/digestcleanse_v1.html')