from flask import (
  Blueprint,   
  request,
  jsonify
)
import json
from synchro.models.km_idents import KMIdents

rest_api_handlers = Blueprint('rest_api_handlers', __name__, url_prefix='/api')

## POST route for saving KM anon identities along with cart details, 
## from the frontend, when people checkout. 
@rest_api_handlers.route('/km_idents', methods=['POST'])
def create_km_entry():
  payload = json.loads(request.get_data())
  assert 'km_ident' in payload
  assert 'cart_string' in payload

  new_checkout_entry = KMIdents.create(
    payload['km_ident'], 
    payload['cart_string']
  )

  # TODO -- return new_checkout_entry.to_json
  return jsonify(**{'test': 'success'})
  