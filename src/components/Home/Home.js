import { useSelector } from "react-redux";

import HomeDescription from "./HomeDescription/HomeDescription";
import HomeLogin from "./HomeLogin/HomeLogin";
import HomeLogged from "./HomeLogged/HomeLogged";
import "./Home.scss";
import axios from "axios";

function Home() {
  const logged = useSelector((state) => state.user.logged);
  const token = useSelector((state) => state.user.token);

  // Fonction pour lancer une requete "test" sur la route api/test
  const testApiAuthorizationAccess = (jwt) => {
    axios
      .get(
        "http://anthony-boutherin.vpnuser.lan:8000/api/test",
        // options, notamment les headers
        // => on transmet le token JWT au serveur, pour qu'il nous reconnaisse
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => console.error(error));
  };

  // Fonction pour lancer une requete "test" sur la route api/user/email
  const testApiAuthorizationFindUser = (jwt) => {
    axios
      .get(
        "http://anthony-boutherin.vpnuser.lan:8000/api/users/pierre@player",
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data[0]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Home">
      <HomeDescription />
      {/* Quand le joueur est non-connecté, logged = false */}
      {/* On affiche le HomeLogin et on cache le HomeLogged */}
      {!logged && <HomeLogin />}

      <button
        // Todo retirer ce bouton qui sert uniquement aux tests API
        className="Home-testAPIButton"
        type="button"
        onClick={() => testApiAuthorizationAccess(token)}
      >
        Test access API
      </button>

      <button
        // Todo retirer ce bouton qui sert uniquement aux tests API
        className="Home-testAPIButtonFindUser"
        type="button"
        onClick={() => testApiAuthorizationFindUser(token)}
      >
        Test find user
      </button>

      {/* Quand le joueur est connecté, logged = true */}
      {/* On cache le HomeLogin et on affiche le HomeLogged */}
      {logged && <HomeLogged />}
    </div>
  );
}

export default Home;
