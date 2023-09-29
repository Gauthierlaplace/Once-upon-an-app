import { useState } from 'react';
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
        <button
          className="GameMenu-button"
          type="button"
          onClick={displayInventoryFunction}
        >
          Inventaire
        </button>

        <button
          className="GameMenu-button"
          type="button"
          onClick={displayStatsFunction}
        >
          Stats
        </button>

        <button
          className="GameMenu-button"
          type="button"
          onClick={displayProgressFunction}
        >
          Progression
        </button>
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
