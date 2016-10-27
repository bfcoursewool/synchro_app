from flask import Blueprint, request, render_template
from synchro.third_party_resources import bootstrap, bootstrap_css, jquery

carousel_demo = Blueprint('carousel', __name__, url_prefix='/carousel')

@carousel_demo.route('/')
def bootstrap_test():
  bootstrap.need()
  bootstrap_css.need()
  jquery.need()
  return render_template('carousel_demo/carousel_test.html')