/* eslint-disable no-console */
import './HomeBook.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import api from '../../../api/api';
import { checkInfoBeforeRegister } from '../../../functions/user';

import HomeDescription from '../HomeDescription/HomeDescription';
import HomeBookLogin from './HomeBookLogin/HomeBookLogin';
import HomeBookRegister from './HomeBookRegister/HomeBookRegister';

// Import des actions et fonctions nécessaires
import {
  changeField,
  saveLoginSuccessful,
  saveRegisterSuccessful,
  hasFailedAction,
} from '../../../actions/user';

function HomeBook() {
  // A transmettre en props à la partie login
  const emailLogin = useSelector((state) => state.user.email);
  const passwordLogin = useSelector((state) => state.user.password);

  // A transmettre en props à la partie register
  const emailRegister = useSelector((state) => state.user.emailRegister);
  const passwordRegister = useSelector((state) => state.user.passwordRegister);
  const passwordBisRegister = useSelector(
    (state) => state.user.passwordBisRegister
  );
  const nicknameRegister = useSelector((state) => state.user.nicknameRegister);
  // const REACT_APP_API_BASE = `${process.env.REACT_APP_API_BASE}`;

  const [isPasswordToastVisible, setPasswordToastVisible] = useState(false);

  const dispatch = useDispatch();

  //  VARIABLE POUR PERMETTRE D AFFICHER OU NON LA DESCRIPTION / LA CONNEXION OU L INSCRIPTION
  // const displayLoginRegister = true; onClick ?
  // Elle reçoit en paramètre ce qu'on veut afficher
  // Elle passe ceci en true et tout le reste en false
  const [displayDescription, setDisplayDescription] = useState(true);
  const [displayRegister, setDisplayRegister] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);

  const displayDescriptionFunction = () => {
    setDisplayDescription(true);
    setDisplayRegister(false);
    setDisplayLogin(false);
  };

  const displayRegisterFunction = () => {
    setDisplayDescription(false);
    setDisplayRegister(true);
    setDisplayLogin(false);
  };

  const displayLoginFunction = () => {
    setDisplayDescription(false);
    setDisplayRegister(false);
    setDisplayLogin(true);
  };

  // Fonction pour envoyer username (l'email) et password à la soumission du formulaire
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    toast.dismiss(); // masque tous les toasts actuellement visibles
    // on valide les infos auprès du back-end
    api
      .post("/login_check", {
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
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("nickname", response.data.data.pseudo);
        localStorage.setItem("id", response.data.data.id);
      })
      .catch((error) => {
        console.error(error);
        dispatch(hasFailedAction("login"));
        toast.error("La connexion a échoué", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const sendRegisterToApi = async () => {
    api
      .post("/users", {
        email: emailRegister,
        roles: ["ROLE_PLAYER"],
        password: passwordRegister,
        pseudo: nicknameRegister,
        avatar: "",
      })
      .then((response) => {
        setPasswordToastVisible(false);
        dispatch(saveRegisterSuccessful(response.data.email));
        toast.success("Inscription validée", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch(hasFailedAction("register"));
        toast.error("L'inscription a échoué", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  // Fonction pour demander l'inscription d'un nouvel utilisateur
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    toast.dismiss(); // masque tous les toasts actuellement visibles
    // Avant d'envoyer à l'API, je vérifie les inputs en front
    // Pas d'email, nickname ou password invalide !
    if (
      checkInfoBeforeRegister(
        nicknameRegister,
        emailRegister,
        passwordRegister,
        passwordBisRegister
      ) === true
    ) {
      sendRegisterToApi();
      displayLoginFunction();
    }
  };

  return (
    <div className="HomeBook">

      {/* PARTIE GAUCHE SOMMAIRE */}
      <div className="HomeBook-GlassLeft">
        <div className="HomeBook-left">
          <h1 className="HomeBook-sommaire">Sommaire</h1>
          <div className="HomeBook-menu">
            <h3 onClick={displayDescriptionFunction}>Accueil</h3>
            <div className="HomeBook-menu-leading-dots" />
            <span>P.0</span>
          </div>
          <div className="HomeBook-menu">
            <h3 onClick={displayRegisterFunction}>Inscription</h3>
            <div className="HomeBook-menu-leading-dots" />
            <span>P.1</span>
          </div>
          <div className="HomeBook-menu">
            <h3 onClick={displayLoginFunction}>Connexion</h3>
            <div className="HomeBook-menu-leading-dots" />
            <span>P.2</span>
          </div>
          <NavLink to="/About">
            <div className="HomeBook-menu">
              <h3>About</h3>
              <div className="HomeBook-menu-leading-dots" />
              <span>P.3</span>
            </div>
          </NavLink>
          {/* <div className="HomeBook-menu">
            <h3>Copyright</h3>
            <div className="HomeBook-menu-leading-dots" />
            <span>P.4</span>
          </div>
          <div className="HomeBook-menu">
            <h3>Mentions légales</h3>
            <div className="HomeBook-menu-leading-dots" />
            <span>P.5</span>
          </div> */}
        </div>
      </div>

      {/* PARTIE DROITE DESCRIPTION */}
      <div className="HomeBook-GlassRight">
        <div className="HomeBook-right">
          {displayDescription && <HomeDescription />}

          {displayDescription && (
            <button
              type="button"
              className="special-sm-login-button"
              onClick={displayLoginFunction}
            >
              Se connecter
            </button>
          )}

          {displayRegister && (
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
          )}

          {displayLogin && (
            <HomeBookLogin
              email={emailLogin}
              password={passwordLogin}
              handleSubmit={handleSubmitLogin}
              changeField={changeField}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeBook;
