const baseUrl = () => (process.env.NODE_ENV === 'production' ? '/bydelsfakta/' : '');

export default baseUrl;
