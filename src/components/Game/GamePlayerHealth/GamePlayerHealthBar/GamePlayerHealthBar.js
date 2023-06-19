import PropTypes from 'prop-types';

import './GamePlayerHealthBar.scss';

function GamePlayerHealthBar({ playerHealth, playerMaxHealth }) {
  const percentHealth = (playerHealth / playerMaxHealth) * 100;
  const remainingHealth = 100 - percentHealth;
  return (
    <div className="GamePlayerHealthBar">
      <div className="GamePlayerHealthBar-currentHealth" style={{ width: `${percentHealth}%` }} />
      <div className="GamePlayerHealthBar-remainingHealth" style={{ width: `${remainingHealth}%` }} />
      <div className="GamePlayerHealthBar-counter">{playerHealth} / {playerMaxHealth}</div>
    </div>
  );
}

GamePlayerHealthBar.propTypes = {
  playerHealth: PropTypes.number.isRequired,
  playerMaxHealth: PropTypes.number.isRequired,
};

export default GamePlayerHealthBar;
