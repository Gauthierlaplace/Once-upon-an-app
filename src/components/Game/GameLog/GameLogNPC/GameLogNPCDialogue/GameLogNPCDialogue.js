import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../../api/api';

import './GameLogNPCDialogue.scss';

import { setHeroStatus } from '../../../../../actions/game';

function GameLogNPCDialogue() {
  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.game.dialogue.sentence);
  const answers = useSelector((state) => state.game.dialogue.answers);

  const handleClickOnEffect = (effectId) => {
    // console.log('fonction handleClickOnEffect lancée');

    api.get(`/event/effect/${effectId}`)
      .then((response) => {
        // console.log(response.data);
        const playerAPI = response.data.player;
        dispatch(setHeroStatus(playerAPI.health));
        // TODO gérer la disparition des answers et afficher la réponse du pnj
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="GameLogNPCDialogue">
      <h2 className="GameLogNPCDialogue-content">{sentence}</h2>
      <div>
        {answers.map((answer) => (
          <button
            type="button"
            className="GameLogNPCDialogue-button"
            key={answer.effectId}
            onClick={() => handleClickOnEffect(answer.effectId)}
          >
            <p>
              {answer.answer}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameLogNPCDialogue;
