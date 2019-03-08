const baseUrl = () => (process.env.NODE_ENV === 'production' ? '' : '');

export default baseUrl;
