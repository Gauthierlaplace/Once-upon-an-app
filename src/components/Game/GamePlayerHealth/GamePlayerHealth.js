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

      <img
        className="GamePlayerHealth-picture"
        src={heroPicture}
        alt="image du héro"
      />
      <h1>
        {heroName} :
      </h1>
      <em>
        <GamePlayerHealthBar playerHealth={health} playerMaxHealth={maxHealth} />
      </em>
    </div>
  );
}

export default GamePlayerHealth;
