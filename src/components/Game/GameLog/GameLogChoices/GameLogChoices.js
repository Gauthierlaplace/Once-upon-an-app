import { useSelector, useDispatch } from 'react-redux';
import './GameLogChoices.scss';
import axios from 'axios';

import {
  setCurrentEvent,
  setChoices,
} from '../../../../actions/game';

function GameLogChoices() {
  const token = useSelector((state) => state.user.token);
  const REACT_APP_API_BASE = `${process.env.REACT_APP_API_BASE}`;
  const choices = useSelector((state) => state.game.choices);

  const dispatch = useDispatch();

  const handleClickOnNextEvent = (nextEventId) => {
    axios.get(`${REACT_APP_API_BASE}event/roll/${nextEventId}`, {
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
  };

  return (
    <div className="GameLogChoices">
      <p className="GameLogChoices-content">A vous de jouer :</p>
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
