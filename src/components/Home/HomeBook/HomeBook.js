import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

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

  const displayLoginRegister = true;

  return (
    <div className="HomeBook">
      {/* PARTIE GAUCHE SOMMAIRE */}
      <div className="HomeBook-GlassLeft">
        <div className="HomeBook-left">
          <h1 className="HomeBook-sommaire">Sommaire</h1>
          <NavLink className="HomeBook-menu" to="/" onClick={displayLoginRegister}><h3>Accueil</h3> . . . . . . . . . . . . . . . . . . . . . . P.0</NavLink>
          <NavLink className="HomeBook-menu" to="/register" onClick={displayLoginRegister}><h3>Inscription</h3> . . . . . . . . . . . . . . . . . . . P.1</NavLink>
          <NavLink className="HomeBook-menu" to="/login" onClick={displayLoginRegister}><h3>Connexion</h3> . . . . . . . . . .  . . . . . . . . . P.2</NavLink>
          <NavLink className="HomeBook-menu" to=""><h3>About</h3> . . . . . . . . . . . . . . . . . . . . . . . . P.3</NavLink>
          <NavLink className="HomeBook-menu" to=""><h3>Copyright</h3> . . . . . . . . . . . . . . . . . . . . P.4</NavLink>
          <NavLink className="HomeBook-menu" to=""><h3>Mentions légales</h3> . . . . . . . . . . . . . P.5</NavLink>

        </div>
      </div>
      {/* PARTIE DROITE DESCRIPTION */}
      <div className="HomeBook-GlassRight">
        <div className="HomeBook-right">
          <h1 className="HomeBook-description">Description du site</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

        </div>
      </div>
      {/* AFFICHE LE COMPONENT D INSCRIPTION SUR LA PARTIE DROITE */}
      {/* <Route
          path="/Register"
          element={<HomeBookRegister
            nickname={nicknameRegister}
            email={emailRegister}
            password={passwordRegister}
            passwordBis={passwordBisRegister}
            handleSubmit={handleSubmitRegister}
            changeField={changeField}
            isPasswordToastVisible={isPasswordToastVisible}
            setPasswordToastVisible={setPasswordToastVisible}
          />}
        /> */}
      {/* AFFICHE LE COMPONENT DE CONNEXION SUR LA PARTIE DROITE */}
      {/* <Route
          path="/login"
          element={<HomeBookLogin
            email={emailLogin}
            password={passwordLogin}
            handleSubmit={handleSubmitLogin}
            changeField={changeField}
          />}
        /> */}
    </div>
  );
}
//    AFFICHE LA CONNEXION 

// AFFICHE L INSCRIPTION 


export default HomeBook;
