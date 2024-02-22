import { useDispatch, useSelector } from 'react-redux';
import './GameMenuInventory.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import GameMenuInventoryDescription from './GameMenuInventoryDescription/GameMenuInventoryDescription';

function GameMenuInventory() {
  const playerItems = useSelector((state) => state.game.player.item);
  const path = `${process.env.REACT_APP_ASSETS_BASE}`;

  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowItemDescription = (itemId) => {
    // console.log('showItemDescription');
    setSelectedItem(playerItems.find((item) => item.id === itemId)); // Sélectionnez l'objet cliqué
  };

  // Nombre total d'emplacements d'inventaire souhaité
  const totalInventorySlots = 12;

  // Remplir les emplacements avec des objets existants
  const filledInventorySlots = playerItems.map((item) => (
    <div
      className="GameMenuInventory-item"
      key={item.id}
    >
      <span className="GameMenuInventory-itemNameToolBox">{item.name}</span>
      <motion.img
        initial={{
          scale: 1
        }}
        transition={{
          duration: 0.2
        }}
        animate={{}}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.95
        }}
        src={`${path}${item.picture.path}`}
        alt={item.picture.name}
        className="GameMenuInventory-itemImage"
        onClick={() => {
          handleShowItemDescription(item.id);
        }}
      />
    </div>
  ));

  // Générer des emplacements vides pour remplir jusqu'au nombre total
  const emptyInventorySlots = Array.from({ length: totalInventorySlots - playerItems.length }, (_, index) => (
    <div className="GameMenuInventory-item" key={`empty-${index}`}>
      {/* case vide */}
    </div>
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        {selectedItem && <GameMenuInventoryDescription item={selectedItem} />}
      </div>
      <div className="GameMenuInventory">
        {filledInventorySlots.concat(emptyInventorySlots)}
      </div>
    </motion.div>
  );
}

export default GameMenuInventory;
