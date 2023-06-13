import './GameScene.scss';
import NPC from '../GameNPC/GameNPC';


function GameScene({ title, picture }) {
  return (
    <div className="GameScene">
      <img className="GameScene-img" src={picture} alt={title} />
      <NPC />
    </div>
  );
}

export default GameScene;
