import PropTypes from 'prop-types';

import './GameLogNPC.scss';
import GameLogNPCDialogue from './GameLogNPCDialogue/GameLogNPCDialogue';

function GameLogNPC({ npcName, npcDescription }) {
  // Todo : décommenter ce composant lorsque l'on aura géré les NPC
  return (
    <div className="GameLogNPC">
      <p className="GameLogNPC-intro">
        Vous rencontrez <span>{npcName}</span>.
      </p>
      <p className="GameLogNPC-content">
        {npcDescription}
        <GameLogNPCDialogue />
      </p>
    </div>
  );
}

GameLogNPC.propTypes = {
  npcName: PropTypes.string.isRequired,
  npcDescription: PropTypes.string.isRequired,
};

export default GameLogNPC;
