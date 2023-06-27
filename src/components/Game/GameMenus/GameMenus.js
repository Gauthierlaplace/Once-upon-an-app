/* eslint-disable camelcase */
import './GameMenus.scss';
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_shopping_bag } from 'react-icons-kit/md/ic_shopping_bag';
import { accessibility } from 'react-icons-kit/icomoon/accessibility';
import { flag } from 'react-icons-kit/entypo/flag';
import PlayerInventory from './Player/PlayerInventory';
import PlayerStats from './Player/PlayerStats';
import PlayerProgress from './Player/PlayerProgress';

function GameMenus() {
  const [displayInventory, setDisplayInventory] = useState(true);
  const [displayStats, setDisplayStats] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(false);

  const displayInventoryFunction = () => {
    setDisplayInventory(true);
    setDisplayStats(false);
    setDisplayProgress(false);
  };

  const displayStatsFunction = () => {
    setDisplayInventory(false);
    setDisplayStats(true);
    setDisplayProgress(false);
  };

  const displayProgressFunction = () => {
    setDisplayInventory(false);
    setDisplayStats(false);
    setDisplayProgress(true);
  };
  return (
    <div className="GameMenus">
      <div className="GameMenus-menus">

        {/* Icon pour inventaire */}
        <button
          type="button"
          onClick={displayInventoryFunction}
        >
          <Icon size={30} icon={ic_shopping_bag} />
        </button>

        {/* Icon pour statistique */}
        <button
          type="button"
          onClick={displayStatsFunction}
        >
          <Icon size={30} icon={accessibility} />
        </button>

        {/* Icon pour la progression */}
        <button
          type="button"
          onClick={displayProgressFunction}
        >
          <Icon size={30} icon={flag} />
        </button>
      </div>

      <div className="GameMenus-showComponent">
        {displayInventory && (
          <PlayerInventory />
        )}

        {displayStats && (
          <PlayerStats />
        )}
        {displayProgress && (
          <PlayerProgress />
        )}

      </div>
    </div>
  );
}

export default GameMenus;
