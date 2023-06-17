import PropTypes from 'prop-types';

import './GameScene.scss';

import NPC from '../GameNPC/GameNPC';

function GameScene({ npcName, picture }) {
  // Todo : dé-commenter le NPC quand on voudra qu'il apparaisse
  // Todo : conditionner son apparition selon le type d'événement (rencontre ou combat)
  return (
    <div className="GameScene">
      <img
        className="GameScene-img"
        src={picture}
        alt={npcName}
      />
      {/* <NPC /> */}
    </div>
  );
}

GameScene.propTypes = {
  npcName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default GameScene;
