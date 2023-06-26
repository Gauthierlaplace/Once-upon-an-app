import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './GameLogNPC.scss';
import GameLogNPCDialogue from './GameLogNPCDialogue/GameLogNPCDialogue';
import GameLogTypewriter from '../GameLogTypewriter/GameLogTypewriter';
import { setTypewriting } from '../../../../actions/game';

function GameLogNPC({
  npcName,
  npcDescription,
  visibleButtonFollowToShowDialogue,
  setVisibleButtonFollowToShowDialogue,
}) {
  const [visibleDialogue, setVisibleDialogue] = useState(false);
  const typewriting = useSelector((state) => state.game.typewriting.npcDescription);
  const dispatch = useDispatch();
  const identifier = 'npcDescription';

  return (
    <div className="GameLogNPC">
      <p className="GameLogNPC-intro">
        Vous rencontrez <span>{npcName}</span>.
      </p>
      <p className="GameLogNPC-content">
        <GameLogTypewriter
          text={npcDescription}
          identifier={identifier}
        />
      </p>

      {typewriting && (
        <button
          type="button"
          className="skipButton"
          onClick={() => dispatch(setTypewriting(identifier, false))}
        >
          Accélérer
        </button>
      )}

      {/* Le bouton "Dialogue" s'affiche toujours, quand le NPC est visible */}
      {(visibleButtonFollowToShowDialogue && !typewriting) && (
        <button
          type="button"
          className="GameLog-next-step-button"
          onClick={() => {
            setVisibleDialogue(true);
            setVisibleButtonFollowToShowDialogue(false);
          }}
        >
          Dialogue
        </button>
      )}

      {visibleDialogue && (<GameLogNPCDialogue />)}

    </div>
  );
}

GameLogNPC.propTypes = {
  npcName: PropTypes.string.isRequired,
  npcDescription: PropTypes.string.isRequired,
};

export default GameLogNPC;
