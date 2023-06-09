import './HomeLogin.scss';

function HomeLogin() {
  return (
    <div className="HomeLogin">
      <div className="HomeLogin-log">
        <form method="post">
          <label for="mail">E-mail :</label>
          <input type="text" id="email" placeholder="Entrez votre adresse mail" />

          <label for="password">Mot de passe :</label>
          <input type="password" name="password" placeholder="Entrez votre mot de passe" />
          
          <button type="submit">Connexion</button>
        </form>
      </div>

      <div className="HomeLogin-create">
        Create account
      </div>

    </div>
  );
}

export default HomeLogin;