import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./HomeLogin.scss";

// Pour rappel, la fonction changeLoginField marche à la fois
// pour le champ "email" et pour le champ "password"
// (voir son fonctionnement détaillé dans le dossier actions)
import { changeLoginField, errorWhileLogin, saveLoginSuccessful } from "../../../actions/user";

function HomeLogin() {
  // Todo si l'on sépare en deux composants Login et Signin :
  // Gérer la transmission de ce qui suit en props (en les récupérant bien à hauteur du parent)

  // Je récupère ce dont j'ai besoin dans le state
  // Pour info, ce sont des reducers combinés (un state avec des tiroirs) => je précise state.user
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.nickname);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  // Fonction pour envoyer username et password à la soumission du formulaire
  const handleSubmit = (event) => {
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
        // Todo gérer les erreurs
        // Ici j'enregistre le jeton dans le state
        dispatch(
          errorWhileLogin("inconnu", "")
        );
      });
  };

  return (
    <div className="HomeLogin">
      <div className="HomeLogin-left">

        <h1>Connectez-vous</h1>
        <form className="HomeLogin-log" method="post" onSubmit={handleSubmit}>
          <label htmlFor="mail">E-mail :</label>
          <input
            type="text"
            name="email"
            placeholder="Entrez votre adresse mail"
            onChange={(event) => {
              dispatch(changeLoginField(event.target.value, "email"));
            }}
            value={email}
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            onChange={(event) => {
              dispatch(changeLoginField(event.target.value, "password"));
            }}
            value={password}
          />

          <button type="submit">Connexion</button>
        </form>
      </div>

      <div className="HomeLogin-right">
        <h1>Inscrivez-vous</h1>
        <form className="HomeLogin-create" method="post">
          <label htmlFor="username">Pseudo</label>
          <input
            type="text"
            name="username"
            placeholder="Entrez votre pseudo"
          />

          <label htmlFor="mail">E-mail :</label>
          <input
            type="text"
            name="email"
            placeholder="Entrez votre adresse mail"
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
          />

          <button type="submit">Inscription</button>
        </form>
      </div>
    </div>
  );
}

export default HomeLogin;
