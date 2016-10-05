from flask import Flask
from flask import render_template, send_from_directory
app = Flask(__name__)

@app.route('/')
def hello_world():
  return render_template('flask_app.html')

# test route to demo bootstrap
@app.route('/carousel')
def bootstrap_test():
  return render_template('carousel_test.html')

@app.route('/bootstrap-3.3.7/<path:path>')
def bootstrap_dir(path):
  return send_from_directory('bootstrap-3.3.7', path)

@app.route('/css/<path:path>')
def css_dir(path):
  return send_from_directory('css', path)

if __name__ == '__main__':
  app.run(debug=True)
