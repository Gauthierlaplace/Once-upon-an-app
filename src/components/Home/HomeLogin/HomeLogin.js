import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './HomeLogin.scss';

// Pour rappel, la fonction suivante marche pour plusieurs champs à la fois
// (voir son fonctionnement détaillé dans le dossier actions)
import {
  changeLoginOrRegisterField,
  hasFailedAction,
  saveLoginSuccessful,
  saveRegisterSuccessful
} from '../../../actions/user';

function HomeLogin() {
  // Todo si l'on sépare en deux composants Login et Signin :
  // Gérer la transmission de ce qui suit en props (en les récupérant bien à hauteur du parent)

  // Je récupère ce dont j'ai besoin dans le state
  // Pour info, ce sont des reducers combinés (un state avec des tiroirs) => je précise state.user
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const emailRegister = useSelector((state) => state.user.emailRegister);
  const passwordRegister = useSelector((state) => state.user.passwordRegister);
  const nicknameRegister = useSelector((state) => state.user.nicknameRegister);
  const hasRegisteredSuccessfully = useSelector((state) => state.user.hasRegisteredSuccessfully);
  const hasFailedLogin = useSelector((state) => state.user.hasFailedLogin);
  const hasFailedRegister = useSelector((state) => state.user.hasFailedRegister);

  // L'utilisateur est en train de s'inscire - on affiche les conditions de validité de mdp
  const isRegistering = (
    emailRegister.length > 0
    || passwordRegister.length > 0
    || nicknameRegister.length > 0
  );

  const dispatch = useDispatch();

  // =========================================
  // TRAITEMENT DU FORMULAIRE DE CONNEXION
  // =========================================

  // Fonction pour envoyer username (l'email) et password à la soumission du formulaire
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // on valide les infos auprès du back-end
    axios
      .post('http://anthony-boutherin.vpnuser.lan:8000/api/login_check', {
        // La documentation API (nos collègues back) nous précise quelles données transmettre
        username: email,
        password: password,
      })
      .then((response) => {
        // Quand le couple email/mdp est valide, j'envoie plusieurs infos dans le state :
        dispatch(
          saveLoginSuccessful(response.data.data.pseudo, response.data.data.id, response.data.token)
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          hasFailedAction('login')
        );
      });
  };

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
    <div className="HomeLogin">

      {/* CONNEXION */}
      <div className="HomeLogin-GlassLeft">
        <div className="HomeLogin-left">

          {/* Message qui s'affiche uniquement quand le user vient de s'inscrire */}
          {hasRegisteredSuccessfully && (
            <div className="HomeLogin-Message-RegisterOK message successMessage">
              <p>Votre inscription est validée !</p>
              <p>Vous pouvez vous connecter</p>
            </div>
          )}

          {/* Message qui s'affiche uniquement quand la connexion vient d'échouer */}
          {hasFailedLogin && (
            <div className="HomeLogin-Message-LoginError message errorMessage">
              <p>La connexion a échoué</p>
              <p>Mauvais couple email / mot de passe</p>
            </div>
          )}

          <h1>Connectez-vous</h1>
          <form className="HomeLogin-log" onSubmit={handleSubmitLogin}>
            <label htmlFor="mail">E-mail :</label>
            <input
              type="text"
              name="email"
              placeholder="Entrez votre adresse mail"
              onChange={(event) => {
                dispatch(changeLoginOrRegisterField(event.target.value, 'email'));
              }}
              value={email}
            />

            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              onChange={(event) => {
                dispatch(changeLoginOrRegisterField(event.target.value, 'password'));
              }}
              value={password}
            />

            <button type="submit">Connexion</button>
          </form>
        </div>
      </div>

      {/* INSCRIPTION */}

      <div className="HomeLogin-GlassRight">
        <div className="HomeLogin-right">

          {/* Message qui s'affiche uniquement quand le user commence à taper */}
          {isRegistering && (
            <div className="HomeLogin-Message-password message infoMessage">
              <p>
                Le mot-de-passe doit contenir au moins 4 caractères,
                dont 1 majuscule, 1 minuscule et 1 caractère spécial.
              </p>
            </div>
          )}

          {/* Message qui s'affiche uniquement quand l'inscription vient d'échouer */}
          {(hasFailedRegister && !isRegistering) && (
            <div className="HomeLogin-Message-RegisterError message errorMessage">
              <p>L'inscription a échoué</p>
            </div>
          )}

          <h1>Inscrivez-vous</h1>
          <form className="HomeLogin-create" onSubmit={handleSubmitRegister}>
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
      </div>
    </div>
  );
}

export default HomeLogin;
