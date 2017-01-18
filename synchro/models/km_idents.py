import sqlalchemy as sa
from synchro.models import Base, db_session

## TODO -- Refactor to use an "AugmentedBase" that provides 
# functionality like toJSON, maybe a blob saver, etc., as necessary
class KMIdents(Base):
  __tablename__ = "km_idents"
  id = sa.Column(sa.Integer, pimary_key=True)
  km_ident = sa.Column(sa.String(255), nullable=False)
  cart_string = sa.Column(sa.String(255), nullable=False)
  checkout_time = sa.Column(sa.DateTime)

  def __init__(self, km_id, cart_string):
    self.km_ident = km_id
    self.cart_string = cart_string

  @classmethod
  def create(sls, km_id, cart_string):
    self.new_entry = cls(km_id, cart_string)
    db_session.add(self.new_entry)
    db_session.commit()
    return self.new_entry

  ## TODO -- to_json