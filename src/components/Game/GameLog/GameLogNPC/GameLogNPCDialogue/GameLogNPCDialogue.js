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
  setBattleMode,
  setLoading,
  setEventProgressStatus,
  setNPCStatus,
  setAttacker,
  setFightID,
  setPlayer,
  setEffectReadByPlayer,
} from '../../../../../actions/game';
import Loading from '../../../../Loading/Loading';

function GameLogNPCDialogue() {
  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.game.dialogue.sentence);
  const answers = useSelector((state) => state.game.dialogue.answers);
  const loading = useSelector((state) => state.game.loading);
  const isHostile = useSelector((state) => state.game.currentNPC.isHostile);
  const npcId = useSelector((state) => state.game.currentNPC.id);
  const playerHealth = useSelector((state) => state.game.player.health);
  const [visibleDialogue, setVisibleDialogue] = useState(true);

  const handleClickOnEffect = (effectId) => {
    dispatch(setLoading(true));

    api.get(`/event/effect/${effectId}`)
      .then((response) => {
        // Quoi qu'il arrive, on actualise la vie du héros (tombe à zéro si gameOver)
        const playerAPI = response.data.player;
        const path = `${process.env.REACT_APP_ASSETS_BASE}`;
        const playerAPIpicture = `${path}${playerAPI.picture.path}`;

        dispatch(setHeroStatus(playerAPI.health));
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
          playerAPI.item
        ));
        dispatch(setEffectReadByPlayer(true));

        // Si l'effet a tué le joueur
        // On affiche un unique bouton de choix vers le deathEvent
        if (response.data.GameOver) {
          dispatch(setEventProgressStatus('death'));

          const eventOpening = response.data.GameOver.opening;
          const onlyChoice = {
            nextEventId: response.data.GameOver.id,
            content: `${eventOpening}`,
          };

          dispatch(setChoices([onlyChoice]));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  const handleClickOnHostile = (idNpc, idEffect) => {
    dispatch(setLoading(true));

    api.get(`/event/fight/${idNpc}/attack/${idEffect}`)
      .then((response) => {
        // On lance le composant combat en passant le Battlemode à true
        // Quoi qu'il arrive, on actualise la vie du héros (tombe à zéro si gameOver)
        const API = response.data;
        console.log(response.data);
        dispatch(setHeroStatus(API.player.health));

        if (API.player.health === 0) {
          console.log('enter prefight gameover situation');
          dispatch(setEventProgressStatus('death'));

          const eventOpening = response.data.GameOver.opening;
          const onlyChoice = {
            nextEventId: response.data.GameOver.id,
            content: `${eventOpening}`,
          };
          dispatch(setEffectReadByPlayer(true));
          dispatch(setChoices([onlyChoice]));
          dispatch(setVisibleChoices(true));
        } else {
          dispatch(setNPCStatus(API.npc.npcHealth, API.npc.npcMaxHealth));
          dispatch(setAttacker(API.attacker));
          dispatch(setFightID(API.attackerFightId));
        }
        // Si l'effet a tué le joueur
        // On affiche un unique bouton de choix vers le deathEvent
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  if (loading) {
    return <Loading />;
  }

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
                if (isHostile) {
                  handleClickOnHostile(npcId, answer.effectId);
                  // dispatch(setBattleMode(true));
                } else {
                  handleClickOnEffect(answer.effectId);
                }
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
