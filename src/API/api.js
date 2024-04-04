import axios from 'axios';

const api = axios.create({
  baseURL: 'https://job-portal-backend-mern-stack.onrender.com'
});

export default api;
