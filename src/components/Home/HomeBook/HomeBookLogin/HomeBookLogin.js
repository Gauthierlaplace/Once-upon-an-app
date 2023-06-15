import { useDispatch } from 'react-redux';

import './HomeBookLogin.scss';

// Composant et réception des props
function HomeBookLogin({
  email,
  password,
  handleSubmit,
  hasFailed,
  changeField,
  hasRegisteredSuccessfully,
}) {
  const dispatch = useDispatch();

  return (
    <div className="HomeBookLogin">

      {/* CONNEXION */}
      <div className="HomeBookLogin-glass">

        {/* Message qui s'affiche uniquement quand le user vient de s'inscrire */}
        {hasRegisteredSuccessfully && (
          <div className="HomeBookLogin-Message-RegisterOK message successMessage">
            <p>Votre inscription est validée !</p>
            <p>Vous pouvez vous connecter</p>
          </div>
        )}

        {/* Message qui s'affiche uniquement quand la connexion vient d'échouer */}
        {hasFailed && (
          <div className="HomeBookLogin-Message-LoginError message errorMessage">
            <p>La connexion a échoué</p>
            <p>Mauvais couple email / mot de passe</p>
          </div>
        )}

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
