import { useState } from 'react';
import './../HeaderNav/HeaderNav.scss';
import './../../Home/HomeBook/HomeBook.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import HomeBookRegister from '../../Home/HomeBook/HomeBookRegister/HomeBookRegister';
import apiInstance from '../../../api/apiInstance';
import { changeField, hasFailedAction, saveRegisterSuccessful } from '../../../actions/user';
import { checkInfoBeforeRegister } from '../../../functions/user';

export default function HeaderNavSuscribe() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

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

  const sendRegisterToApi = async () => {
    apiInstance
      .post('/users', {
        email: emailRegister,
        roles: ['ROLE_PLAYER'],
        password: passwordRegister,
        pseudo: nicknameRegister,
        avatar: '',
      })
      .then((response) => {
        setPasswordToastVisible(false);
        dispatch(saveRegisterSuccessful(response.data.email));
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
        dispatch(hasFailedAction('register'));
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

  const [displaySignIn, setDisplaySignIn] = useState(false);
  const [displaySignUp, setDisplaySignUp] = useState(false);

  const handleDisplaySignIn = () => {
    setDisplaySignIn(!displaySignIn);
    setDisplaySignUp(false);
  };

  const handleDisplaySignUp = () => {
    setDisplaySignIn(false);
    setDisplaySignUp(!displaySignUp);
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
      handleDisplaySignIn();
    }
  };
  return (
    <div>
      <nav className={`navbar ${showLinks ? 'showNav' : 'hideNav'}`}>
        <HomeBookRegister
          className="navbar-links"
          nickname={nicknameRegister}
          email={emailRegister}
          password={passwordRegister}
          passwordBis={passwordBisRegister}
          handleSubmit={handleSubmitRegister}
          changeField={changeField}
          isPasswordToastVisible={isPasswordToastVisible}
          setPasswordToastVisible={setPasswordToastVisible}
        />
        <span className="navbar-register" onClick={handleShowLinks}>S'inscrire</span>
        <button type="button" className="navbar-burger" onClick={handleShowLinks}>
          <span className="navbar-burgerBar" />
        </button>
      </nav>
    </div>
  );
}