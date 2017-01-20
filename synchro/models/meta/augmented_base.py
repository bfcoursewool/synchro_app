import sqlalchemy as sa 
from synchro.models.meta import db_session


class AugmentedBase(object):
  id = sa.Column(sa.Integer, primary_key=True)
  created_at = sa.Column(sa.DateTime)

  @classmethod
  def query(cls):
    return db_session.query(cls)

  def as_dict(self):
    # each column has its name as key, value as value
    columns_as_dict = {}
    for column in self.__table__.columns:
      columns_as_dict[column.name] = getattr(self, column.name)
    return columns_as_dict

  @classmethod
  def find(cls, primary_key_id, for_update=False):
    assert primary_key_id is not None
    query = db_session.query(cls).filter(cls.id==primary_key_id)
    if for_update:
      query = query.with_lockmode('update')
    return query.first()

  @classmethod
  def find_multiple(cls, primary_key_ids):
    return db_session.query(cls).filter(sa.and_(cls.id.in_(list(primary_key_ids)),cls.active==1)).all()

  @classmethod
  def select(cls, for_update=False, **kwargs):
    query = db_session.query(cls)
    for kwarg, value in kwargs.iteritems():
      query = query.filter(getattr(cls,kwarg)==value)
    if for_update:
      query = query.with_lockmode('update')
    return query.order_by(cls.id.desc()).all()

  @classmethod
  def count(cls, **kwargs):
    query = db_session.query(cls)
    for kwarg, value in kwargs.iteritems():
      query = query.filter(getattr(cls,kwarg)==value)
    return query.count()

  @classmethod
  def select_one(cls, for_update=False, **kwargs):
    query = db_session.query(cls)
    for kwarg, value in kwargs.iteritems():
      query = query.filter(getattr(cls,kwarg)==value)
    if for_update:
      query = query.with_lockmode('update')
    return query.first()

  def __repr__(self):
    return "[%s(%s)]" % (self.__class__.__name__, ', '.join('%s=%s' % (k, self.__dict__[k]) for k in sorted(self.__dict__) if '_sa_' != k[:4]))                                      
