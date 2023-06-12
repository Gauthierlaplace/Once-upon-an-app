import axios from 'axios';
import "./HomeFormsLogin.scss";

function HomeFormsLogin() {
  // Cette fonction est déclenchée au submit du formulaire Login
  const handleTestButton = (evt) => {
    evt.preventDefault(); 
    axios.get('http://anthony-boutherin.vpnuser.lan:8000/api/test', {
      headers: {
        Authorization: `bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODY1NzkzMjQsImV4cCI6MTY4NjY0NDEyNCwicm9sZXMiOlsiUk9MRV9HQU1FTUFTVEVSIiwiUk9MRV9QTEFZRVIiXSwidXNlcm5hbWUiOiJnYXV0aGllckBnYW1lTWFzdGVyLmNvbSJ9.Ee3uwq7lUIJztzjH5GbY5nqzeasStqCzOOky0ouStzeuzMVSA5X7TOMyPkKvS8w4_BFDDfll2qFLxq3Zj-LDqNbiAhqhSXv5nRS7Mq13cPC17E6kxd1Z7-vLnRz_QTImkBGO3rHv7YgZGbEPjBSc7QeEQhVoHHFEIZ76ujenv8T3y5jhBAgGgTf23BFv3QOzulCV23mIG9bubfHuqntxOVglj_Oiffklh7Gr88cYg6cxAtKcZgZzboWwZDJmeFUENUghYF1AspHzKFpNamB8zCKB9-uUn1ErN4eUWch4nTZUInpENaDVz6PDuTBYf1F-_IxgM8eVNgDrrMDFUmdJ7w'}`
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault(); // On empeche le rafraichissement de la page
    // On envoie une requete qui donne pour l'instant directement
    // un username valide
    // un mdp valide
    // TODO gérer la transmission du username + password depuis le form (avec le state)

    axios.post('http://anthony-boutherin.vpnuser.lan:8000/api/login_check', {
      // La documentation API (nos collègues back) nous précisent quelles données transmettre
      username: 'gauthier@gameMaster.com',
      password: 'gameMaster'
    })
    .then(response => {
      const token = response.data.token;
      console.log(token);
    })
    .catch((err) => {
      console.log(err);
    });
    
    console.log("Fonction handleSubmit appelé");
    // console.log(evt.target.email.value);
    // console.log(evt.target.password.value);
  };

  return (
    <div className="HomeForms-Login">
      <h1>Connectez-vous</h1>
      {/* A la soumission du form, on déclenche la fonction handler handleSubmit */}
      <form
        autoComplete="off"
        className="HomeFormsLogin-log"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">E-mail :</label>
        <input
          type="text"
          name="email"
          placeholder="Entrez votre adresse mail"
          // value=""
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
        />

        <button type="submit">Connexion</button>

        <button
          type="button"
          onClick={handleTestButton}
        >
          Tester l'accès à api/test
        </button>

      </form>
    </div>
  );
}

export default HomeFormsLogin;
