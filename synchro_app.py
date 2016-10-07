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

if __name__ == '__main__':
  app.run(
    host="0.0.0.0",
    port=5000,
    debug=True
  )
