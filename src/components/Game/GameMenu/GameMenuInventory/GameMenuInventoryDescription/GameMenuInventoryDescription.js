import { useSelector } from 'react-redux';
import './GameMenuInventoryDescription.scss';

function GameMenuInventoryDescription() {
  const itemImg = useSelector((state) => state.game.player.item.name);
  const maxProgress = useSelector((state) => state.game.maxProgress);

  return (
    <div className="GameMenuInventoryDescription">
      <h2 className="GameMenuInventoryDescription-title">Progression dans le biome</h2>
    </div>
  );
}

export default GameMenuInventoryDescription;
