import { useSelector } from 'react-redux';
import './GameLogChoices.scss';

function GameLogChoices() {
  const choices = useSelector(state => state.game.choices);
  return (
    <div className="GameLogChoices">
      <p className="GameLogChoices-content">A vous de jouer :</p>
      <div>
      {choices.map((choice) => (
        <button 
          className="GameLogChoices-button"
          key={choice.id}
          // onClick={choice.action}
        >
          <p>
            {choice.textButton}
          </p>
        </button>
      ))}
      </div>
    </div>
  );
}

export default GameLogChoices;
