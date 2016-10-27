from flask import Blueprint, render_template, g

salt = Blueprint('salt', __name__, url_prefix='/salt')

@salt.route('/')
def salt_prime():
  g.fanstatic.needs('shopify_test')
  return render_template('salt/salt.html')