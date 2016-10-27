from flask import Blueprint, render_template, g
from synchro.third_party_resources import bootstrap, bootstrap_css, jquery

salt = Blueprint('salt', __name__, url_prefix='/salt')

@salt.route('/')
def salt_prime():
  bootstrap.need()
  bootstrap_css.need()
  jquery.need()
  return render_template('salt/salt.html')