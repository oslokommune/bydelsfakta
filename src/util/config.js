export const baseUrl = process.env.NODE_ENV === 'production' ? '' : '';

export const apiUrl = process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:5000';
