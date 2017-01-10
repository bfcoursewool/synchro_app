import os
from synchro import MAIN_DIRECTORY

synchro_environment = os.environ.get('SYNCHRO_ENV', '').upper()

assert synchro_environment in ['PRODUCTION', 'DEVELOPMENT']

kIS_PROD = synchro_environment == 'PRODUCTION'
kIS_LOCAL = os.environ.get('SYNCHRO_LOCAL','').upper() == "LOCAL"

kPROD_ENV = 'production'
kDEV_ENV = 'development'
kLOCAL_ENV = 'local'

if kIS_PROD:
  kENVIRONMENT = kPROD_ENV
else: 
  kENVIRONMENT = kDEV_ENV

if kIS_LOCAL and not kIS_PROD:
  kENVIRONMENT = kLOCAL_ENV