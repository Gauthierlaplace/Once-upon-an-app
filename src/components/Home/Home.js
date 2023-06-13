import { useSelector } from "react-redux";

import HomeDescription from './HomeDescription/HomeDescription';
import HomeLogin from './HomeLogin/HomeLogin';
import HomeLogged from './HomeLogged/HomeLogged';
import './Home.scss';

function Home() {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="Home">
      <HomeDescription />
      {/* Quand le joueur est non-connecté, logged = false */}
      {/* On affiche le HomeLogin et on cache le HomeLogged */}
      { !logged && (<HomeLogin />) }

      {/* Quand le joueur est connecté, logged = true */}
      {/* On cache le HomeLogin et on affiche le HomeLogged */}
      { logged && (<HomeLogged />) }
    </div>
  );
}

export default Home;
