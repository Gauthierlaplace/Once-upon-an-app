import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

// Import des actions et fonctions nécessaires
import {
  changeField,
  saveLoginSuccessful,
  saveRegisterSuccessful,
  hasFailedAction,
} from '../../../actions/user';

import { checkInfoBeforeRegister } from '../../../functions/user';

import HomeBookLogin from './HomeBookLogin/HomeBookLogin';
import HomeBookRegister from './HomeBookRegister/HomeBookRegister';

import './HomeBook.scss';

function HomeBook() {
  // A transmettre en props à la partie login
  const emailLogin = useSelector((state) => state.user.email);
  const passwordLogin = useSelector((state) => state.user.password);

  // A transmettre en props à la partie register
  const emailRegister = useSelector((state) => state.user.emailRegister);
  const passwordRegister = useSelector((state) => state.user.passwordRegister);
  const passwordBisRegister = useSelector((state) => state.user.passwordBisRegister);
  const nicknameRegister = useSelector((state) => state.user.nicknameRegister);
  const REACT_APP_API_BASE = `${process.env.REACT_APP_API_BASE}`;

  const [isPasswordToastVisible, setPasswordToastVisible] = useState(false);

  const dispatch = useDispatch();

  // Fonction pour envoyer username (l'email) et password à la soumission du formulaire
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    toast.dismiss(); // masque tous les toasts actuellement visibles
    // on valide les infos auprès du back-end
    axios
      .post(`${REACT_APP_API_BASE}login_check`, {
        // La documentation API (nos collègues back) nous précise quelles données transmettre
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
          ),
        );
        // Je les stocke aussi dans le local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('nickname', response.data.data.pseudo);
        localStorage.setItem('id', response.data.data.id);
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          hasFailedAction('login')
        );
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
      });
  };

  const sendRegisterToApi = async () => {
    axios
      .post(
        `${REACT_APP_API_BASE}users`,
        {
          email: emailRegister,
          roles: ['ROLE_PLAYER'],
          password: passwordRegister,
          pseudo: nicknameRegister,
          avatar: '',
        }
      )
      .then((response) => {
        setPasswordToastVisible(false);
        dispatch(
          saveRegisterSuccessful(response.data.email),
        );
        toast.success('Inscription validée', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          hasFailedAction('register')
        );
        toast.error('L\'inscription a échoué', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  // Fonction pour demander l'inscription d'un nouvel utilisateur
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    toast.dismiss(); // masque tous les toasts actuellement visibles
    // Avant d'envoyer à l'API, je vérifie les inputs en front
    // Pas d'email, nickname ou password invalide !
    if (checkInfoBeforeRegister(
      nicknameRegister,
      emailRegister,
      passwordRegister,
      passwordBisRegister
    ) === true) {
      sendRegisterToApi();
    }
  };

  return (
    <div className="HomeBook">
      <HomeBookLogin
        email={emailLogin}
        password={passwordLogin}
        handleSubmit={handleSubmitLogin}
        changeField={changeField}
      />
      <HomeBookRegister
        nickname={nicknameRegister}
        email={emailRegister}
        password={passwordRegister}
        passwordBis={passwordBisRegister}
        handleSubmit={handleSubmitRegister}
        changeField={changeField}
        isPasswordToastVisible={isPasswordToastVisible}
        setPasswordToastVisible={setPasswordToastVisible}
      />
    </div>
  );
}

export default HomeBook;
