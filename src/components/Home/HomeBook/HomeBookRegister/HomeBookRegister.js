import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './HomeBookRegister.scss';

// Pour rappel, la fonction suivante marche pour plusieurs champs à la fois
// (voir son fonctionnement détaillé dans le dossier actions)
import {
  hasFailedAction,
  saveRegisterSuccessful
} from '../../../../actions/user';

function HomeBookRegister({
  email,
  password,
  nickname,
  changeField
}) {
  const hasFailedRegister = useSelector((state) => state.user.hasFailedRegister);

  // L'utilisateur est en train de s'inscire - on affiche les conditions de validité de mdp
  const isRegistering = (
    email.length > 0
    || password.length > 0
    || nickname.length > 0
  );

  const dispatch = useDispatch();

  // =========================================
  // TRAITEMENT DU FORMULAIRE D'INSCRIPTION
  // =========================================

  // Fonction d'inscription : envoyer en post email, password, nickname
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    // on valide les infos auprès du back-end
    axios
      .post(
        'http://anthony-boutherin.vpnuser.lan:8000/api/users',
        {
          email: email,
          roles: ['ROLE_PLAYER'],
          password: password,
          pseudo: nickname,
          avatar: '',
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          // Todo au final ici j'aurai juste besoin de saveLoginSuccessful ?
          saveRegisterSuccessful(response.data.pseudo, response.data.email),
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          hasFailedAction('register')
        );
      });
  };

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
      {(hasFailedRegister && !isRegistering) && (
        <div className="HomeBookRegister-Message-RegisterError message errorMessage">
          <p>L'inscription a échoué</p>
        </div>
      )}

      <h1>Inscrivez-vous</h1>
      <form className="HomeBook-form" onSubmit={handleSubmitRegister}>
        <label htmlFor="nickname">Pseudo</label>
        <input
          type="text"
          name="nickname"
          placeholder="Entrez votre pseudo"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'nickname'));
          }}
          value={nickname}
        />

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

        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

export default HomeBookRegister;
