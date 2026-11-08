FROM docker.n8n.io/n8nio/n8n:2.46.6

USER root
COPY derive-db-env.mjs /usr/local/bin/derive-db-env.mjs
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh \
  && chown node:node /usr/local/bin/start.sh /usr/local/bin/derive-db-env.mjs
USER node
