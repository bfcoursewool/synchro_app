import sqlalchemy as sa
from synchro.models import Base, db_session

## TODO -- Refactor to use an "AugmentedBase" that provides 
# functionality like toJSON, maybe a blob saver, etc., as necessary
class KMIdents(Base):
  __tablename__ = "km_idents"
  id = sa.Column(sa.Integer, primary_key=True)
  km_ident = sa.Column(sa.String(255), nullable=False)
  cart_string = sa.Column(sa.String(255), nullable=False)
  created_at = sa.Column(sa.DateTime)

  def __init__(self, km_id, cart_string):
    self.km_ident = km_id
    self.cart_string = cart_string

  def __json__(self): 
    rest_dict = dict(
      id = self.id,
      km_ident = self.km_ident,
      cart_string = self.cart_string,
      created_at = self.created_at
    )
    return rest_dict

  @classmethod
  def create(cls, km_id, cart_string):
    new_entry = cls(km_id, cart_string)
    db_session.add(new_entry)
    db_session.commit()
    return new_entry

