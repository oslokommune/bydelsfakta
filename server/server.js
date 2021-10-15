const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const compression = require('compression');
const path = require('path');
const cheerio = require('cheerio');
const fs = require('fs');

const app = express();
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 5000;


const envs = JSON.stringify({
  NODE_ENV: process.env.NODE_ENV,
  VITE_GOOGLE_ANALYTICS_ID: process.env.VITE_GOOGLE_ANALYTICS_ID,
  VITE_PRODUCTION_DATA: process.env.VITE_PRODUCTION_DATA,
  VITE_SENTRY_DSN: process.env.VITE_SENTRY_DSN,
  VITE_INFO_SHOW: process.env.VITE_SHOW_INFO,
  VITE_INFO_MESSAGE: process.env.VITE_INFO_MESSAGE,
});

const $ = cheerio.load(fs.readFileSync(path.join(__dirname, '../docs/index.html')));
$('body').find('#bydelsfakta-globals').remove();
$('<script id="bydelsfakta-globals">' +
  'window.__GLOBAL_ENVS__ = \'' + envs + '\'' +
  '</script>')
  .prependTo('body');

fs.writeFileSync(path.join(__dirname, '../docs/index.html'), $.html(), { encoding: 'utf8', flag: 'w' });


app.use(morgan('combined'));
app.use(cors());
app.use(compression());

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
