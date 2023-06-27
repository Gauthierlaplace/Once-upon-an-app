import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GameNPC from '../GameNPC/GameNPC';

import './GameScene.scss';

function GameScene({ npcName, picture }) {
  // Todo : conditionner apparition NPC selon le type d'événement (rencontre ou combat)
  const visibleNPC = useSelector((state) => state.game.visibleNPC);
  return (
    <div className="GameScene">
      <img
        className="GameScene-img"
        src={picture}
        alt={npcName}
      />
      {visibleNPC && (<GameNPC />)}
    </div>
  );
}

GameScene.propTypes = {
  npcName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default GameScene;
