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

  // On surveille le code du currentEvent, et on check les infos dès qu'il change
  // Cela va nous permettre notamment de savoir si currentEvent a un NPC ou non
  useEffect(() => {
    if (currentEventCode) {
      api.get(`/event/roll/${currentEventCode}`)
        .then((response) => {
          // console.log(response.data.npcCurrentEvent);
          // Dans la partie ci-dessous, nous vérifions la data npcCurrentEvent
          // S'il n'y a pas de NPC, on reçoit un tableau vide (length != 0 donnera false)
          // S'il y a un NPC, on reçoit un tableau non-vide (length != 0 donnera true)
          const npcAPI = response.data.npcCurrentEvent;
          const hasNPC = npcAPI.length !== 0; // booléen qui dit si NPC ou non
          dispatch(setHasNPC(hasNPC));

          // S'il y a un NPC, on dispatche ses infos
          if (hasNPC) {
            dispatch(setCurrentNPC(
              npcAPI.npcName,
              npcAPI.npcDescription,
              npcAPI.picture
            ));
          // S'il y a un NPC, on remet à zéro les infos NPC
          } else {
            dispatch(setCurrentNPC('', '', ''));
          }

          const npcDialogue = response.data.npcCurrentEvent.dialogue[0];
          npcDialogue.map((element) => console.log(element));
        })
        .catch((error) => console.log(error));
    }
  }, [currentEventCode]);

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
