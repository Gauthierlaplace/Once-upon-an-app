import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

import {
  setCurrentEvent,
} from '../../actions/game';

import './Game.scss';

import PlayerHealth from './GamePlayerHealth/GamePlayerHealth';
import Scene from './GameScene/GameScene';
import Log from './GameLog/GameLog';
import Menus from './GameMenus/GameMenus';

function Game() {
  // TODO quand ça marchera, aller chercher le token dans le state
  // const token = useSelector((state) => state.user.token);
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODY5MjEwMzksImV4cCI6MTY4Njk4NTgzOSwicm9sZXMiOlsiUk9MRV9HQU1FTUFTVEVSIiwiUk9MRV9QTEFZRVIiLCJST0xFX0FETUlOIl0sInVzZXJuYW1lIjoibWFyaW5lQGdhbWVNYXN0ZXIuY29tIn0.ypFhfWnOI4TQQcSidXj9nccVVMGyysYCY7vhTMrYRd52tbwACn5R_qWBE8pm7EwRkbIlLbHEuFQJg09E26aVwJmt2XTyPVF0eptP8EayDlzXRusPzsNBfODnTu9XC_U9Ntigi9ugEr-w0CKy4ZHlnm4d0wjiLCpA26d6ih8oOg2ZyWfhhn3i7l2gjRdgZt0_uqJh-mi35e0gXXbRv5m-YTBjN3_xgXS4zn0mBpJX0V-4HM5oKwQ6cwqNzxFMM8vsZaosfKxxZsEWU3la7pHmqGE_fQIXsu5BW9LE5N2WECKgODnL5-aWAwZi3_DbSrwYE6g36i727HZUR_nW08Fpcg';
  const REACT_APP_API_BASE = `${process.env.REACT_APP_API_BASE}`;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${REACT_APP_API_BASE}play`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then((response) => {
        console.log('choices', response.data.choices);
        const eventAPI = response.data.currentEvent;
        console.log(eventAPI);
        dispatch(setCurrentEvent(
          eventAPI.id,
          eventAPI.title,
          eventAPI.description,
          eventAPI.picture,
        ));
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
