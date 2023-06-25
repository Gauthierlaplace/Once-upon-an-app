import PropTypes from 'prop-types';
import TypeWriter from '../../TypeWriter/TypeWriter';

import './GameLogEventDescription.scss';

function GameLogEventDescription({ description }) {
  return (
    <div className="GameLogEventDescription">
      <p className="GameLogEventDescription-content">
        <TypeWriter text={description} />
      </p>
    </div>
  );
}

GameLogEventDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GameLogEventDescription;
