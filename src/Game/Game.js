import './Game.scss';

import PlayerHealth from './PlayerHealth/PlayerHealth';
import Scene from './Scene/Scene';
import Log from './Log/Log';
import Menus from './Menus/Menus';

function Game() {
  return (
    <div className="Game">
      <PlayerHealth />
      <Scene />
      <Log />
      <Menus />
    </div>
  );
}

export default Game;
