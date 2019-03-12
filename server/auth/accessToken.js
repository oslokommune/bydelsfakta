'use strict';

const isDate = require('date-fns/is_date');
const addSeconds = require('date-fns/add_seconds');
const isAfter = require('date-fns/is_after');
const { request } = require('./api');

const parseToken = token => {
  const parsedTokenProps = {};

  if ('expires_in' in token) {
    if (!isDate(token.expires_in)) {
      parsedTokenProps.expires_at = addSeconds(new Date(), Number.parseInt(token.expires_in, 10));
    }
  }

  return Object.assign({}, token, parsedTokenProps);
};

const isTokenExpired = token => {
  return isAfter(new Date(), token.expires_at);
};

const refreshToken = async (token, params) => {
  const options = Object.assign({}, params, {
    grant_type: process.env.KEYCLOAK_GRANT_TYPE_REFRESH,
    refresh_token: token.refresh_token,
  });

  return await request(options);
};

module.exports.isTokenExpired = isTokenExpired;
module.exports.refreshToken = refreshToken;
module.exports.parseToken = parseToken;
