import './HomeBook.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import HomeDescription from '../HomeDescription/HomeDescription';
import HomeBookLogin from './HomeBookLogin/HomeBookLogin';

// Import des actions et fonctions nécessaires
import {
  changeField,
  saveLoginSuccessful,
  hasFailedAction,
} from '../../../actions/user';
import apiInstance from '../../../api/apiInstance';
import HomeBookPlay from './HomeBookPlay/HomeBookPlay';

function HomeBook() {
  // A transmettre en props à la partie login
  const emailLogin = useSelector((state) => state.user.email);
  const passwordLogin = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  const logged = useSelector((state) => state.user.logged);

  // Fonction pour envoyer username (l'email) et password à la soumission du formulaire
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    toast.dismiss(); // masque tous les toasts actuellement visibles
    // on valide les infos auprès du back-end
    apiInstance
      .post('/login_check', {
        username: emailLogin,
        password: passwordLogin,
      })
      .then((response) => {
        // Quand le couple email/mdp est valide, j'envoie plusieurs infos dans le state :
        dispatch(
          saveLoginSuccessful(
            response.data.data.pseudo,
            response.data.data.id,
            response.data.token
          )
        );
        // Je les stocke aussi dans le local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('nickname', response.data.data.pseudo);
        localStorage.setItem('id', response.data.data.id);
      })
      .catch((error) => {
        console.error(error);
        dispatch(hasFailedAction('login'));
        toast.error('La connexion a échoué', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        if (error.response) {
          // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
          console.error('Erreur de réponse du serveur:', error.response.data);
        } else if (error.request) {
          // La requête a été effectuée, mais aucune réponse n'a été reçue
          console.error('Aucune réponse reçue du serveur.');
        } else {
          // Une erreur s'est produite lors de la configuration de la req, pendant la transmission
          console.error('Erreur lors de la configuration de la requête ou de la transmission:', error.message);
        }
      });
  };

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="HomeBook">
      <div className="HomeBook-header-container">
        {/* {!logged && (<h4 className="HomeBook-header-container-CTA" onClick={handleShowLinks}>Commencer l'aventure</h4>)} */}
      </div>
      <div>
        <motion.h1
          className="HomeBook-main-title"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 3
          }}
        >
          Once upon an app
        </motion.h1>
        <motion.h2
          className="HomeBook-subtitle"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 5,
            delay: 1
          }}
        >
          "Un site dont VOUS êtes le... protagoniste"</motion.h2>
      </div>
      <div className="HomeBook-top">
        <HomeDescription />
        {!logged && (
          <HomeBookLogin
            className="HomeBook-Login"
            email={emailLogin}
            password={passwordLogin}
            handleSubmit={handleSubmitLogin}
            changeField={changeField}
          />
        )}
        {logged && (
          <HomeBookPlay />
        )}
      </div>
    </div>
  );
}

export default HomeBook;
