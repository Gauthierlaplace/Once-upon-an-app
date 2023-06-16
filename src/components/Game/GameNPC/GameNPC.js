import { useSelector } from 'react-redux';
import './GameNPC.scss';

function GameNPC() {
  const npcName = useSelector((state) => state.game.currentNpc.name);
  const npcPicture = useSelector((state) => state.game.currentNpc.picture);
  return (
    <div className="GameNPC">
      <h1 className="GameNPC-title">{npcName}</h1>
      <img className="GameNPC-img" src={npcPicture} alt="portrait de PNJ" />
    </div>
  );
}

export default GameNPC;
