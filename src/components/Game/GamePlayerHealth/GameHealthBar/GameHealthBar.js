import PropTypes from 'prop-types';

import './GameHealthBar.scss';

function GameHealthBar({ health, maxHealth }) {
  const percentHealth = (health / maxHealth) * 100;
  const remainingHealth = 100 - percentHealth;
  return (
    <div className="GameHealthBar">
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
