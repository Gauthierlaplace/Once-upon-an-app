import './GameScene.scss';
import NPC from '../GameNPC/GameNPC';


function GameScene() {
  return (
    <div className="GameScene">
      <img className="GameScene-img" src='https://cdn.midjourney.com/7f09becc-bec9-4b15-a9ec-a476bbbeb5aa/0_1.png' alt='Game Scene' />
      <NPC />
    </div>
  );
}

export default GameScene;
