
FROM node:20-alpine AS node


RUN mkdir -p /app && chown node:node /app
WORKDIR /app

USER node

COPY --chown=node:node . .

RUN \
    # Allow mounting of these files, which have no default
    touch .env ; \
    # Create directories for the volumes to inherit the correct permissions
    npm install --no-audit 
    # React client build

# Node API setup
EXPOSE 1337
CMD ["npm", "run", "develop"]
