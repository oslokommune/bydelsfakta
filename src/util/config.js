export const baseUrl = import.meta.NODE_ENV === 'production' ? '' : '';

export const apiUrl = import.meta.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:5000';
