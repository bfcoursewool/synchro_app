#!/bin/bash
source ~/venv/bin/activate
alembic upgrade head
python3 ~/app/run.py