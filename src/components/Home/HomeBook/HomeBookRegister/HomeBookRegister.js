import { useDispatch } from 'react-redux';

import './HomeBookRegister.scss';

function HomeBookRegister({
  email,
  password,
  nickname,
  handleSubmit,
  changeField,
  hasFailed,
}) {
  // L'utilisateur est en train de s'inscire - on affiche les conditions de validité de mdp
  const isRegistering = (
    email.length > 0
    || password.length > 0
    || nickname.length > 0
  );

  const dispatch = useDispatch();

  return (
    <div className="HomeBookRegister-glass">

      {/* Message qui s'affiche uniquement quand le user commence à taper */}
      {isRegistering && (
        <div className="HomeBookRegister-Message-password message infoMessage">
          <p>
            Le mot-de-passe doit contenir au moins 4 caractères,
            dont 1 majuscule, 1 minuscule et 1 caractère spécial.
          </p>
        </div>
      )}

      {/* Message qui s'affiche uniquement quand l'inscription vient d'échouer */}
      {(hasFailed && !isRegistering) && (
        <div className="HomeBookRegister-Message-RegisterError message errorMessage">
          <p>L'inscription a échoué</p>
        </div>
      )}

      <h1>Inscrivez-vous</h1>
      <form className="HomeBook-form" onSubmit={handleSubmit}>
        <label htmlFor="nickname">Pseudo</label>
        <input
          type="text"
          name="nickname"
          placeholder="Entrez votre pseudo"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'nicknameRegister'));
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
          }}
          value={email}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'passwordRegister'));
          }}
          value={password}
        />

        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

export default HomeBookRegister;
