import os, time
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.txt')).read()
CHANGES = open(os.path.join(here, 'CHANGES.txt')).read()

requires = [
  'flask',
]

setup(
  name='Synchro',
  description='Synchro Nutritionals',
  long_description=README + '\n\n' + CHANGES,
  classifiers=[
    "Programming Language :: Python",
    "Framework :: Flask",
    "Topic :: Internet :: WWW/HTTP",
    "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
    ],
  version=str(int(time.time()/60)),
  author='Rob Kotz',
  author_email='rob.m.kotz@gmail.com',
  url='',
  keywords='synchro web wsgi flask',
  packages=find_packages(),
  include_package_data=True,
  zip_safe=False,
  install_requires=requires,
  entry_points= {}
)