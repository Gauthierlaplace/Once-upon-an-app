import './HomeLogin.scss';

function HomeLogin() {
  return (
    <div className="HomeLogin">

      <div className="HomeLogin-left">

<h1>Connectez-vous</h1>
        <form className="HomeLogin-log" method="post">
          <label for="mail">E-mail :</label>
          <input type="text" id="email" placeholder="Entrez votre adresse mail" />

          <label for="password">Mot de passe :</label>
          <input type="password" name="password" placeholder="Entrez votre mot de passe" />
          
          <button type="submit">Connexion</button>
        </form>
      
      </div>

      <div className="HomeLogin-right">

<h1>Inscrivez-vous</h1>
        <form className="HomeLogin-create" method="post">
          <label for="username">Pseudo</label>
          <input type="text" id="username" placeholder="Entrez votre pseudo" />

          <label for="mail">E-mail :</label>
          <input type="text" id="email" placeholder="Entrez votre adresse mail" />

          <label for="password">Mot de passe :</label>
          <input type="password" name="password" placeholder="Entrez votre mot de passe" />
          
          <button type="submit">Inscription</button>
        </form>
      
      </div>

    </div >
  );
}

export default HomeLogin;