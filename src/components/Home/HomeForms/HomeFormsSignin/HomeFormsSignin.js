import "./HomeFormsSignin.scss";

function HomeFormsSignin() {
  return (
  <div className="HomeForms-Signin">
    <h1>Inscrivez-vous</h1>
    <form autoComplete="off" className="HomeFormsSignin-create">
      <label htmlFor="username">Pseudo</label>
      <input type="text" name="username" placeholder="Entrez votre pseudo" />

      <label htmlFor="email">E-mail :</label>
      <input type="text" name="email" placeholder="Entrez votre adresse mail" />

      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        name="password"
        placeholder="Entrez votre mot de passe"
      />

      <button type="submit">Inscription</button>
    </form>
  </div>
  );
}

export default HomeFormsSignin;
