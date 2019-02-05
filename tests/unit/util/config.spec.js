import baseUrl from '../../../src/util/config';

describe('config.js', () => {
  test('get a base url when in development mode', () => {
    process.env.NODE_ENV = 'development';
    expect(baseUrl()).toEqual('');
  });

  test('get /bydelsfakta when in production mode', () => {
    process.env.NODE_ENV = 'production';
    expect(baseUrl()).toEqual('/bydelsfakta');
  });
});
