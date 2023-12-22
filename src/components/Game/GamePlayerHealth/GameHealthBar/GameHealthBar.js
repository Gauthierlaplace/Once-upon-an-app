import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import './GameHealthBar.scss';
import { useEffect, useState } from 'react';

function GameHealthBar({ health, maxHealth }) {
  const percentHealth = (health / maxHealth) * 100;
  const remainingHealth = 100 - percentHealth;

  return (
    <div className="GameHealthBar">
      <CurrentHealth style={{ width: `${percentHealth}%` }} />
      <RemainingHealth style={{ width: `${remainingHealth}%` }} />
      <div className="GameHealthBar-counter">{health} / {maxHealth}</div>
    </div>
  );
}

GameHealthBar.propTypes = {
  health: PropTypes.number.isRequired,
  maxHealth: PropTypes.number.isRequired,
};

export default GameHealthBar;

const slideIn = keyframes`
  from {
    width: ${(props) => props.percent}%;
  }
  to {
    width: ${(props) => props.percent}%;
  }
`;

const CurrentHealth = styled.div`
background-color: rgb(146, 34, 34);
height: 100%;
border-radius: 1em;
position: absolute;
animation: ${slideIn} 2s ease-in-out;
top: 0;
left: 0;
`;

const RemainingHealth = styled.div`
height: 100%;
position: absolute;
top: 0;
right: 0;
`;
