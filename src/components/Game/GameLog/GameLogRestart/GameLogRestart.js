import './GameLogRestart.scss';

function GameLogNPC() {
  const handleClickRestart = () => {
    window.location = '/';
  };

  return (
    <div className="GameLogRestart">
      <button
        type="button"
        className="GameLogRestart-button"
        onClick={() => handleClickRestart()}
      >
        Rejouer
      </button>
    </div>
  );
}

export default GameLogNPC;
