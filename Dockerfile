FROM node:18-alpine@sha256:5069da655539e2e986ce3fd1757f24a41b846958566c89ff4a48874434d73749

WORKDIR /usr/src/app/
COPY ./docs ./docs
COPY ./server ./server

WORKDIR /usr/src/app/server
RUN npm install --production

WORKDIR /usr/src/app

EXPOSE 5000

CMD [ "node", "server/server.js", "--loglevel", "info" ]
