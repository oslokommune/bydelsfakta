'use strict';

const isDate = require('date-fns/isDate');
const addSeconds = require('date-fns/addSeconds');
const isAfter = require('date-fns/isAfter');

const parseToken = token => {
  const parsedTokenProps = {};

  if ('expires_in' in token) {
    if (!isDate(token.expires_in)) {
      parsedTokenProps.expires_at = addSeconds(new Date(), Number.parseInt(token.expires_in, 10));
    }
  }

  if ('refresh_expires_in' in token) {
    if (!isDate(token.refresh_expires_in)) {
      parsedTokenProps.refresh_expires_at = addSeconds(new Date(), Number.parseInt(token.refresh_expires_in, 10));
    }
  }

  return Object.assign({}, token, parsedTokenProps);
};

const isTokenExpired = expired => {
  return isAfter(new Date(), expired);
};

module.exports.isTokenExpired = isTokenExpired;
module.exports.parseToken = parseToken;
