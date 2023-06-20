import { useDispatch, useSelector } from 'react-redux';
import './GameLog.scss';

import {
  setVisibleNPC,
  setVisibleChoices,
} from '../../../actions/game';

import GameLogChoices from './GameLogChoices/GameLogChoices';
import GameLogEventDescription from './GameLogEventDesciption/GameLogEventDescription';
import GameLogNPC from './GameLogNPC/GameLogNPC';

function GameLog({ eventDescription, npcName, npcDescription }) {
  const hasNPC = useSelector((state) => state.game.hasNPC);
  const visibleNPC = useSelector((state) => state.game.visibleNPC);
  const visibleChoices = useSelector((state) => state.game.visibleChoices);
  const dispatch = useDispatch();

  // Todo rajouter une condition pour vérifier si la scène fait intervenir un NPC ou non
  // Si on n'a pas de NPC, on envoie directement vers les choix
  return (
    <div className="GameLog">
      <GameLogEventDescription description={eventDescription} />
      {(hasNPC) && (
        <button
          type="button"
          className="GameLog-next-step-button"
          onClick={() => dispatch(setVisibleNPC(true))}
        >
          Suite
        </button>
      )}

      {(hasNPC && visibleNPC) && (
        <GameLogNPC npcName={npcName} npcDescription={npcDescription} />
      )}

      {/* TODO conditionner ce bouton au moment d'apparition des choix */}
      <button
        type="button"
        className="GameLog-next-step-button"
        onClick={() => dispatch(setVisibleChoices(true))}
      >
        Suite
      </button>

      {visibleChoices && (
        <GameLogChoices />
      )}
    </div>
  );
}

export default GameLog;
