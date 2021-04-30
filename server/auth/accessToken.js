const isDate = require('date-fns/isDate');
const addSeconds = require('date-fns/addSeconds');
const subSeconds = require('date-fns/subSeconds');
const isAfter = require('date-fns/isAfter');

const addExpirationInformation = (token) => {
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

  return { ...token, ...parsedTokenProps };
};

const shouldRefreshToken = (expiresAt) => {
  return isAfter(new Date(), subSeconds(expiresAt, 10));
};

module.exports.shouldRefreshToken = shouldRefreshToken;
module.exports.addExpirationInformation = addExpirationInformation;
