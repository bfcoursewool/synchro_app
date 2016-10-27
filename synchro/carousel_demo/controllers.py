from flask import Blueprint, request, render_template, g

carousel_demo = Blueprint('carousel', __name__, url_prefix='/carousel')

@carousel_demo.route('/')
def bootstrap_test():
  g.fanstatic.needs('shopify_test')
  return render_template('carousel_demo/carousel_test.html')