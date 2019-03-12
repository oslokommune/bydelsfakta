const express = require('express');
const path = require('path');

module.exports = app => {
  app.use('/', express.static(path.join(__dirname, '../docs/')));

  app.get('/health', (req, res) => {
    res.send('UP');
  });

  app.get('/api/test', (req, res) => {
    res.send('TEST');
  });

  app.get('/api/connect/keycloak', (req, res) => {
    res.send('np');
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
