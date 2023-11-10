import { useSelector } from 'react-redux';
import GameHealthBar from '../GamePlayerHealth/GameHealthBar/GameHealthBar';
import './GameNPC.scss';

function GameNPC() {
  const npcName = useSelector((state) => state.game.currentNPC.name);
  const npcPicture = useSelector((state) => state.game.currentNPC.picture);
  const isBattleMode = useSelector((state) => state.game.battleMode);
  const npcHealth = useSelector((state) => state.game.currentNPC.npcHealth);
  const npcMaxHealth = useSelector((state) => state.game.currentNPC.npcMaxHealth);

  return (
    <div className="GameNPC">
      <h2 className="GameNPC-title">{npcName}</h2>
      {isBattleMode && (
        <GameHealthBar
          health={npcHealth}
          maxHealth={npcMaxHealth}
        />
      )}
      <img className="GameNPC-img" src={npcPicture} alt={npcName} />
    </div>
  );
}

export default GameNPC;
