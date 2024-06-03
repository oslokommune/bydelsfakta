FROM node:20-alpine@sha256:928b24aaadbd47c1a7722c563b471195ce54788bf8230ce807e1dd500aec0549

WORKDIR /usr/src/app/
COPY ./docs ./docs
COPY ./server ./server

WORKDIR /usr/src/app/server
RUN npm install --production

WORKDIR /usr/src/app

EXPOSE 5000

CMD [ "node", "server/server.js", "--loglevel", "info" ]
