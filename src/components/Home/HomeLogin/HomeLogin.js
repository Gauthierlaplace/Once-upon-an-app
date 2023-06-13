import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./HomeLogin.scss";

// Pour rappel, la fonction suivante marche pour plusieurs champs à la fois
// (voir son fonctionnement détaillé dans le dossier actions)
import { changeLoginOrRegisterField, errorWhileLogin, saveLoginSuccessful, saveRegisterSuccessful } from "../../../actions/user";

function HomeLogin() {
  // Todo si l'on sépare en deux composants Login et Signin :
  // Gérer la transmission de ce qui suit en props (en les récupérant bien à hauteur du parent)

  // Je récupère ce dont j'ai besoin dans le state
  // Pour info, ce sont des reducers combinés (un state avec des tiroirs) => je précise state.user
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const nickname = useSelector((state) => state.user.nickname);
  const emailRegister = useSelector((state) => state.user.emailRegister);
  const passwordRegister = useSelector((state) => state.user.passwordRegister);

  const dispatch = useDispatch();

  // =========================================
  // TRAITEMENT DU FORMULAIRE DE CONNEXION
  // =========================================

  // Fonction pour envoyer username (l'email) et password à la soumission du formulaire
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // on valide les infos auprès du back-end
    axios
      .post("http://anthony-boutherin.vpnuser.lan:8000/api/login_check", {
        // La documentation API (nos collègues back) nous précise quelles données transmettre
        username: email,
        password: password,
      })
      .then((response) => {
        // Todo supprimer après les tests
        console.log("token :", response.data.token);
        // Ici j'enregistre le jeton dans le state
        // Lorsque le couple email/password est bien reconnu par le back
        dispatch(
          saveLoginSuccessful(response.data.nickname, response.data.token)
        );
      })
      .catch((error) => {
        console.error(error);
        // Todo gérer les erreurs (solution provisoire ci-dessous)
        // Ici j'enregistre le jeton dans le state
        dispatch(
          errorWhileLogin("inconnu", "")
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
      "http://anthony-boutherin.vpnuser.lan:8000/api/users",
      {
          email: emailRegister,
          roles: ["ROLE_PLAYER"],
          password: passwordRegister,
          pseudo: nickname,
          avatar: "",
      }
    )
      .then((response) => {
        console.log(response.data);
        dispatch(
          saveRegisterSuccessful(response.data.pseudo)
        );
      })
      .catch((error) => {
        // Todo gérer les erreurs
        console.error(error);
      });
  };

  return (
    <div className="HomeLogin">

      {/* CONNEXION */}

      <div className="HomeLogin-left">

        <h1>Connectez-vous</h1>
        <form className="HomeLogin-log" onSubmit={handleSubmitLogin}>
          <label htmlFor="mail">E-mail :</label>
          <input
            type="text"
            name="email"
            placeholder="Entrez votre adresse mail"
            onChange={(event) => {
              dispatch(changeLoginOrRegisterField(event.target.value, "email"));
            }}
            value={email}
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            onChange={(event) => {
              dispatch(changeLoginOrRegisterField(event.target.value, "password"));
            }}
            value={password}
          />

          <button type="submit">Connexion</button>
        </form>
      </div>

      {/* INSCRIPTION */}

      <div className="HomeLogin-right">
        <h1>Inscrivez-vous</h1>
        <form className="HomeLogin-create" onSubmit={handleSubmitRegister}>
          <label htmlFor="nickname">Pseudo</label>
          <input
            type="text"
            name="nickname"
            placeholder="Entrez votre pseudo"
            onChange={(event) => {
              dispatch(changeLoginOrRegisterField(event.target.value, "nickname"))
            }}
            value={nickname}
          />

          <label htmlFor="mail">E-mail :</label>
          <input
            type="text"
            name="emailRegister"
            placeholder="Entrez votre adresse mail"
            onChange={(event) => {
              dispatch(changeLoginOrRegisterField(event.target.value, "emailRegister"))
            }}
            value={emailRegister}
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            name="passwordRegister"
            placeholder="Entrez votre mot de passe"
            onChange={(event) => {
              dispatch(changeLoginOrRegisterField(event.target.value, "passwordRegister"))
            }}
            value={passwordRegister}          />

          <button type="submit">Inscription</button>
        </form>
      </div>
    </div>
  );
}

export default HomeLogin;
