import { useDispatch, useSelector } from 'react-redux';
import './GameLog.scss';

import hide from '../../../functions/hide';

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

  return (
    <div className="GameLog">
      {/* La description est toujours affichée, quoi qu'il arrive */}
      <GameLogEventDescription description={eventDescription} />

      {/* Le 1er bouton "Suite" s'affiche uniquement s'il y a un NPC dans la scène */}
      {(hasNPC) && (
        <button
          type="button"
          className="GameLog-next-step-button"
          onClick={(event) => {
            hide(event.target);
            dispatch(setVisibleNPC(true));
          }}
        >
          Suite
        </button>
      )}

      {/* Le NPC s'affiche s'il y a un NPC et s'il est visible (clic sur le bouton précédent) */}
      {(hasNPC && visibleNPC) && (
        <GameLogNPC npcName={npcName} npcDescription={npcDescription} />
      )}

      {/* Le bouton "Suite-choix" ne s'affiche pas pareil avec ou sans NPC  */}
      {/* Dans le cas où il n'y a pas de NPC, on veut qu'il s'affiche dès le début */}
      {/* Dans le cas où il y a un NPC, on veut qu'il s'affiche quand on a intéragi avec le NPC */}
      {!hasNPC && (
        <button
          type="button"
          className="GameLog-next-step-button"
          onClick={(event) => {
            hide(event.target);
            dispatch(setVisibleChoices(true));
            // TODO proposition pour que le NPC disparaisse après son intervention
            // Pour l'instant, nous le retirons car sinon ça fait aussi disparaitre sa description
            // dispatch(setVisibleNPC(false));
          }}
        >
          Suite
        </button>
      )}

      {visibleChoices && (
        <GameLogChoices />
      )}
    </div>
  );
}

export default GameLog;
