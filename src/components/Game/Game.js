import { useSelector } from 'react-redux';

import './Game.scss';

import PlayerHealth from './GamePlayerHealth/GamePlayerHealth';
import Scene from './GameScene/GameScene';
import Log from './GameLog/GameLog';
import Menus from './GameMenus/GameMenus';


function Game() {
  const eventTitle = useSelector(state => state.game.currentEvent.title);
  const eventPicture = useSelector(state => state.game.currentEvent.picture);
  const eventDescription = useSelector(state => state.game.currentEvent.description);
  const npcName = useSelector(state => state.game.currentNpc.name);
  const npcDescription = useSelector(state => state.game.currentNpc.description);
  return (
    <div className="Game">
      <PlayerHealth />

      <div className="Game-flexSB">
        <div className="Game-left">

        <h1 className="Game-Eventtitle">{eventTitle}</h1>
          <Scene picture={eventPicture}/>
          <Menus />
        </div>

        <div className="Game-right">
          <h1 className="Game-Logtitle">Journal</h1>
          <Log eventDescription={eventDescription} npcName={npcName} npcDescription={npcDescription} />
        </div>
      </div>

    </div>
  );
}

export default Game;
