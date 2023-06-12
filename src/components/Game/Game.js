import './Game.scss';

import PlayerHealth from './GamePlayerHealth/GamePlayerHealth';
import Scene from './GameScene/GameScene';
import Log from './GameLog/GameLog';
import Menus from './GameMenus/GameMenus';


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
