import { useSelector } from 'react-redux';

import './GamePlayerHealth.scss';
import GamePlayerHealthBar from './GamePlayerHealthBar/GamePlayerHealthBar';

function GamePlayerHealth() {
  const heroName = useSelector((state) => state.game.player.name);
  const heroPicture = useSelector((state) => state.game.player.picture);
  const health = useSelector((state) => state.game.player.health);
  const maxHealth = useSelector((state) => state.game.player.maxHealth);

  return (
    <div className="GamePlayerHealth">
      <div className="GamePlayerHealth-pictureBlock">
        <img
          className="GamePlayerHealth-picture"
          src={heroPicture}
          alt="image du héro"
        />
      </div>
      <div className="GamePlayerHealth-titleBlock">
        <h2>
          {heroName} :
        </h2>
      </div>
      <div className="GamePlayerHealth-barBlock">
        <GamePlayerHealthBar playerHealth={health} playerMaxHealth={maxHealth} />
      </div>
    </div>
  );
}

export default GamePlayerHealth;
