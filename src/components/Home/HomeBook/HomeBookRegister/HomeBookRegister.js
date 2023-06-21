import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

import PropTypes from 'prop-types';

import './HomeBookRegister.scss';

function HomeBookRegister({
  nickname,
  email,
  password,
  passwordBis,
  handleSubmit,
  changeField,
  isPasswordToastVisible,
  setPasswordToastVisible,
}) {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordBisVisible, setPasswordBisVisible] = useState(false);

  // Je conditionne l'affichage du toast "password info"
  // Afin d'éviter que 10 toasts ne se lancent en meme temps
  const infoPasswordToast = () => {
    if (!isPasswordToastVisible) {
      toast.info('Le mot-de-passe doit contenir minimum 4 caractères, dont 1 minuscule, 1 majuscule et 1 caractère spécial', {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setPasswordToastVisible(true);
    }
  };

  return (
    <div className="HomeBookRegister-glass">
      <h1 className="HomeBook-title">Inscrivez-vous</h1>
      <form
        className="HomeBook-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="nickname">Pseudo</label>
        <input
          type="text"
          name="nickname"
          placeholder="Entrez votre pseudo"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'nicknameRegister'));
            infoPasswordToast();
          }}
          value={nickname}
        />

        <label htmlFor="mail">E-mail :</label>
        <input
          type="text"
          name="email"
          placeholder="Entrez votre adresse mail"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'emailRegister'));
            infoPasswordToast();
          }}
          value={email}
        />

        <label htmlFor="password">Mot de passe :</label>
        <div className="password-input">
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="passwordRegister"
            placeholder="Entrez votre mot de passe"
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'passwordRegister'));
            }}
            value={password}
          />
          <Icon
            icon={passwordVisible ? eye : eyeOff}
            className="password-input-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </div>

        <label htmlFor="passwordBis">Confirmation :</label>
        <div className="passwordBis-input">
          <input
            type={passwordBisVisible ? 'text' : 'password'}
            name="passwordBisRegister"
            placeholder="Confirmez le mot de passe"
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'passwordBisRegister'));
            }}
            value={passwordBis}
          />
          <Icon
            icon={passwordBisVisible ? eye : eyeOff}
            className="password-input-icon"
            onClick={() => setPasswordBisVisible(!passwordBisVisible)}
          />
        </div>

        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

// HomeBookRegister.propTypes = {
//   nickname: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   passwordBis: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   changeField: PropTypes.func.isRequired,
//   isPasswordToastVisible: PropTypes.bool.isRequired,
//   setPasswordToastVisible: PropTypes.func.isRequired,
// };

export default HomeBookRegister;
