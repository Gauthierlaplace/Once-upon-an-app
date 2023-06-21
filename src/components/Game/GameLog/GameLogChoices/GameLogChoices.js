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
  setEventProgressStatus,
} from '../../../../actions/game';

function GameLogChoices() {
  const [loading, setLoading] = useState(false);
  const choices = useSelector((state) => state.game.choices);
  const progress = useSelector((state) => state.game.progress);
  const eventProgressStatus = useSelector((state) => state.game.eventProgressStatus);

  const dispatch = useDispatch();

  // Cette route sera appelée si le compteur progress est en-dessous de notre limite
  const getEventRollFromAPI = (nextEventId) => {
    console.log('fonction getEventRollFromAPI lancée');

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
    console.log('fonction getLastEventFromAPI lancée');

    api.get(`/event/last/${nextEventId}`)
      .then((response) => {
        const eventAPI = response.data.currentEvent;
        dispatch(setCurrentEvent(
          eventAPI.id,
          eventAPI.title,
          eventAPI.description,
          eventAPI.picture,
        ));

        console.log(response.data);
        const eventEnding = response.data.currentEventEnding;

        // La concaténation du current-ending + next-opening est gérée ici :
        const firstChoice = {
          nextEventId: response.data.BossA.Id,
          content: `${eventEnding} ${response.data.BossA.Opening}`,
        };
        const secondChoice = {
          nextEventId: response.data.BossB.Id,
          content: `${eventEnding} ${response.data.BossB.Opening}`,
        };

        dispatch(setChoices(firstChoice, secondChoice));
        dispatch(setVisibleNPC(false));
        dispatch(setVisibleChoices(false));
      })
      .catch((error) => console.log(error));
  };

  const manageEventProgressStatus = () => {
    // le progressMax est l'étape ultime (fin du jeu)
    // Dans notre exemple (max=6), si progress vaut 6 c'est gagné
    // S'il vaut 4, c'est juste avant la fin du biome
    // S'il vaut 3, c'est juste avant le boss
    // S'il vaut 2, c'est juste avant last
    // S'il vaut <2 (0 ou 1) c'est normal.

    const progressMax = 6;

    if (progress === progressMax - 1) {
      dispatch(setEventProgressStatus('beforeGameEnd'));
    }
    if (progress === progressMax - 2) {
      dispatch(setEventProgressStatus('beforeBiomeEnd'));
    }
    if (progress === progressMax - 3) {
      dispatch(setEventProgressStatus('beforeBoss'));
    }
    if (progress === progressMax - 4) {
      dispatch(setEventProgressStatus('beforeLast'));
    }
    if (progress < progressMax - 4) {
      dispatch(setEventProgressStatus('normal'));
    }
  };

  // Le clic sur un des deux choix proposés renvoie vers l'événement suivant
  // (route api/event/roll/id-du-prochain-event)
  const handleClickOnNextEvent = (nextEventId) => {
    // Todo réfléchir à déplacer l'incrémentation du progrès pour éviter le fast click (triche)
    dispatch(incrementProgress());

    manageEventProgressStatus();

    setLoading(true);

    // Todo appeler une route différente selon le eventProgressStatus
    // L'eventProgressStatus peut prendre les valeurs :
    // 'normal', 'beforeLast', 'beforeBoss', 'beforeBiomeEnd', 'beforeGameEnd'

    if (eventProgressStatus === 'normal') {
      getEventRollFromAPI(nextEventId);
    }

    if (eventProgressStatus === 'beforeLast') {
      getLastEventFromAPI(nextEventId);
    }

    // Todo continuer...

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
