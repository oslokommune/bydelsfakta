'use strict';

const express = require('express');
const morgan = require('morgan');
const cheerio = require('cheerio');
const cors = require('cors');
const routes = require('./routes');
const fs = require('fs');

const app = express();
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(cors());

const envs = JSON.stringify({
  NODE_ENV: process.env.NODE_ENV,
  VUE_APP_GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
});

console.log(envs);

const $ = cheerio.load(fs.readFileSync('./docs/index.html'));
$('body').find('#bydelsfakta-globals').remove();
$('<script id="bydelsfakta-globals">' +
  'window.__GLOBAL_ENVS__ = \'' + envs + '\'' +
  '</script>')
  .prependTo('body');

fs.writeFileSync('./docs/index.html', $.html(), { encoding: 'utf8', flag: 'w' });

app.use(function(req, res, next) {
  res.set({
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'deny',
    'Cache-Control': 'public, max-age=86400, s-maxage=86400',
  });
  res.removeHeader('X-Powered-By');
  next();
});

routes(app);
app.listen(PORT, HOST);

console.log(`Running on http://localhost:${PORT}`);
