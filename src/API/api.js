import axios from 'axios';

const api = axios.create({
  baseURL: 'https://job-portal-yy10.onrender.com'
});

export default api;
