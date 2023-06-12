import './Game.scss';

import PlayerHealth from './PlayerHealth/PlayerHealth';
import Scene from './Scene/Scene';
import Log from './Log/Log';
import Menus from './Menus/Menus';


function Game() {
  return (
    <div className="Game">
      <PlayerHealth />

      <div className="Game-flexSB">
        <div className="Game-left">

        <h1 className="Game-Eventtitle">Event Title</h1>
          <Scene />
          <Menus />
        </div>

        <div className="Game-right">
        <h1 className="Game-Logtitle">Journal</h1>
          <Log />
        </div>
      </div>

    </div>
  );
}

export default Game;
