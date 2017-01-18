from flask import (
  Blueprint, 
  request,
  render_template
)

webhook_handlers = Blueprint('webhook_handlers', __name__, url_prefix='/hooks')

# Webhook recieved from Shopify on "checkout create"
@webhook_handlers.route('/checkout_create', methods=['POST'])
def checkout_create(): 
  print request.get_data()
  print request.json
  return ('', 200)