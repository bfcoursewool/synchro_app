#!/bin/bash
source ~/venv/bin/activate
alembic -c production.ini upgrade head
#exec gunicorn --bind 0.0.0.0:5000 --access-logfile - --error-logfile - anatha:app
python ~/app/run.py
