import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import GameMenuInventory from './GameMenuInventory/GameMenuInventory';
import GameMenuStats from './GameMenuStats/GameMenuStats';
import GameMenuProgress from './GameMenuProgress/GameMenuProgress';

import './GameMenu.scss';

function GameMenu() {
  const [displayInventory, setDisplayInventory] = useState(false);
  const [displayStats, setDisplayStats] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(false);

  const displayInventoryFunction = () => {
    setDisplayInventory(!displayInventory);
    setDisplayStats(false);
    setDisplayProgress(false);
  };

  const displayStatsFunction = () => {
    setDisplayInventory(false);
    setDisplayStats(!displayStats);
    setDisplayProgress(false);
  };

  const displayProgressFunction = () => {
    setDisplayInventory(false);
    setDisplayStats(false);
    setDisplayProgress(!displayProgress);
  };

  return (
    <div className="GameMenu">
      <div className="GameMenu-buttons">
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.1 }}
          className="GameMenu-button"
          type="button"
          onClick={displayInventoryFunction}
        >
          Inventaire
        </motion.button>

        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.1 }}
          className="GameMenu-button"
          type="button"
          onClick={displayStatsFunction}
        >
          Stats
        </motion.button>

        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.1 }}
          className="GameMenu-button"
          type="button"
          onClick={displayProgressFunction}
        >
          Progression
        </motion.button>
      </div>

      <div className="GameMenu-content">
        {displayInventory && (
          <GameMenuInventory />
        )}

        {displayStats && (
          <GameMenuStats />
        )}

        {displayProgress && (
          <GameMenuProgress />
        )}
      </div>
    </div>
  );
}

export default GameMenu;
