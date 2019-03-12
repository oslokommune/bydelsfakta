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
      }
    } else if (isTokenExpired(accessToken)) {
      try {
        const result = await refreshToken(data);
        accessToken = parseToken(result.data);
      } catch (error) {
        console.log('Error refreshing access token: ', error.message);
      }
    }

    // Need to add the token inside the request
    console.log(accessToken);

    next();
  };
};
