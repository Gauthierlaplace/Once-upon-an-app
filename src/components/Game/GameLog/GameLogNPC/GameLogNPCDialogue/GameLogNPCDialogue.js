import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import api from '../../../../../api/api';

import './GameLogNPCDialogue.scss';

import {
  setVisibleChoices,
  setHeroStatus,
  setAnswerAndDescriptionInLog,
  setVisibleLogDialogue,
  setChoices,
  setLoading,
  setEventProgressStatus
} from '../../../../../actions/game';

function GameLogNPCDialogue() {
  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.game.dialogue.sentence);
  const answers = useSelector((state) => state.game.dialogue.answers);
  const [visibleDialogue, setVisibleDialogue] = useState(true);

  const handleClickOnEffect = (effectId) => {
    api.get(`/event/effect/${effectId}`)
      .then((response) => {
        // Quoi qu'il arrive, on actualise la vie du héros (tombe à zéro si gameOver)
        const playerAPI = response.data.player;
        dispatch(setHeroStatus(playerAPI.health));

        // Si l'effet a tué le joueur
        // On affiche un unique bouton de choix vers le deathEvent
        if (response.data.GameOver) {
          dispatch(setEventProgressStatus('death'));

          const eventOpening = response.data.GameOver.opening;
          const onlyChoice = {
            nextEventId: 18,
            content: `${eventOpening}`,
          };

          dispatch(setChoices([onlyChoice]));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <div className="GameLogNPCDialogue">

      {visibleDialogue && (<h2 className="GameLogNPCDialogue-content">{sentence}</h2>)}

      {visibleDialogue && (
        <div>
          {answers.map((answer) => (
            <button
              type="button"
              className="GameLogNPCDialogue-button"
              key={answer.effectId}
              onClick={() => {
                handleClickOnEffect(answer.effectId);
                dispatch(setVisibleChoices(true));
                dispatch(setAnswerAndDescriptionInLog(
                  sentence,
                  answer.answer,
                  answer.effectDescription
                ));
                setVisibleDialogue(false);
                dispatch(setVisibleLogDialogue(true));
              }}
            >
              <p>
                {answer.answer}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default GameLogNPCDialogue;
