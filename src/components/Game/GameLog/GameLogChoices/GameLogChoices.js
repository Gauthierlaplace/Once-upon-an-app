/* eslint-disable no-console */

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GameLogChoices.scss';
import api from '../../../../api/api';

import Loading from '../../../Loading/Loading';
import {
  setCurrentEvent,
  setChoices,
  setVisibleNPC,
  setVisibleChoices,
  incrementProgress,
} from '../../../../actions/game';

function GameLogChoices() {
  const [loading, setLoading] = useState(false);
  const choices = useSelector((state) => state.game.choices);
  const progress = useSelector((state) => state.game.progress);

  const dispatch = useDispatch();

  // Cette route sera appelée si le compteur progress est en-dessous de notre limite
  const getEventRollFromAPI = (nextEventId) => {
    api.get(`/event/roll/${nextEventId}`)
      .then((response) => {
        const eventAPI = response.data.currentEvent;
        dispatch(setCurrentEvent(
          eventAPI.id,
          eventAPI.title,
          eventAPI.description,
          eventAPI.picture,
        ));

        // La concaténation du current-ending + next-opening est gérée ici :
        const firstChoice = {
          nextEventId: response.data.choices[0].nextEventId,
          content: `${response.data.choices[0].ending} ${response.data.choices[0].nextEventOpening}`,
        };
        const secondChoice = {
          nextEventId: response.data.choices[1].nextEventId,
          content: `${response.data.choices[1].ending} ${response.data.choices[1].nextEventOpening}`,
        };

        dispatch(setChoices(firstChoice, secondChoice));
        dispatch(setVisibleNPC(false));
        dispatch(setVisibleChoices(false));
      })
      .catch((error) => console.log(error));
  };

  // Cette route sera appelée si le compteur progress est supérieur ou égal à notre limite
  const getLastEventFromAPI = (nextEventId) => {
    api.get(`/event/last/${nextEventId}`)
      .then((response) => {
        const eventAPI = response.data.currentEvent;
        dispatch(setCurrentEvent(
          eventAPI.id,
          eventAPI.title,
          eventAPI.description,
          eventAPI.picture,
        ));

        // La concaténation du current-ending + next-opening est gérée ici :
        // const firstChoice = {
        //   nextEventId: response.data.choices[0].nextEventId,
        //   content: `${response.data.choices[0].ending} ${response.data.choices[0].nextEventOpening}`,
        // };
        // const secondChoice = {
        //   nextEventId: response.data.choices[1].nextEventId,
        //   content: `${response.data.choices[1].ending} ${response.data.choices[1].nextEventOpening}`,
        // };

        // dispatch(setChoices(firstChoice, secondChoice));
        // dispatch(setVisibleNPC(false));
        // dispatch(setVisibleChoices(false));
      })
      .catch((error) => console.log(error));
  };

  // Le clic sur un des deux choix proposés renvoie vers l'événement suivant
  // (route api/event/roll/id-du-prochain-event)
  const handleClickOnNextEvent = (nextEventId) => {
    // Todo réfléchir à déplacer l'incrémentation du progrès pour éviter le fast click (triche)
    dispatch(incrementProgress());
    setLoading(true);
    if (progress <= 3) {
      getEventRollFromAPI(nextEventId);
    } else {
      getLastEventFromAPI(nextEventId);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="GameLogChoices">
      <h2 className="GameLogChoices-content">A vous de jouer :</h2>
      <div>
        {choices.map((choice) => (
          <button
            type="button"
            className="GameLogChoices-button"
            key={choice.nextEventId}
            onClick={() => handleClickOnNextEvent(choice.nextEventId)}
          >
            <p>
              {choice.content}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameLogChoices;
