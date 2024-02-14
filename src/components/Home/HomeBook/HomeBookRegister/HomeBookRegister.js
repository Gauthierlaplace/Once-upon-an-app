import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

import './../HomeBook.scss';

function HomeBookRegister({
  className,
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
      toast.info('Le mot de passe doit contenir minimum 4 caractères, dont 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial', {
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
    <div className={className}>
      <span>Nous ne serons pas trop intrusifs, promis !</span>
      <form
        className="HomeBook-form"
        onSubmit={handleSubmit}
      >
        <label className="HomeBook-form-label" htmlFor="nickname">Pseudo</label>
        <input
          className="HomeBook-form-input"
          type="text"
          name="nickname"
          placeholder="Entrez votre pseudo"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'nicknameRegister'));
          }}
          value={nickname}
        />

        <label className="HomeBook-form-label" htmlFor="mail">E-mail :</label>
        <input
          className="HomeBook-form-input"
          type="text"
          name="email"
          placeholder="Entrez votre adresse mail"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'emailRegister'));
          }}
          value={email}
        />

        <label className="HomeBook-form-label" htmlFor="password">Mot de passe :</label>
        <div className="password-input">
          <input
            className="HomeBook-form-input"
            type={passwordVisible ? 'text' : 'password'}
            name="passwordRegister"
            placeholder="Entrez votre mot de passe"
            onFocus={infoPasswordToast}
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

        <label className="HomeBook-form-label" htmlFor="passwordBis">Confirmation :</label>
        <div className="passwordBis-input">
          <input
            className="HomeBook-form-input"
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

        <button
          className="HomeBook-form-button"
          type="submit"
        >
          Inscription
        </button>
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
