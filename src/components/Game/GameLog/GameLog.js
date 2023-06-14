import './GameLog.scss';

import Choices from './GameLogChoices/GameLogChoices';
import EventDescription from './GameLogEventDesciption/GameLogEventDescription';
import NPC from './GameLogNPC/GameLogNPC';

function GameLog({ eventDescription, npcName, npcDescription }) {
  return (
    <div className="GameLog">
      <EventDescription description={eventDescription} />
      <NPC npcName={npcName} npcDescription={npcDescription} />
      <Choices />
    </div>
  );
}

export default GameLog;
