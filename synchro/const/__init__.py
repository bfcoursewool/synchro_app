import os
import synchro.const_secrets as secrets

synchro_environment = os.environ.get('SYNCHRO_ENV', '').upper()

assert synchro_environment in ['PRODUCTION', 'DEVELOPMENT', 'LOCAL']

kIS_PROD = synchro_environment == 'PRODUCTION'
kIS_DEV = synchro_environment == 'DEVELOPMENT'
kIS_LOCAL = synchro_environment == 'LOCAL'

kPROD_ENV = 'production'
kDEV_ENV = 'development'
kLOCAL_ENV = 'local'

if kIS_PROD:
  kENVIRONMENT = kPROD_ENV
  kMYSQL_URL = secrets.kMYSQL_PROD_URL
  kREFERRING_SITE = "http://gold.besynchro.com"
elif kIS_DEV: 
  kENVIRONMENT = kDEV_ENV
  kMYSQL_URL = secrets.kMYSQL_DEV_URL
  kREFERRING_SITE = "http://dev.besynchro.com/gold/"
elif kIS_LOCAL:
  kENVIRONMENT = kLOCAL_ENV
  kMYSQL_URL = secrets.kMYSQL_LOCAL_URL
  kREFERRING_SITE = "http://localhost:5000/gold/"

kSHOPIFY_WEBHOOK_SECRET = "86a7e65e627f5bdebca044e78fda293a"
kKISSMETRICS_API_KEY = "a1d477ea6135e5cb56c1951d70f32c7e1c9253e2"

# SQLA settings
kSQLALCHEMY_DICT = {
  'sqlalchemy.url': kMYSQL_URL,
  'sqlalchemy.pool_recycle': 3600,
  'sqlalchemy.isolation_level': "READ_COMMITTED",
  'sqlalchemy.connect_args': {
    'sql_mode': 'STRICT_ALL_TABLES'
  }
}