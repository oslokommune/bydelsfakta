/* eslint-disable no-console */

const https = require('https');
const http = require('http');
const express = require('express');
const path = require('path');
const auth = require('./auth');

const api = process.env.BYDELSFAKTA_API_URL;
const API_URL = api.slice(-1) === '/' ? api : `${api}/`;
const get = API_URL[4] === 's' ? https.get : http.get;

module.exports = app => {
  app.use('/', express.static(path.join(__dirname, '../docs/')));

  app.get('/health', (req, res) => {
    res.send('UP');
  });

  app.get('/api/dataset/:dataset', auth(), (req, res) => {
    const headers = {};
    for (const k in req.headers) {
      if (['host', 'connection', 'content-length'].indexOf(k) === -1) {
        headers[k] = req.headers[k];
      }
    }

    get(
      `${API_URL}${req.params.dataset}?geography=${req.query.geography}`,
      {
        headers,
      },
      proxyRes => {
        const { statusCode, headers } = proxyRes;
        const contentType = headers['content-type'];

        if (statusCode !== 200) {
          console.error('Unexpected status:', statusCode);
        }
        if (!/^application\/json/.test(contentType)) {
          console.error('Unexpected content-type:', contentType);
        }

        res.writeHead(statusCode, headers);
        proxyRes.pipe(res);
      }
    );
  });

  app.use('*', express.static(path.join(__dirname, '../docs/')));

  const allConfiguredRoutes = () => {
    const routes = [];
    app._router.stack.forEach(layer => {
      if (layer && layer.route) {
        routes.push(layer.route.path);
      }
    });
    return { routes };
  };

  console.log(allConfiguredRoutes());
};
