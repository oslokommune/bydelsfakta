FROM node:20-alpine@sha256:f598378b5240225e6beab68fa9f356db1fb8efe55173e6d4d8153113bb8f333c

WORKDIR /usr/src/app/
COPY ./docs ./docs
COPY ./server ./server

WORKDIR /usr/src/app/server
RUN npm install --production

WORKDIR /usr/src/app

EXPOSE 5000

RUN addgroup -S app
RUN adduser -S -D -H -G app app
RUN chown -R app:app /usr/src/app/
USER app

CMD [ "node", "server/server.js", "--loglevel", "info" ]
