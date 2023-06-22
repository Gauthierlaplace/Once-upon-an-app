/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import api from '../../api/api';

import {
  setCurrentEvent,
  setCurrentNPC,
  setChoices,
  setHasNPC,
} from '../../actions/game';

import './Game.scss';

import Loading from '../Loading/Loading';
import GamePlayerHealth from './GamePlayerHealth/GamePlayerHealth';
import GameScene from './GameScene/GameScene';
import GameLog from './GameLog/GameLog';
import GameMenus from './GameMenus/GameMenus';

function Game() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const currentEventCode = useSelector((state) => state.game.currentEvent.code_event);

  // Au lancement de cette page, on lance l'API sur la route "play"
  // Cela va nous permettre de récupérer l'événement (événement de DEPART)
  // avec toutes ses données et ses choix
  useEffect(() => {
    api.get('/play')
      .then((response) => {
        const eventAPI = response.data.currentEvent;
        dispatch(setCurrentEvent(
          eventAPI.id,
          eventAPI.title,
          eventAPI.description,
          eventAPI.picture
        ));

        const firstChoice = {
          nextEventId: response.data.choices[0].nextEventId,
          content: `${response.data.choices[0].ending} ${response.data.choices[0].nextEventOpening}`,
        };
        const secondChoice = {
          nextEventId: response.data.choices[1].nextEventId,
          content: `${response.data.choices[1].ending} ${response.data.choices[1].nextEventOpening}`,
        };

        dispatch(setHasNPC(false));
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
  const npcName = useSelector((state) => state.game.currentNPC.name);
  const npcDescription = useSelector((state) => state.game.currentNPC.description);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="Game">
      <GamePlayerHealth />

      <div className="Game-flexSA">
        <div className="Game-left">

          <h1 className="Game-Eventtitle">{eventTitle}</h1>
          <GameScene picture={eventPicture} npcName={npcName} />
          <GameMenus />
        </div>

        <div className="Game-right">
          <h1 className="Game-Logtitle">Journal</h1>
          <GameLog
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
