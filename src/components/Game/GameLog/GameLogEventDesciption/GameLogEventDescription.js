import PropTypes from 'prop-types';

import './GameLogEventDescription.scss';
import GameLogTypewriter from '../GameLogTypewriter/GameLogTypewriter';

function GameLogEventDescription({ description }) {
  return (
    <div className="GameLogEventDescription">
      <p className="GameLogEventDescription-content">
        <GameLogTypewriter text={description} />
      </p>
    </div>
  );
}

GameLogEventDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GameLogEventDescription;
