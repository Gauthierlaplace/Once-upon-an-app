/* eslint-disable camelcase */
import './GameMenus.scss';
import { Icon } from 'react-icons-kit';
import { ic_shopping_bag } from 'react-icons-kit/md/ic_shopping_bag';
import { accessibility } from 'react-icons-kit/icomoon/accessibility';
import { flag } from 'react-icons-kit/entypo/flag';
import { GameMenusInventory } from './GameMenusInventory';

function GameMenus() {
  return (
    <div className="GameMenus">
      <div className="GameMenus-menus">
        <ul>
          <li>
            {/* Icon pour inventaire */}
            <Icon size={30} icon={ic_shopping_bag} />
          </li>

          <li>
            {/* Icon pour statistique */}
            <Icon size={30} icon={accessibility} />
          </li>

          <li>
            {/* Icon pour la progression */}
            <Icon size={30} icon={flag} />
          </li>
        </ul>
      </div>

      <div className="GameMenus-showComponent">
        <GameMenusInventory />
      </div>
    </div>
  );
}

export default GameMenus;
