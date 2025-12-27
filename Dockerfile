
FROM node:20-bullseye

RUN mkdir -p /app && chown node:node /app
WORKDIR /app

COPY --chown=node:node . .

RUN npm install --no-audit 

USER node

EXPOSE 1337
CMD ["npm", "run", "develop"]
