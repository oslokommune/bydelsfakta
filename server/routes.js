/* eslint-disable no-console */

const express = require('express');
const path = require('path');
const axios = require('axios');
const auth = require('./auth');

const API_URL = process.env.BYDELSFAKTA_API_URL;

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
        if (error.response) {
          return Promise.reject(error.response);
        } else if (error.request) {
          return Promise.reject(error.request);
        } else {
          return Promise.reject(error.message);
        }
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
