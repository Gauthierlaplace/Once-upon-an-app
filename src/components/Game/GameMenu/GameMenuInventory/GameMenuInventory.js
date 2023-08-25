import React from 'react'
import { useSelector } from 'react-redux'

import "./GameMenuInventory.scss";

function GameMenuInventory() {
  const playerItems = useSelector((state) => state.game.player.item);
  const path = `${process.env.REACT_APP_ASSETS_BASE}`;
  return (
    <div className="GameMenuInventory">
      {playerItems.map((item) => (
        <div 
          className="GameMenuInventory-item"
          key={item.id}
        >
          <img 
            src={`${path}${item.picture.path}`}
            alt={item.picture.name}
            className="GameMenuInventory-itemImage" />
          <span className="GameMenuInventory-itemName">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default GameMenuInventory