'use strict';

const express = require('express');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';


app.use(morgan('combined'));
app.use(history({ verbose: true }));
app.use(express.static('docs'));
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
