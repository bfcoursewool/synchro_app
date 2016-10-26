from flask import Flask
from flask import g
from flask import render_template, send_from_directory
from flask_fanstatic import Fanstatic

app = Flask(__name__)
fanstatic = Fanstatic(app)

fanstatic.resource('js/shopify_test.js', name='shopify_test')

@app.route('/')
def hello_world():
  return render_template('flask_app.html')

# test route to demo bootstrap
@app.route('/carousel')
def bootstrap_test():
  g.fanstatic.needs('shopify_test')
  return render_template('carousel_test.html')

if __name__ == '__main__':
  app.run(
    host="0.0.0.0",
    port=5000,
    debug=True
  )
