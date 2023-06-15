import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './HomeBookRegister.scss';

// Pour rappel, la fonction suivante marche pour plusieurs champs à la fois
// (voir son fonctionnement détaillé dans le dossier actions)
import {
  changeLoginOrRegisterField,
  hasFailedAction,
  saveRegisterSuccessful
} from '../../../../actions/user';

function HomeBookRegister() {
  // Todo si l'on sépare en deux composants Login et Signin :
  // Gérer la transmission de ce qui suit en props (en les récupérant bien à hauteur du parent)

  // Je récupère ce dont j'ai besoin dans le state
  // Pour info, ce sont des reducers combinés (un state avec des tiroirs) => je précise state.user
  const emailRegister = useSelector((state) => state.user.emailRegister);
  const passwordRegister = useSelector((state) => state.user.passwordRegister);
  const nicknameRegister = useSelector((state) => state.user.nicknameRegister);
  const hasFailedRegister = useSelector((state) => state.user.hasFailedRegister);

  // L'utilisateur est en train de s'inscire - on affiche les conditions de validité de mdp
  const isRegistering = (
    emailRegister.length > 0
    || passwordRegister.length > 0
    || nicknameRegister.length > 0
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
          email: emailRegister,
          roles: ['ROLE_PLAYER'],
          password: passwordRegister,
          pseudo: nicknameRegister,
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
        <label htmlFor="nicknameRegister">Pseudo</label>
        <input
          type="text"
          name="nicknameRegister"
          placeholder="Entrez votre pseudo"
          onChange={(event) => {
            dispatch(changeLoginOrRegisterField(event.target.value, 'nicknameRegister'));
          }}
          value={nicknameRegister}
        />

        <label htmlFor="mail">E-mail :</label>
        <input
          type="text"
          name="emailRegister"
          placeholder="Entrez votre adresse mail"
          onChange={(event) => {
            dispatch(changeLoginOrRegisterField(event.target.value, 'emailRegister'));
          }}
          value={emailRegister}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="passwordRegister"
          placeholder="Entrez votre mot de passe"
          onChange={(event) => {
            dispatch(changeLoginOrRegisterField(event.target.value, 'passwordRegister'));
          }}
          value={passwordRegister}
        />

        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

export default HomeBookRegister;
