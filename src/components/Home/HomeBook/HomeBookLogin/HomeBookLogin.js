import { useDispatch } from 'react-redux';

import './HomeBookLogin.scss';

// Composant et réception des props
function HomeBookLogin({
  email,
  password,
  handleSubmit,
  changeField,
}) {
  const dispatch = useDispatch();

  return (
    <div className="HomeBookLogin">
      <div className="HomeBookLogin-glass">

        <h1>Connectez-vous</h1>
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
          <input
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'password'));
            }}
            value={password}
          />

          <button type="submit">Connexion</button>
        </form>
      </div>
    </div>
  );
}

export default HomeBookLogin;
