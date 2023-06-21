
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
} from '../../../../actions/game';

function GameLogChoices() {
  const [loading, setLoading] = useState(false);
  const choices = useSelector((state) => state.game.choices);

  const dispatch = useDispatch();

  // Le clic sur un des deux choix proposés renvoie vers l'événement suivant
  // (route api/event/roll/id-du-prochain-event)
  const handleClickOnNextEvent = (nextEventId) => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => console.log(error));
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
