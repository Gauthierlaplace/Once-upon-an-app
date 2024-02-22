import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';
import GameHealthBar from '../../GamePlayerHealth/GameHealthBar/GameHealthBar';
import './GameMenuProgress.scss';

function GameMenuProgress() {
  const progress = useSelector((state) => state.game.progress);
  const maxProgress = useSelector((state) => state.game.maxProgress);

  return (
    <motion.div
      className="GameMenuProgress"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="GameMenuProgress-title">Progression dans le biome</h2>
      <GameHealthBar
        health={progress}
        maxHealth={maxProgress}
      />
    </motion.div>
  );
}

export default GameMenuProgress;
