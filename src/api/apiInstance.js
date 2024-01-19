import axios from 'axios';

const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}`
});

// Ajouter un intercepteur avant l'envoi de la requête
apiInstance.interceptors.request.use((request) => {
  // Exclure les informations d'authentification pour les requêtes preflight CORS
  if (request.method === 'options') {
    request.headers = {
      ...request.headers,
      'X-Skip-Auth': 'true', // Ajoutez un en-tête personnalisé pour indiquer au serveur de sauter l'authentification
    };
  }

  return request;
}, (error) => {
  Promise.reject(error);
});

// apiInstance.interceptors.request.use(
//   (request) => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       request.headers.Authorization = `Bearer ${token}`;
//     } else {
//       // request.headers['X-Default-Header'] = 'Header sans token';
//     }

//     return request;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default apiInstance;
