import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

import './HomeBookLogin.scss';

// Composant et réception des props
function HomeBookLogin({
  email,
  password,
  handleSubmit,
  changeField,
}) {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="HomeBookLogin-glass">

      <h1 className="HomeBook-title">Connectez-vous</h1>
      <form className="HomeBook-form" onSubmit={handleSubmit}>
        <label htmlFor="mail">E-mail :</label>
        <input
          type="text"
          name="email"
          placeholder="Entrez votre adresse mail"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'email'));
          }}
          value={email}
        />

        <label htmlFor="password">Mot de passe :</label>
        <div className="password-input">
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Entrez votre mot de passe"
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'password'));
            }}
            value={password}
          />
          <Icon
            icon={passwordVisible ? eye : eyeOff}
            className="password-input-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </div>

        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

// HomeBookLogin.propTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   changeField: PropTypes.func.isRequired,
// };

export default HomeBookLogin;
