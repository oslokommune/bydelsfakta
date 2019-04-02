'use strict';

const axios = require('axios');
const querystring = require('querystring');

const envs = {
  access_token_url: `${process.env.KEYCLOAK_URL}realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
  grant_type_client: process.env.KEYCLOAK_GRANT_TYPE_CLIENT,
};

const request = async params => {
  console.log('ALL THE REQUESTS: ');
  console.log('client_id: ', process.env.KEYCLOAK_CLIENT_ID);
  console.log('client_secret: ', process.env.KEYCLOAK_CLIENT_SECRET);
  console.log('Realm: ', process.env.KEYCLOAK_REALM);
  console.log('grant type client: ', process.env.KEYCLOAK_GRANT_TYPE_CLIENT);
  console.log('grant refresh: ', process.env.KEYCLOAK_GRANT_TYPE_REFRESH);
  console.log('bydelsfakta api: ', process.env.BYDELSFAKTA_API_URL);
  console.log('PLATTFORM API: ', envs.access_token_url);
  try {
    return await axios({
      method: 'post',
      url: envs.access_token_url,
      data: querystring.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  } catch (error) {
    if (error.errno === 'ETIMEDOUT') {
      return Promise.reject(new Error('Timeout'));
    }
    return Promise.reject(error);
  }
};

const getToken = async params => {
  const options = Object.assign({}, params, {
    grant_type: envs.grant_type_client,
  });

  return request(options);
};

module.exports.request = request;
module.exports.getToken = getToken;
