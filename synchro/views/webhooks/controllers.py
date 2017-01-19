import hmac
import hashlib
import base64
import json
from flask import (
  Blueprint, 
  request,
  render_template
)
from synchro.const import (
  kSHOPIFY_WEBHOOK_SECRET,
  kREFERRING_SITE
)
from synchro.models.km_ident import KMIdent

webhook_handlers = Blueprint('webhook_handlers', __name__, url_prefix='/hooks')

# Webhook recieved from Shopify on "checkout create"
@webhook_handlers.route('/checkout_create', methods=['POST'])
def checkout_create(): 
  json_data = request.get_data()
  data = json.loads(json_data)
  header_hmac = request.headers.get('X-Shopify-Hmac-Sha256')
  assert validate_webhook(json_data, header_hmac)

  print "Const: %s" % kREFERRING_SITE
  print "data: %s" % data['referring_site']
  if data['referring_site'] == kREFERRING_SITE: 
    checkout = KMIdent.select_one(
      cart_string=data['landing_site'],
      aliased=0
    )
    print checkout
    


  return ('', 200)

def validate_webhook(json_data, header_hmac):
  dig = hmac.new(kSHOPIFY_WEBHOOK_SECRET, msg=json_data, digestmod=hashlib.sha256).digest()
  calculated_hmac = base64.b64encode(dig)
  if calculated_hmac == header_hmac:
    return True 
  return False