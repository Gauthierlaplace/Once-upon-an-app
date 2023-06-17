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
  // TODO quand ça marchera, aller chercher le token dans le state
  // const token = useSelector((state) => state.user.token);
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODY5ODYyOTgsImV4cCI6MTY4NzA1MTA5OCwicm9sZXMiOlsiUk9MRV9HQU1FTUFTVEVSIiwiUk9MRV9QTEFZRVIiXSwidXNlcm5hbWUiOiJtYXJpbmVAZ2FtZU1hc3Rlci5jb20ifQ.Y83ISzTjEByNQ2FIQlYHR5OraJCSNH8mdelSVw28_9uctTTsz9xuEg_MTZSxLHLuONefbdjqokDUQGTvZJnCKVrKDRTbe8sg9Jv_juH66NvcqRwae9hj-JRScZKMcEWTTJr_zjB061TWvnIe3ydVBRAVjItbMR7luhjp7PHb6OK4DEYA-3coTm4u9Efoi6MyP3IWSoI-V2Qy5sarcf7Us1gvWubqQcip9YFhFn_mwo5DfJZ-WUvi8khgjQgMrHOFEQeKErPhrZvjeEj5ii7zc0nmFgRQK2i0rDm2nG-Y43jb3_RTGstuyib2fZXVi9FvxVHxoOHo5jr7REN3UcGp8g';
  const REACT_APP_API_BASE = `${process.env.REACT_APP_API_BASE}`;
  const dispatch = useDispatch();

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
