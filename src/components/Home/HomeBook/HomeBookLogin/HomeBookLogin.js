import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './HomeBookLogin.scss';

// Pour rappel, la fonction suivante marche pour plusieurs champs à la fois
// (voir son fonctionnement détaillé dans le dossier actions)
import {
  changeLoginOrRegisterField,
  hasFailedAction,
  saveLoginSuccessful,
} from '../../../../actions/user';

function HomeBookLogin() {
  // Todo si l'on sépare en deux composants Login et Signin :
  // Gérer la transmission de ce qui suit en props (en les récupérant bien à hauteur du parent)

  // Je récupère ce dont j'ai besoin dans le state
  // Pour info, ce sont des reducers combinés (un state avec des tiroirs) => je précise state.user
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const hasRegisteredSuccessfully = useSelector((state) => state.user.hasRegisteredSuccessfully);
  const hasFailedLogin = useSelector((state) => state.user.hasFailedLogin);

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
        {hasFailedLogin && (
          <div className="HomeBookLogin-Message-LoginError message errorMessage">
            <p>La connexion a échoué</p>
            <p>Mauvais couple email / mot de passe</p>
          </div>
        )}

        <h1>Connectez-vous</h1>
        <form className="HomeBook-form" onSubmit={handleSubmitLogin}>
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
  );
}

export default HomeBookLogin;
