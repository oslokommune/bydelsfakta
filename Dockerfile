FROM node:20-alpine@sha256:928b24aaadbd47c1a7722c563b471195ce54788bf8230ce807e1dd500aec0549

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
