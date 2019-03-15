/* eslint-disable no-console */
'use strict';

const { getToken } = require('./api');
const { isTokenExpired, refreshToken, parseToken } = require('./accessToken');

const data = {
  client_id: process.env.KEYCLOAK_CLIENT_ID,
  client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
};

let accessToken = null;

module.exports = () => {
  return async (req, res, next) => {
    if (accessToken === null) {
      try {
        const result = await getToken(data);
        accessToken = parseToken(result.data);
      } catch (error) {
        console.log('Access token error: ', error.message);
        return Promise.reject(error.response);
      }
    } else if (isTokenExpired(accessToken)) {
      try {
        const result = await refreshToken(accessToken, data);
        accessToken = parseToken(result.data);
      } catch (error) {
        console.log('Error refreshing access token: ', error.message);
        return Promise.reject(error.response);
      }
    }

    req.headers.authorization = `Bearer ${accessToken.access_token}`;

    next();
  };
};
