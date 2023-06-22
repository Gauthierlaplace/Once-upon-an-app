import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import './GameLogNPCDialogue.scss';

import {
  setVisibleChoices,
} from '../../../../../actions/game';

function GameLogNPCDialogue() {
  const sentence = useSelector((state) => state.game.dialogue.sentence);
  const answers = useSelector((state) => state.game.dialogue.answers);

  const dispatch = useDispatch();
  const [visibleDialogue, setVisibleDialogue] = useState(true);

  return (
    <div className="GameLogNPCDialogue">
      {visibleDialogue && (<h2 className="GameLogNPCDialogue-content">{sentence}</h2>)}

      {visibleDialogue && (
        <div>
          {answers.map((answer, index) => (
            <button
              type="button"
              className="GameLogNPCDialogue-button"
              key={index}
              onClick={() => {
                dispatch(setVisibleChoices(true));
                setVisibleDialogue(false);
              }}
            >
              <p>
                {answer}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default GameLogNPCDialogue;
