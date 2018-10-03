import hmac
import hashlib
import base64
import json
from flask import (
  Blueprint, 
  request,
  render_template
)
from urlparse import urlparse, parse_qs
from synchro.const import kSHOPIFY_WEBHOOK_SECRET
from synchro.const_secrets import kRECHARGE_CLIENT_SECRET
from synchro.models.adwords_user import AdwordsUser

webhook_handlers = Blueprint('webhook_handlers', __name__, url_prefix='/hooks')

## Recharge API token -- 45094ac4ae34333ac4f603834b34cc6ca6602e6a685025c45615aea3
## Recharge webhook curl: 
'''

curl -i -H 'X-Recharge-Access-Token: 45094ac4ae34333ac4f603834b34cc6ca6602e6a685025c45615aea3' \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST https://api.rechargeapps.com/webhooks \
--data '{"address":"https://gold.besynchro.com/hooks/recharge_order", "topic":"charge/paid"}'

'''

# Webhook received from Recharge when a subsriptin order happens
@webhook_handlers.route('/recharge_order', methods=['POST'])
def recharge_order():
  json_data = request.get_data()
  data = json.loads(json_data)
  header_hmac = request.headers.get('X-Recharge-Hmac-Sha256')
  assert header_hmac is not None
  assert validate_recharge_webhook(json_data, header_hmac)

  adwords_user = AdwordsUser.select_one(shopify_email=data['email'])
  if adwords_user:
    adwords_user.set_recharge_id(data['customer_id'])
  return ('', 200)

# Webhook recieved from Shopify on "checkout create"
@webhook_handlers.route('/checkout_create', methods=['POST'])
def checkout_create(): 
  json_data = request.get_data()
  data = json.loads(json_data)
  header_hmac = request.headers.get('X-Shopify-Hmac-Sha256')
  assert header_hmac is not None
  assert validate_webhook(json_data, header_hmac)

  referring_site = data.get('referring_site', None)
  parsed_url = urlparse(referring_site)
  query_params = parse_qs(parsed_url.query)
  if 'gold.besynchro.com' in parsed_url.netloc or \
      'genesis.besynchro.com' in parsed_url.netloc and \
      'gclid' in query_params:
    adwords_user = AdwordsUser.select_one(gclid=query_params['gclid'])
    if adwords_user:
      adwords_user.set_shopify_info(data['id'], data['email'])
  return ('', 200)

def validate_webhook(json_data, header_hmac):
  dig = hmac.new(kSHOPIFY_WEBHOOK_SECRET, msg=json_data, digestmod=hashlib.sha256).digest()
  calculated_hmac = base64.b64encode(dig)
  if calculated_hmac == header_hmac:
    return True 
  return False

def validate_recharge_webhook(req_body, webhook_hmac):
  calculated_hmac = hashlib.sha256()
  calculated_hmac.update(kRECHARGE_CLIENT_SECRET.encode("UTF-8")) 
  calculated_hmac.update(req_body.encode("UTF-8"))
  calculated_hmac = calculated_hmac.hexdigest()

  if calculated_hmac == webhook_hmac:
    return True
  else:
    return False