import { useSelector } from 'react-redux';
import GameHealthBar from '../../GamePlayerHealth/GameHealthBar/GameHealthBar';
import './GameMenuProgress.scss';

function GameMenuProgress() {
  const progress = useSelector((state) => state.game.progress);
  const maxProgress = useSelector((state) => state.game.maxProgress);

  return (
    <div className="GameMenuProgress">
      <h2 className="GameMenuProgress-title">Progression dans le biome</h2>
      <GameHealthBar
        health={progress}
        maxHealth={maxProgress}
      />
    </div>
  );
}

export default GameMenuProgress;
