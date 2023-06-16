import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

// Import des actions et fonctions nécessaires
import {
  changeField,
  saveLoginSuccessful,
  saveRegisterSuccessful,
  hasFailedAction
} from '../../../actions/user';

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
  const nicknameRegister = useSelector((state) => state.user.nicknameRegister);

  const [isPasswordToastVisible, setPasswordToastVisible] = useState(false);

  const dispatch = useDispatch();

  // Fonction pour envoyer username (l'email) et password à la soumission du formulaire
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // on valide les infos auprès du back-end
    axios
      .post('http://anthony-boutherin.vpnuser.lan:8000/api/login_check', {
        // La documentation API (nos collègues back) nous précise quelles données transmettre
        username: emailLogin,
        password: passwordLogin,
      })
      .then((response) => {
        // Quand le couple email/mdp est valide, j'envoie plusieurs infos dans le state :
        dispatch(
          saveLoginSuccessful(response.data.data.pseudo, response.data.data.id, response.data.token)
        );
        // toast.success('Connexion validée', {
        //   position: 'top-right',
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: 'colored',
        // });
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

  // Fonction pour demander l'inscription d'un nouvel utilisateur
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    axios
      .post(
        'http://anthony-boutherin.vpnuser.lan:8000/api/users',
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
        console.log(response);
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

  return (
    <div className="HomeBook">
      <HomeBookLogin
        email={emailLogin}
        password={passwordLogin}
        handleSubmit={handleSubmitLogin}
        changeField={changeField}
      />
      <HomeBookRegister
        email={emailRegister}
        password={passwordRegister}
        nickname={nicknameRegister}
        handleSubmit={handleSubmitRegister}
        changeField={changeField}
        isPasswordToastVisible={isPasswordToastVisible}
        setPasswordToastVisible={setPasswordToastVisible}
      />
    </div>
  );
}

export default HomeBook;
