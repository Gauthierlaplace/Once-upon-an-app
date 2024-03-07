import PropTypes from 'prop-types';

import './GameLogDialogue.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setBattleMode, setEffectReadByPlayer } from '../../../../actions/game';

function GameLogDialogue({ sentence, answer, effectDescription }) {
  const dispatch = useDispatch();
  const effectReadByPlayer = useSelector((state) => state.game.effectReadByPlayer);
  const playerHealth = useSelector((state) => state.game.player.health);
  return (
    <div className="GameLogDialogue">
      <p className="GameLogDialogue-sentence">"{sentence}</p>
      <p className="GameLogDialogue-answer">- {answer}"</p>
      <p className="GameLogDialogue-effectDescription">{effectDescription}</p>

      {(!effectReadByPlayer && playerHealth !== 0) && (
        <button
          className="GameLogDialogue-button"
          type="button"
          onClick={() => {
            dispatch(setEffectReadByPlayer(true));
            dispatch(setBattleMode(true));
          }}
        >
          Combattez !
        </button>
      )}
    </div>
  );
}

GameLogDialogue.propTypes = {
  sentence: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  effectDescription: PropTypes.string.isRequired,
};

export default GameLogDialogue;
