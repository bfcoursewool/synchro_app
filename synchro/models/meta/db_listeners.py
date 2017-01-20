import sqlalchemy as sa
import datetime
from synchro.models.meta import AugmentedBase

def global_insert_handler(mapper, connection, target):
  if isinstance(target, AugmentedBase):
    target.created_at = datetime.datetime.utcnow()

#gets called and run on import
def register_listeners():
  sa.event.listen(sa.orm.mapper, 'before_insert', global_insert_handler)