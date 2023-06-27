/* eslint-disable camelcase */
import './GameMenus.scss';
import { Icon } from 'react-icons-kit';
import { ic_shopping_bag } from 'react-icons-kit/md/ic_shopping_bag';
import { accessibility } from 'react-icons-kit/icomoon/accessibility';
import { flag } from 'react-icons-kit/entypo/flag';
import PlayerInventory from '../../Player/PlayerInventory';
import PlayerStats from '../../Player/PlayerStats';
import PlayerProgress from '../../Player/PlayerProgress';

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
    setDisplayInventory(true);
  };
  return (
    <div className="GameMenus">
      <div className="GameMenus-menus">
        <ul>
          <li>
            {/* Icon pour inventaire */}
            <Icon size={30} icon={ic_shopping_bag} onClick={displayInventoryFunction} />
          </li>

          <li>
            {/* Icon pour statistique */}
            <Icon size={30} icon={accessibility} onClick={displayStatsFunction} />
          </li>

          <li>
            {/* Icon pour la progression */}
            <Icon size={30} icon={flag} onClick={displayProgressFunction} />
          </li>
        </ul>
      </div>

      <div className="GameMenus-showComponent">
        {displayDescription && (
          <PlayerInventory />
        )}
        <PlayerStats />
        <PlayerProgress />
      </div>
    </div>
  );
}

export default GameMenus;
