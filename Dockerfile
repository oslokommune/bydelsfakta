FROM node:11.10.0-alpine

WORKDIR /usr/src/app/
COPY ./docs ./docs
COPY ./server .

WORKDIR /usr/src/app
RUN npm install --production

EXPOSE 5000

CMD [ "node", "server.js", "--loglevel", "info" ]
