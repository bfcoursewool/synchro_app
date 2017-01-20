from flask import (
  Blueprint,   
  request,
  jsonify
)
import json
from synchro.models.km_ident import KMIdent

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
  