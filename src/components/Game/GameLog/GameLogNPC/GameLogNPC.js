import PropTypes from 'prop-types';
import { useState } from 'react';

import './GameLogNPC.scss';
import GameLogNPCDialogue from './GameLogNPCDialogue/GameLogNPCDialogue';
import hide from '../../../../functions/hide';

function GameLogNPC({ npcName, npcDescription }) {
  const [visibleDialogue, setVisibleDialogue] = useState(false);

  return (
    <div className="GameLogNPC">
      <p className="GameLogNPC-intro">
        Vous rencontrez <span>{npcName}</span>.
      </p>
      <p className="GameLogNPC-content">
        {npcDescription}
      </p>

      {/* Le bouton "Dialogue" s'affiche toujours, quand le NPC est visible */}
      <button
        type="button"
        className="GameLog-next-step-button"
        onClick={(event) => {
          hide(event.target);
          setVisibleDialogue(true);
        }}
      >
        Dialogue
      </button>

      {visibleDialogue && (<GameLogNPCDialogue />)}

    </div>
  );
}

GameLogNPC.propTypes = {
  npcName: PropTypes.string.isRequired,
  npcDescription: PropTypes.string.isRequired,
};

export default GameLogNPC;
