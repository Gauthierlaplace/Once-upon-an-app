import axios from 'axios';

const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}`
});

apiInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem('token');

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    } else {
      // request.headers['X-Default-Header'] = 'Header sans token';
    }

    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default apiInstance;
