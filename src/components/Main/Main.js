import { Route, Routes } from 'react-router-dom';
import './Main.scss';

import Home from '../Home/Home';
import Game from '../Game/Game';
import HomeBookRegister from '../Home/HomeBook/HomeBookRegister/HomeBookRegister';
import HomeBookLogin from '../Home/HomeBook/HomeBookLogin/HomeBookLogin';

// TODO fix la gestion des Routes

function Main() {
  return (
    // TODO fix la gestion des Routes
    <div className="Main">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/game"
          element={<Game />}
        />

        {/* AFFICHE LE COMPONENT D INSCRIPTION SUR LA PARTIE DROITE */}
        <Route
          path="/Register"
          element={<HomeBookRegister />}
        />

        {/* AFFICHE LE COMPONENT DE CONNEXION SUR LA PARTIE DROITE */}
        <Route
          path="/login"
          element={<HomeBookLogin />}
        />
      </Routes>
    </div>
  );
}

export default Main;
