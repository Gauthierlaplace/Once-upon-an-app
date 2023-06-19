import './GameLogNPC.scss';

function GameLogNPC({ npcName, npcDescription }) {
  // Todo : décommenter ce composant lorsque l'on aura géré les NPC
  return (
    <div className="GameLogNPC">
      <p className="GameLogNPC-intro">
        Vous rencontrez <span>{npcName}</span>.
      </p>
      <p className="GameLogNPC-content">
        {npcDescription}
      </p>
    </div>
  );
}

export default GameLogNPC;
