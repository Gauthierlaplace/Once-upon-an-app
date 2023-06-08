import { Route, Routes } from 'react-router-dom';
import './Main.scss';

import Home from '../Home/Home';
import Game from '../Game/Game';

//TODO fix la gestion des Routes
function Main() {
  return (
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
  );
}

export default Main;
