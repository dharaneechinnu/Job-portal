import axios from 'axios';

const api = axios.create({
  baseURL: 'https://job-portal-backend-h07e.onrender.com'
});

export default api;
