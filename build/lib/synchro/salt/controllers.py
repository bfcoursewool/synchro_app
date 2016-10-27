from flask import Blueprint, render_template, g
from js.jquery import jquery

salt = Blueprint('salt', __name__, url_prefix='/salt')

@salt.route('/')
def salt_prime():
  jquery.need()
  return render_template('salt/salt.html')