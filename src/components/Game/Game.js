/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import api from '../../api/api';

import {
  setCurrentEvent,
  setPlayer,
  setChoices,
  setLoading,
  setCurrentNPC,
  setHasNPC,
  setVisibleChoices,
  setBattleMode,
  setVisibleNPC,
  resetProgress,
  setEventProgressStatus,
} from '../../actions/game';

import './Game.scss';

import Loading from '../Loading/Loading';
import GamePlayerHealth from './GamePlayerHealth/GamePlayerHealth';
import GameScene from './GameScene/GameScene';
import GameLog from './GameLog/GameLog';
import GameMenu from './GameMenu/GameMenu';
import ScrollToTop from '../../functions/scrollToTop';
import BattleMode from './BattleMode/BattleMode';
// import GameMenus from './GameMenus/GameMenus';

function Game() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.game.loading);

  // Au lancement de cette page, on lance l'API sur la route "play"
  // Cela va nous permettre de récupérer l'événement (événement de DEPART)
  // avec toutes ses données et ses choix
  useEffect(() => {
    dispatch(setLoading(true));
    api.get('/play')
      .then((response) => {
        // console.log(response);
        const eventAPI = response.data.currentEvent;
        const playerAPI = response.data.player;

        // ! A SUPPRIMER POUR LA PROD (fixtures)
        // let path = `${process.env.REACT_APP_ASSETS_BASE}`;
        // let playerAPIpicture = ''; // Initialisation avec une chaîne vide par défaut

        // if (playerAPI && playerAPI.picture && playerAPI.picture.path) {
        //   playerAPIpicture = `${path}${playerAPI.picture.path}`;
        // } else {
        //   path = '';
        //   playerAPIpicture = 'https://picsum.photos/200/200';
        // }

        // ! A REPRENDRE POUR LA PROD (données réelles)
        const path = `${process.env.REACT_APP_ASSETS_BASE}`;
        const playerAPIpicture = `${path}${playerAPI.picture.path}`;

        dispatch(setCurrentEvent(eventAPI));
        dispatch(setPlayer(
          playerAPI.id,
          playerAPI.name,
          playerAPIpicture,
          playerAPI.health,
          playerAPI.maxHealth,
          playerAPI.defense,
          playerAPI.dexterity,
          playerAPI.intelligence,
          playerAPI.karma,
          playerAPI.strength,
          playerAPI.item,
          playerAPI.progress
        ));

        const firstChoice = {
          nextEventId: response.data.choices[0].nextEventId,
          content: `${response.data.choices[0].ending} ${response.data.choices[0].nextEventOpening}`,
        };
        const secondChoice = {
          nextEventId: response.data.choices[1].nextEventId,
          content: `${response.data.choices[1].ending} ${response.data.choices[1].nextEventOpening}`,
        };

        dispatch(setChoices([firstChoice, secondChoice]));
        dispatch(setCurrentNPC(0, '', '', '', false));
        dispatch(setHasNPC(false));
        dispatch(setVisibleNPC(false));
        dispatch(resetProgress());
        dispatch(setVisibleChoices(false));
        dispatch(setBattleMode(false));
        dispatch(setEventProgressStatus('normal'));
        dispatch(setLoading(false));
      })
      .catch((error) => console.log(error));
  }, []);

  // Une fois que les données de l'événement sont bien récupérées dans le state,
  // Je gère leur affichage ici :
  const eventTitle = useSelector((state) => state.game.currentEvent.title);
  const eventPictureSrc = useSelector((state) => state.game.currentEvent.picture);
  const eventDescription = useSelector((state) => state.game.currentEvent.description);
  const npcName = useSelector((state) => state.game.currentNPC.name);
  const npcDescription = useSelector((state) => state.game.currentNPC.description);
  const path = `${process.env.REACT_APP_ASSETS_BASE}`;
  const eventPicture = `${path}${eventPictureSrc}`;

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="Game">
      <ScrollToTop trigger={eventTitle} />
      <GamePlayerHealth />
      <div className="Game-flexSA">
        <div className="Game-left">
          <h1 className="Game-Eventtitle">{eventTitle}</h1>
          <GameScene picture={eventPicture} eventName={eventTitle} />
          <GameMenu />
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
