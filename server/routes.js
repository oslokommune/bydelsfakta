/* eslint-disable no-console */

const express = require('express');
const path = require('path');
const axios = require('axios');

module.exports = app => {
  app.use('/', express.static(path.join(__dirname, '../docs/')));

  app.get('/health', (req, res) => {
    res.send('UP');
  });

  app.get('/api/dataset/:dataset', (req, res) => {
    axios({
      method: 'get',
      url: `https://bwv5c8snqk.execute-api.eu-west-1.amazonaws.com/dev/${req.params.dataset}?geography=${
        req.query.geography
      }`,
      headers: {
        Authorization: req.headers.authorization,
      },
    })
      .then(response => res.send(response.data[0]))
      .catch(error => res.send(error.message));
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
