// api.js

import axios from 'axios';

const backendBaseUrl = 'http://localhost:9090'; // Update port to 8080

const api = axios.create({
  baseURL: backendBaseUrl,
});

export default api;
