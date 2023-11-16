import PropTypes from 'prop-types';

import './GameHealthBar.scss';
import { useEffect, useState } from 'react';

function GameHealthBar({ health, maxHealth }) {
  const percentHealth = (health / maxHealth) * 100;
  const remainingHealth = 100 - percentHealth;
  const [flashing, setFlashing] = useState(false);
  useEffect(() => {
    // Si la vie change, mettez à jour la barre de santé et activez le clignotement
    if (percentHealth !== (health / maxHealth) * 100) {
      setFlashing(true);

      setTimeout(() => {
        setFlashing(false);
      }, 3000); // Ajoutez une pause de 50 ms (ajustez selon vos besoins)
    }
  }, [health, maxHealth, percentHealth]);
  return (
    <div className={`GameHealthBar ${flashing ? 'flashing' : ''}`}>
      <div className="GameHealthBar-currentHealth" style={{ width: `${percentHealth}%` }} />
      <div className="GameHealthBar-remainingHealth" style={{ width: `${remainingHealth}%` }} />
      <div className="GameHealthBar-counter">{health} / {maxHealth}</div>
    </div>
  );
}

GameHealthBar.propTypes = {
  health: PropTypes.number.isRequired,
  maxHealth: PropTypes.number.isRequired,
};

export default GameHealthBar;
