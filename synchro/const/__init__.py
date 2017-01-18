import os
from synchro import MAIN_DIRECTORY
import synchro.const_secrets as secrets

synchro_environment = os.environ.get('SYNCHRO_ENV', '').upper()

assert synchro_environment in ['PRODUCTION', 'DEVELOPMENT']

kIS_PROD = synchro_environment == 'PRODUCTION'
kIS_LOCAL = os.environ.get('SYNCHRO_LOCAL','').upper() == "LOCAL"

kPROD_ENV = 'production'
kDEV_ENV = 'development'
kLOCAL_ENV = 'local'

if kIS_PROD:
  kENVIRONMENT = kPROD_ENV
  kMYSQL_URL = secrets.kMYSQL_PROD_URL
else: 
  kENVIRONMENT = kDEV_ENV
  kMYSQL_URL = secrets.kMYSQL_DEV_URL

if kIS_LOCAL and not kIS_PROD:
  kENVIRONMENT = kLOCAL_ENV
  kMYSQL_URL = secrets.kMYSQL_LOCAL_URL

# SQLA settings
kSQLALCHEMY_DICT = {
  'sqlalchemy.url': kMYSQL_URL,
  'sqlalchemy.pool_recycle': 3600,
  'sqlalchemy.isolation_level': "READ_COMMITTED",
  'sqlalchemy.connect_args': {
    'sql_mode': 'STRICT_ALL_TABLES'
  }
}