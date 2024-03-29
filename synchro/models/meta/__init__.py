from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from synchro import const

engine = create_engine(const.kMYSQL_URL, convert_unicode=True)
db_session = scoped_session(
  sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
  )
)

from .augmented_base import AugmentedBase

Base = declarative_base(cls=AugmentedBase)
Base.query = db_session.query_property()

from .db_listeners import register_listeners
register_listeners()