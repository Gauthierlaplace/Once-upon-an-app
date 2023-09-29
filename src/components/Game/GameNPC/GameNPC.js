import { useSelector } from 'react-redux';
import './GameNPC.scss';

function GameNPC() {
  const npcName = useSelector((state) => state.game.currentNPC.name);
  const npcPicture = useSelector((state) => state.game.currentNPC.picture);

  return (
    <div className="GameNPC">
      <h2 className="GameNPC-title">{npcName}</h2>
      <img className="GameNPC-img" src={npcPicture} alt="portrait de PNJ" />
    </div>
  );
}

export default GameNPC;
