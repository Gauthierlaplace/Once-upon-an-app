import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GameNPC from '../GameNPC/GameNPC';

import './GameScene.scss';
import BattleMode from '../BattleMode/BattleMode';

function GameScene({ eventName, picture }) {
  const visibleNPC = useSelector((state) => state.game.visibleNPC);
  const isBattleMode = useSelector((state) => state.game.battleMode);

  if (isBattleMode) {
    return (
      <div className="GameScene-battle">
        <img
          className="GameScene-img"
          src={picture}
          alt={eventName}
        />
        <BattleMode />
      </div>
    );
  }

  return (
    <div className="GameScene">
      <img
        className="GameScene-img"
        src={picture}
        alt={eventName}
      />
      {visibleNPC && (<GameNPC />)}
    </div>
  );
}

GameScene.propTypes = {
  eventName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default GameScene;
