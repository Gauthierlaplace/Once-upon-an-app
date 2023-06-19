import { useSelector } from 'react-redux';

import './GamePlayerHealth.scss';
import GamePlayerHealthBar from './GamePlayerHealthBar/GamePlayerHealthBar';

function GamePlayerHealth() {
  const heroName = useSelector((state) => state.game.heroData[0].name);
  const heroPicture = useSelector((state) => state.game.heroData[0].picture);
  const health = useSelector((state) => state.game.heroData[0].health);
  const maxHealth = useSelector((state) => state.game.heroData[0].maxHealth);
  return (
    <div className="GamePlayerHealth">
      <h1>
        <img
          className="GamePlayerHealth-picture"
          src={heroPicture}
          alt="image du héro"
        />
        <em className="GamePlayerHealth-name">
          {heroName} :
        </em>
      </h1>
      <em>
        <GamePlayerHealthBar playerHealth={health} playerMaxHealth={maxHealth} />
      </em>
    </div>
  );
}

export default GamePlayerHealth;
