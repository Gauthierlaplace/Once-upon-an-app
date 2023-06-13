import './GameLog.scss';
import Message from './GameLogMessage/GameLogMessage';

function GameLog({ eventDescription, npcName, npcDescription }) {
  return (
    <div className="GameLog">
        <p>{eventDescription}</p>
        <p>Vous rencontrez {npcName}</p>
        <p>{npcDescription}</p>
        <Message />
    </div>
  );
}

export default GameLog;
