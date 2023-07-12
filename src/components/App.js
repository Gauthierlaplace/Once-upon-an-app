import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { saveLoginSuccessful } from '../actions/user';

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

import BackgroundContainer from './BackgroundContainer/BackgroundContainer';

function App() {
  const dispatch = useDispatch();

  // La fonction ci-dessous est déclencée par le useEffect (démarrage de l'app)
  // Elle vérifie si un token était enregistré
  // Si c'est le cas --> elle récupère les nickname, id, token stockés
  // et procède à une connexion (saveLoginSuccessful) en transmettant ces données
  // Ainsi, quand on refresh ou qu'on change de page, cela n'annule pas la connexion
  const checkUserInfoInLocalStorage = () => {
    const tokenFromLocalStorage = localStorage.getItem('token');
    if (tokenFromLocalStorage) {
      dispatch(saveLoginSuccessful(
        localStorage.getItem('nickname'),
        localStorage.getItem('id'),
        localStorage.getItem('token'),
      ));
    }
  };

  // Au 1er lancement de l'app, on check dans le localStorage
  // Pour récupérer les infos du joueur
  useEffect(() => {
    checkUserInfoInLocalStorage();
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Le BackgroundContainer correspond au fond étoilé */}
      <BackgroundContainer />
    </div>
  );
}

export default App;
