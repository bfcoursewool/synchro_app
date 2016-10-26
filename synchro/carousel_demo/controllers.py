from flask import Blueprint, request, render_template, g


carousel_demo = Blueprint("auth", __name__, url_prefix="/auth")

@carousel_demo.route("/carousel")
def bootstrap_test():
  g.fanstatic.needs('shopify_test')
  return render_template("carousel_demo/carousel_test.html")