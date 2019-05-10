'use strict';

const axios = require('axios');
const querystring = require('querystring');

const envs = {
  access_token_url: `${process.env.KEYCLOAK_URL}realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
};

const request = params => {
  return axios({
    method: 'post',
    url: envs.access_token_url,
    data: querystring.stringify(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      console.log(error);
      if (error.errno === 'ETIMEDOUT') {
        return Promise.reject(new Error('Timeout'));
      }
      return Promise.reject(error.response);
    });
};

module.exports.request = request;
