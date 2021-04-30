/* eslint-disable no-console */
'use strict';

const { request } = require('./api');
const { shouldRefreshToken, parseToken } = require('./accessToken');

const data = {
  client_id: process.env.KEYCLOAK_CLIENT_ID,
  client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
};

let accessToken = null;

const logErrors = (error, refresh) => {
  if (refresh) {
    console.error('Status: ', error.status);
    console.error('StatusText: ', error.statusText);
    console.error('Error refreshing access token: ', error.data);
  } else {
    console.error('Status: ', error.status);
    console.error('StatusText: ', error.statusText);
    console.error('Error getting access token: ', error.data);
  }
};

module.exports = () => {
  return (req, res, next) => {
    if (accessToken === null || shouldRefreshToken(accessToken.refresh_expires_at)) {
      const params = { ...data, grant_type: process.env.KEYCLOAK_GRANT_TYPE_CLIENT };

      request(params)
        .then((response) => {
          accessToken = parseToken(response);
          req.headers.authorization = `Bearer ${accessToken.access_token}`;
          next();
        })
        .catch((error) => {
          logErrors(error);
          return res.status(error.status);
        });
    } else if (shouldRefreshToken(accessToken.expires_at)) {
      const params = {
        ...data,
        grant_type: process.env.KEYCLOAK_GRANT_TYPE_REFRESH,
        refresh_token: accessToken.refresh_token,
      };

      request(params)
        .then((response) => {
          accessToken = parseToken(response);
          req.headers.authorization = `Bearer ${accessToken.access_token}`;
          next();
        })
        .catch((error) => {
          logErrors(error, true);
          return res.status(error.status);
        });
    } else {
      req.headers.authorization = `Bearer ${accessToken.access_token}`;
      next();
    }
  };
};
