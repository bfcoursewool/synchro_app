from flask import Blueprint, request, render_template
from synchro.third_party_resources import jquery, bootstrap, bootstrap_css

carousel_demo = Blueprint('carousel', __name__, url_prefix='/carousel')

@carousel_demo.route('/')
def bootstrap_test():
  bootstrap_css.need()
  bootstrap.need()
  return render_template('carousel_demo/carousel_test.html')