/* eslint-disable no-console */

const express = require('express');
const path = require('path');
const axios = require('axios');
const auth = require('./auth');

const api = process.env.BYDELSFAKTA_API_URL;
const API_URL = api.slice(-1) === '/' ? api : `${api}/`;

module.exports = app => {
  app.use('/', express.static(path.join(__dirname, '../docs/')));

  app.get('/health', (req, res) => {
    res.send('UP');
  });

  app.get('/api/dataset/:dataset', auth(), (req, res) => {
    axios({
      method: 'get',
      url: `${API_URL}${req.params.dataset}?geography=${req.query.geography}`,
      headers: {
        Authorization: req.headers.authorization,
      },
    })
      .then(response => res.send(response.data[0]))
      .catch(error => {
        console.log('Error code: ', error.response.status);
        console.log('Error message: ', error.response.data);
        return res.status(error.response.status).send(error.response.data);
      });
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
