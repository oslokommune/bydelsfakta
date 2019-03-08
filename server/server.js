'use strict';

const express = require('express');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

const envs = JSON.stringify({
  NODE_ENV: process.env.NODE_ENV,
  KEYCLOAK_URL: process.env.KEYCLOAK_URL,
  KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
  KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
});

const $ = cheerio.load(fs.readFileSync('./docs/index.html'));
$('body')
  .find('#bydelsfakta-globals')
  .remove();
$('<script id="bydelsfakta-globals">' + "window.__GLOBAL_ENVS__ = '" + envs + "'" + '</script>').prependTo('body');

fs.writeFileSync('./docs/index.html', $.html(), { encoding: 'utf8', flag: 'w' });

app.use(morgan('combined'));
app.use(history({ verbose: true }));
app.use(express.static('./docs'));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
  res.set({
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'deny',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  });
  res.removeHeader('X-Powered-By');
  next();
});
app.get('/health', (req, res) => res.send('UP'));

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
