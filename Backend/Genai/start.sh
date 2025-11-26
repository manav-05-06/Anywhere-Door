#!/usr/bin/env bash
pip install --no-cache-dir -r requirements.txt
export PYTHONPATH=$(pwd)
gunicorn app:app --bind 0.0.0.0:$PORT
