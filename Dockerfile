
FROM node:20-alpine AS node

RUN mkdir -p /app && chown node:node /app
WORKDIR /app

COPY --chown=node:node . .

RUN \
    touch .env ; \
    apk add --no-cache vips-dev fftw-dev build-base \
    --repository=https://dl-cdn.alpinelinux.org/alpine/edge/testing && \
    npm install --include=optional sharp && \
    npm install --no-audit 

USER node

EXPOSE 1337
CMD ["npm", "run", "develop"]
