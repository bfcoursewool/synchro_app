from flask import Blueprint, render_template, g

gold = Blueprint('gold', __name__, url_prefix='/gold')

@gold.route('/')
def gold_prime():
  g.fanstatic.needs('shopify_test')
  return render_template('gold/gold.html')