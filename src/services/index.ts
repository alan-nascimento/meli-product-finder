import axios from 'axios';

export const http = axios.create({
  baseURL:
    'https://api-product-finder.herokuapp.com' || 'http://localhost:8000',
});
