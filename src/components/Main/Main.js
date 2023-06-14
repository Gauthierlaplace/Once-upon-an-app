import { Route, Routes } from 'react-router-dom';
import './Main.scss';

import Home from '../Home/Home';
import Game from '../Game/Game';

// TODO fix la gestion des Routes

function Main() {
  return (
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
      </Routes>
    </div>
  );
}

export default Main;
