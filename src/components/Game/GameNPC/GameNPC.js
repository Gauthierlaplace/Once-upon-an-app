import { useSelector } from 'react-redux';
import './GameNPC.scss';

function GameNPC() {
  const npcName = useSelector((state) => state.game.currentNPC.name);
  const npcPictureSrc = useSelector((state) => state.game.currentNPC.picture);

  const path = `${process.env.REACT_APP_ASSETS_BASE}`;
  const npcPicture = `${path}${npcPictureSrc}`;

  return (
    <div className="GameNPC">
      <h1 className="GameNPC-title">{npcName}</h1>
      <img className="GameNPC-img" src={npcPicture} alt="portrait de PNJ" />
    </div>
  );
}

export default GameNPC;
