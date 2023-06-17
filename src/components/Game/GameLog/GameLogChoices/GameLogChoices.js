import { useSelector } from 'react-redux';
import './GameLogChoices.scss';

function GameLogChoices() {
  const choices = useSelector((state) => state.game.choices);
  console.log(choices);
  return (
    <div className="GameLogChoices">
      <p className="GameLogChoices-content">A vous de jouer :</p>
      <div>
        {choices.map((choice) => (
          <button
            type="button"
            className="GameLogChoices-button"
            key={choice.nextEventId}
            // onClick={choice.action}
          >
            <p>
              {choice.content}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameLogChoices;
