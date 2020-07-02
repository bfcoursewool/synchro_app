import os

synchro_environment = os.environ.get('SYNCHRO_ENV', '').upper()

assert synchro_environment in ['PRODUCTION', 'DEVELOPMENT', 'LOCAL']

kAPP_DEBUG = os.environ.get('APP_DEBUG', True)
kMYSQL_URL = os.environ.get('MYSQL_URL', '')
kENVIRONMENT = synchro_environment.lower()
kSHOPIFY_WEBHOOK_SECRET = os.environ.get('SHOPIFY_WEBHOOK_SECRET', '')
kKISSMETRICS_API_KEY = os.environ.get('KISSMETRICS_API_KEY', '')
kRECHARGE_CLIENT_SECRET = os.environ.get('RECHARGE_CLIENT_SECRET', '')
kSTATIC_ASSETS_PREFIX = os.environ.get('STATIC_ASSETS_PREFIX', '')


# SQLA settings
kSQLALCHEMY_DICT = {
  'sqlalchemy.url': kMYSQL_URL,
  'sqlalchemy.pool_recycle': 3600,
  'sqlalchemy.isolation_level': "READ_COMMITTED",
  'sqlalchemy.connect_args': {
    'sql_mode': 'STRICT_ALL_TABLES'
  }
}