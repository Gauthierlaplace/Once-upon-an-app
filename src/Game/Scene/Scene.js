import NPC from '../NPC/NPC';
import './Scene.scss';

function Scene() {
  return (
    <div className="Scene">
        <h1 className="Scene-title">Event Title</h1>
        <img className="Scene-img" src='https://cdn.midjourney.com/7f09becc-bec9-4b15-a9ec-a476bbbeb5aa/0_1.png' alt='scene' />
        <NPC />
    </div>
  );
}

export default Scene;
