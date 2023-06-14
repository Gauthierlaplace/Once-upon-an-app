import './GameLogNPC.scss';

function GameLogNPC({ npcName, npcDescription }) {
  return (
    <div className="GameLogNPC">
      <p className="GameLogNPC-intro">
        <span>
          Vous rencontrez
          {npcName}
          .
        </span>
      </p>
      <p className="GameLogNPC-content">
        {npcDescription}
      </p>
    </div>
  );
}

export default GameLogNPC;
