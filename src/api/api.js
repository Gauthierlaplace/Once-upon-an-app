import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}`
});

// récupérer le token en localstorage et si il existe, le mettre sur toutes les requêtes
api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  } // else {
  //   request.headers['X-Default-Header'] = 'Header sans token';
  // }

  return request;
});

// intercepter les réponses, et si 401 rediriger sur login
// Cas sans erreur : renvoie la response / cas avec erreur : renvoie vers 401
api.interceptors.response.use((response) => response, (error) => {
  if (error && error.response && error.response.status === 401) {
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
      localStorage.removeItem('id');
      window.location = '/';
      window.alert('Votre session a expiré. Veuillez vous reconnecter.');
    }, 2000);
  }

  return Promise.reject(error);
});

export default api;
