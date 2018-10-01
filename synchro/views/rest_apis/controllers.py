from flask import (
  Blueprint,   
  request,
  jsonify
)
import json
from synchro.models.km_ident import KMIdent
from synchro.models.adwords_user import AdwordsUser

rest_api_handlers = Blueprint('rest_api_handlers', __name__, url_prefix='/api')

## POST route for saving KM anon identities along with cart details, 
## from the frontend, when people checkout. 
@rest_api_handlers.route('/km_idents', methods=['POST'])
def create_km_entry():
  assert request.get_json()
  payload = request.get_json()
  assert 'km_ident' in payload
  assert 'cart_string' in payload

  new_checkout_entry = KMIdent.create(
    payload['km_ident'], 
    payload['cart_string']
  )

  return jsonify(**new_checkout_entry.__json__())
  

@rest_api_handlers.route('/adwords_idents', methods=['POST'])
def create_adwords_entry():
  assert request.get_json()
  payload = request.get_json()
  assert 'gclid' in payload

  adwords_user = AdwordsUser.select_one(gclid=payload['gclid'])
  if not adwords_user:
    adwords_user = AdwordsUser.create(payload['gclid'])

  return jsonify(**adwords_user.__json__())