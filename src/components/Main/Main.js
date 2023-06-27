import { Route, Routes } from 'react-router-dom';
import './Main.scss';

import Home from '../Home/Home';
import Game from '../Game/Game';
import MyAccount from '../MyAccount/MyAccount';

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

        {/* AFFICHE LE COMPONENT DE MON COMPTE */}
        <Route
          path="/MyAccount"
          element={<MyAccount />}
        />
      </Routes>
    </div>
  );
}

export default Main;
