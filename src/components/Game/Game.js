import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import api from '../../api/api';

import {
  setCurrentEvent,
  setChoices,
} from '../../actions/game';

import './Game.scss';

import Loading from '../Loading/Loading';
import PlayerHealth from './GamePlayerHealth/GamePlayerHealth';
import Scene from './GameScene/GameScene';
import Log from './GameLog/GameLog';
import Menus from './GameMenus/GameMenus';

function Game() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // Au lancement de cette page, on lance l'API sur la route "play"
  // Cela va nous permettre de récupérer l'événement (événement de DEPART)
  // avec toutes ses données et ses choix
  useEffect(() => {
    api.get('play')
      .then((response) => {
        const eventAPI = response.data.currentEvent;
        dispatch(setCurrentEvent(
          eventAPI.id,
          eventAPI.title,
          eventAPI.description,
          eventAPI.picture,
        ));

        const firstChoice = {
          nextEventId: response.data.choices[0].nextEventId,
          content: `${response.data.choices[0].ending} ${response.data.choices[0].nextEventOpening}`,
        };
        const secondChoice = {
          nextEventId: response.data.choices[1].nextEventId,
          content: `${response.data.choices[1].ending} ${response.data.choices[1].nextEventOpening}`,
        };

        dispatch(setChoices(firstChoice, secondChoice));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // Une fois que les données de l'événement sont bien récupérées dans le state,
  // Je gère leur affichage ici :
  const eventTitle = useSelector((state) => state.game.currentEvent.title);
  const eventPicture = useSelector((state) => state.game.currentEvent.picture);
  const eventDescription = useSelector((state) => state.game.currentEvent.description);
  const npcName = useSelector((state) => state.game.currentNpc.name);
  const npcDescription = useSelector((state) => state.game.currentNpc.description);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="Game">
      <PlayerHealth />

      <div className="Game-flexSB">
        <div className="Game-left">

          <h1 className="Game-Eventtitle">{eventTitle}</h1>
          <Scene picture={eventPicture} npcName={npcName} />
          <Menus />
        </div>

        <div className="Game-right">
          <h1 className="Game-Logtitle">Journal</h1>
          <Log
            eventDescription={eventDescription}
            npcName={npcName}
            npcDescription={npcDescription}
          />
        </div>
      </div>

    </div>
  );
}

export default Game;
