import PropTypes from 'prop-types';

import './GameScene.scss';

import NPC from '../GameNPC/GameNPC';

function GameScene({ npcName, picture }) {
  return (
    <div className="GameScene">
      <img
        className="GameScene-img"
        src={picture}
        alt={npcName}
      />
      <NPC />
    </div>
  );
}

GameScene.propTypes = {
  npcName: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
};

export default GameScene;
