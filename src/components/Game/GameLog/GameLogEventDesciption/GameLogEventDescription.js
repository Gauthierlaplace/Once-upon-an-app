import PropTypes from 'prop-types';

import './GameLogEventDescription.scss';

function GameLogEventDescription({ description }) {
  return (
    <div className="GameLogEventDescription">
      <p className="GameLogEventDescription-content">
        {description}
      </p>
    </div>
  );
}

GameLogEventDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GameLogEventDescription;
