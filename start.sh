#!/bin/sh
set -eu

if [ -n "${DATABASE_URL:-}" ]; then
  node /usr/local/bin/derive-db-env.mjs > /tmp/db.env
  set -a
  . /tmp/db.env
  set +a
fi

exec n8n start
