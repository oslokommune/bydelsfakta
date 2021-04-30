FROM node:14.16.1-alpine

WORKDIR /usr/src/app/
COPY ./docs ./docs
COPY ./server ./server

WORKDIR /usr/src/app/server
RUN npm install --production

WORKDIR /usr/src/app

EXPOSE 5000

CMD [ "node", "server/server.js", "--loglevel", "info" ]
