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

export default GameLogEventDescription;
