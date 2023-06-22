import { useSelector } from 'react-redux';

import './GameLogNPCDialogue.scss';

function GameLogNPCDialogue() {
  const sentence = useSelector((state) => state.game.dialogue.sentence);
  const answers = useSelector((state) => state.game.dialogue.answers);
  return (
    <div className="GameLogNPCDialogue">
      <h2 className="GameLogNPCDialogue-content">{sentence}</h2>
      <div>
        {answers.map((answer, index) => (
          <button
            type="button"
            className="GameLogNPCDialogue-button"
            key={index}
            // onClick={() => handleClickOnNextEvent(answer.nextEventId)}
          >
            <p>
              {answer}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameLogNPCDialogue;
