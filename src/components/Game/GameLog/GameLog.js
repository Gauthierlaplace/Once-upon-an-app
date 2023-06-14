import './GameLog.scss';
import Message from './GameLogMessage/GameLogMessage';

function GameLog({ eventDescription, npcName, npcDescription }) {
  return (
    <div className="GameLog">
      <div className="GameLog-Log">
        <p>{eventDescription}</p>
        <p>Vous rencontrez {npcName}</p>
        <p>{npcDescription}</p>
      </div>

      <Message />
    </div>
  );
}

export default GameLog;
