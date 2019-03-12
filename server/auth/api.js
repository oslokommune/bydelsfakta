'use strict';

const axios = require('axios');
const querystring = require('querystring');

const request = async params => {
  return await axios({
    method: 'post',
    url: process.env.KEYCLOAK_URL_TOKEN,
    data: querystring.stringify(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

const getToken = async params => {
  const options = Object.assign({}, params, {
    grant_type: process.env.KEYCLOAK_GRANT_TYPE_CLIENT,
  });

  return request(options);
};

module.exports.request = request;
module.exports.getToken = getToken;
