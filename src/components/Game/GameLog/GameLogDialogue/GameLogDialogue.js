import PropTypes from 'prop-types';

import './GameLogDialogue.scss';

function GameLogDialogue({ sentence, answer, effectDescription }) {
  return (
    <div className="GameLogDialogue">
      <p className="GameLogDialogue-sentence">- "{sentence}"</p>
      <p className="GameLogDialogue-answer">- "{answer}"</p>
      <p className="GameLogDialogue-effectDescription">{effectDescription}</p>
    </div>
  );
}

GameLogDialogue.propTypes = {
  sentence: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  effectDescription: PropTypes.string.isRequired,
};

export default GameLogDialogue;
