import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

import {
  setCurrentEvent,
  setChoices,
} from '../../actions/game';

import './Game.scss';

import PlayerHealth from './GamePlayerHealth/GamePlayerHealth';
import Scene from './GameScene/GameScene';
import Log from './GameLog/GameLog';
import Menus from './GameMenus/GameMenus';

function Game() {
  const token = useSelector((state) => state.user.token);
  const REACT_APP_API_BASE = `${process.env.REACT_APP_API_BASE}`;
  const dispatch = useDispatch();

  // Au lancement de cette page, on lance l'API sur la route "play"
  // Cela va nous permettre de récupérer l'événement (événement de DEPART)
  // avec toutes ses données et ses choix
  useEffect(() => {
    axios.get(`${REACT_APP_API_BASE}play`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
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
