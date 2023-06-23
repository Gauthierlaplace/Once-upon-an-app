import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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

  const [visibleButtonFollowToShowNPC, setVisibleButtonFollowToShowNPC] = useState(true);
  const [visibleButtonFollowToShowChoices, setVisibleButtonFollowToShowChoices] = useState(true);
  const [visibleButtonFollowToShowDialogue, setVisibleButtonFollowToShowDialogue] = useState(true);

  const dispatch = useDispatch();

  return (
    <div className="GameLog">
      {/* La description est toujours affichée, quoi qu'il arrive */}
      <GameLogEventDescription description={eventDescription} />

      {/* Le 1er bouton "Suite" s'affiche uniquement s'il y a un NPC dans la scène */}
      {(hasNPC && visibleButtonFollowToShowNPC) && (
        <button
          type="button"
          className="GameLog-next-step-npc-button"
          onClick={() => {
            dispatch(setVisibleNPC(true));
            setVisibleButtonFollowToShowNPC(false);
          }}
        >
          Suite
        </button>
      )}

      {/* Le NPC s'affiche s'il y a un NPC et s'il est visible (clic sur le bouton précédent) */}
      {(hasNPC && visibleNPC) && (
        <GameLogNPC
          npcName={npcName}
          npcDescription={npcDescription}
          visibleButtonFollowToShowDialogue={visibleButtonFollowToShowDialogue}
          setVisibleButtonFollowToShowDialogue={setVisibleButtonFollowToShowDialogue}
        />
      )}

      {/* Le bouton "Suite-choix" ne s'affiche pas pareil avec ou sans NPC  */}
      {/* Dans le cas où il n'y a pas de NPC, on veut qu'il s'affiche dès le début */}
      {/* Dans le cas où il y a un NPC, on veut qu'il s'affiche quand on a intéragi avec le NPC */}
      {(!hasNPC && visibleButtonFollowToShowChoices) && (
        <button
          type="button"
          className="GameLog-next-step-button"
          onClick={() => {
            dispatch(setVisibleChoices(true));
            setVisibleButtonFollowToShowChoices(false);
            // TODO proposition pour que le NPC disparaisse après son intervention
            // Pour l'instant, nous le retirons car sinon ça fait aussi disparaitre sa description
            // dispatch(setVisibleNPC(false));
          }}
        >
          Suite
        </button>
      )}

      {visibleChoices && (
        <GameLogChoices
          setVisibleButtonFollowToShowNPC={setVisibleButtonFollowToShowNPC}
          setVisibleButtonFollowToShowDialogue={setVisibleButtonFollowToShowDialogue}
          setVisibleButtonFollowToShowChoices={setVisibleButtonFollowToShowChoices}
        />
      )}
    </div>
  );
}

export default GameLog;
