FROM node:16-alpine@sha256:fcb03294d3c0695cf9762dec94c0366f08e7a8c6a3c1e062d38c80ac30684d8a

WORKDIR /usr/src/app/
COPY ./docs ./docs
COPY ./server ./server

WORKDIR /usr/src/app/server
RUN npm install --production

WORKDIR /usr/src/app

EXPOSE 5000

CMD [ "node", "server/server.js", "--loglevel", "info" ]
