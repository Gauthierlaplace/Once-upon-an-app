import PropTypes from 'prop-types';

import './GameLogEventDescription.scss';
import GameLogTypewriter from '../GameLogTypewriter/GameLogTypewriter';

function GameLogEventDescription({ description }) {
  const identifier = 'eventDescription';

  return (
    <div className="GameLogEventDescription">
      <p className="GameLogEventDescription-content">
        <GameLogTypewriter
          text={description}
          identifier={identifier}
        />
      </p>
    </div>
  );
}

GameLogEventDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GameLogEventDescription;
