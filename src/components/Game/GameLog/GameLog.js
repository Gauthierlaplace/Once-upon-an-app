import { useDispatch, useSelector } from 'react-redux';
import './GameLog.scss';

import {
  setVisibleNPC,
  setVisibleChoices,
} from '../../../actions/game';

import Choices from './GameLogChoices/GameLogChoices';
import EventDescription from './GameLogEventDesciption/GameLogEventDescription';
import NPC from './GameLogNPC/GameLogNPC';

function GameLog({ eventDescription, npcName, npcDescription }) {
  const visibleNPC = useSelector((state) => state.game.visibleNPC);
  const visibleChoices = useSelector((state) => state.game.visibleChoices);
  const dispatch = useDispatch();

  // Todo rajouter une condition pour vérifier si la scène fait intervenir un NPC ou non
  // Si on n'a pas de NPC, on envoie directement vers les choix
  return (
    <div className="GameLog">
      <EventDescription description={eventDescription} />
      <button
        type="button"
        className="GameLog-next-step-button"
        onClick={() => dispatch(setVisibleNPC(true))}
      >
        Suite
      </button>

      {visibleNPC && (
        <NPC npcName={npcName} npcDescription={npcDescription} />
      )}

      {visibleNPC && (
        <button
          type="button"
          className="GameLog-next-step-button"
          onClick={() => dispatch(setVisibleChoices(true))}
        >
          Suite
        </button>
      )}

      {visibleChoices && (
        <Choices />
      )}
    </div>
  );
}

export default GameLog;
