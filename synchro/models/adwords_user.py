import sqlalchemy as sa
from synchro.models.meta import Base, db_session

class AdwordsUser(Base):
  __tablename__ = 'adwords_users'
  gclid = sa.Column(sa.String(255), nullable=False)
  shopify_id = sa.Column(sa.Integer)
  shopify_email = sa.Column(sa.String(255))
  recharge_id = sa.Column(sa.Integer)
  num_of_recharges = sa.Column(sa.Integer)

  def __init__(self, gclid):
    self.gclid = gclid

  def __json__(self):
    return {
      'id': self.id,
      'gclid': self.gclid,
      'shopify_id': self.shopify_id,
      'shopify_email': self.shopify_email,
      'recharge_id': self.recharge_id,
      'num_of_recharges': self.num_of_recharges
    }

  @classmethod
  def create(cls, gclid):
    new_entry = cls(gclid)
    db_session.add(new_entry)
    db_session.commit()
    return new_entry 
