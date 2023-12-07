import { useDispatch, useSelector } from 'react-redux';
import './GameMenuInventory.scss';
import { useState } from 'react';
import api from '../../../../api/api';
import GameMenuInventoryDescription from './GameMenuInventoryDescription/GameMenuInventoryDescription';
import { setLoading, setPlayerAfterBattle } from '../../../../actions/game';

function GameMenuInventory() {
  const playerItems = useSelector((state) => state.game.player.item);
  const path = `${process.env.REACT_APP_ASSETS_BASE}`;
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowItemDescription = (itemId) => {
    console.log('showItemDescription');
    setSelectedItem(playerItems.find((item) => item.id === itemId)); // Sélectionnez l'objet cliqué
  };

  const handleClickOnUsable = (itemId) => {
    api.get(`/usable/${itemId}`)
      .then((response) => {
        dispatch(setLoading(true));

        const playerAPI = response.data.player;
        dispatch(setPlayerAfterBattle(
          playerAPI.health,
          playerAPI.maxHealth,
          playerAPI.defense,
          playerAPI.dexterity,
          playerAPI.intelligence,
          playerAPI.karma,
          playerAPI.strength,
          playerAPI.items
        ));
        console.log(playerAPI);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  // Nombre total d'emplacements d'inventaire souhaité
  const totalInventorySlots = 12;

  // Remplir les emplacements avec des objets existants
  const filledInventorySlots = playerItems.map((item) => (
    <div
      className="GameMenuInventory-item"
      key={item.id}
    >
      {/* <span className="GameMenuInventory-itemName">{item.name}</span> */}
      <img
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
    <div>
      <div>
        {selectedItem && <GameMenuInventoryDescription item={selectedItem} />}
      </div>
      <div className="GameMenuInventory">
        {filledInventorySlots.concat(emptyInventorySlots)}
      </div>
    </div>
  );
}

export default GameMenuInventory;
