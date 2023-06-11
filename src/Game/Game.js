import './Game.scss';

import PlayerHealth from './PlayerHealth/PlayerHealth';
import Scene from './Scene/Scene';
import Log from './Log/Log';
import Menus from './Menus/Menus';
// import NPC from './NPC/NPC';


function Game() {
  return (
    <div className="Game">
      <PlayerHealth />

      <div className="Game-flexSB">
        <div className="Game-left">
          <Scene />
          {/* <NPC /> */}
          <Menus />
        </div>

        <div className="Game-right">
        <h1 className="Log-title">Journal</h1>
          <Log />
        </div>
      </div>

    </div>
  );
}

export default Game;
