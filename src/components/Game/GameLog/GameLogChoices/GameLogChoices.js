/* eslint-disable no-console */

// TODO setCurrentEvent, envoyer l'event au lieu d'envoyer l'ID, le title etc

import { useSelector, useDispatch } from 'react-redux';
import './GameLogChoices.scss';
import api from '../../../../api/api';

import Loading from '../../../Loading/Loading';

import {
  setCurrentEvent,
  setChoices,
  setLastEventEnding,
  setHasNPC,
  setCurrentNPC,
  setDialogueAndEffects,
  setVisibleNPC,
  setVisibleChoices,
  incrementProgress,
  setEventProgressStatus,
  setVisibleLogDialogue,
  setAnswerAndDescriptionInLog,
  setLoading
} from '../../../../actions/game';

function GameLogChoices({
  setVisibleButtonFollowToShowNPC,
  setVisibleButtonFollowToShowDialogue,
  setVisibleButtonFollowToShowChoices,
}) {
  const choices = useSelector((state) => state.game.choices);
  const progress = useSelector((state) => state.game.progress);
  const eventProgressStatus = useSelector((state) => state.game.eventProgressStatus);
  const lastEventEnding = useSelector((state) => state.game.lastEventEnding);
  const loading = useSelector((state) => state.game.loading);
  const playerHealth = useSelector((state) => state.game.player.health);

  const dispatch = useDispatch();

  // Afin d'éviter les doublons
  // Fonction de gestion du currentEvent
  const currentEventManagement = (response) => {
    const eventAPI = response.data.currentEvent;
    dispatch(setCurrentEvent(eventAPI));
  };

  // Fonction de gestion des éventuels NPC
  const npcManagement = (response) => {
    const npcAPI = response.data.npcCurrentEvent;
    // Dans la partie ci-dessous, nous vérifions la data npcCurrentEvent
    // S'il n'y a pas de NPC, on reçoit un tableau vide (length != 0 donnera false)
    // S'il y a un NPC, on reçoit un tableau non-vide (length != 0 donnera true)
    const hasNPC = npcAPI.length !== 0; // booléen qui dit si NPC ou non
    dispatch(setHasNPC(hasNPC));

    // S'il y a un NPC, on dispatche ses infos
    if (hasNPC) {
      dispatch(setCurrentNPC(
        npcAPI.npcName,
        npcAPI.npcDescription,
        npcAPI.picture
      ));

      // Gestion des dialogues
      const npcDialogueAPI = npcAPI.dialogues.dialogue1;
      const firstAnswer = {
        answer: npcDialogueAPI.answer1,
        effectId: npcDialogueAPI.effect1.id,
        effectDescription: npcDialogueAPI.effect1.description,
      };
      const secondAnswer = {
        answer: npcDialogueAPI.answer2,
        effectId: npcDialogueAPI.effect2.id,
        effectDescription: npcDialogueAPI.effect2.description,
      };

      dispatch(setDialogueAndEffects(npcDialogueAPI.dialogue, [firstAnswer, secondAnswer]));

    // S'il n'y a pas de NPC, on remet à zéro les infos NPC
    } else {
      dispatch(setCurrentNPC('', '', ''));
      dispatch(setDialogueAndEffects('', ['', '']));
    }

    // Je remet à zéro le dialogue, les réponses et les effets des éventuels précédents Events
    dispatch(setAnswerAndDescriptionInLog('', '', ''));
    dispatch(setVisibleLogDialogue(false));
  };

  // Fonctions de gestion des choix
  const choicesManagementRoll = (response) => {
    // La concaténation du current-ending + next-opening est gérée ici :
    const firstChoice = {
      nextEventId: response.data.choices[0].nextEventId,
      content: `${response.data.choices[0].ending} ${response.data.choices[0].nextEventOpening}`,
    };
    const secondChoice = {
      nextEventId: response.data.choices[1].nextEventId,
      content: `${response.data.choices[1].ending} ${response.data.choices[1].nextEventOpening}`,
    };

    dispatch(setChoices([firstChoice, secondChoice]));
    dispatch(setVisibleNPC(false));
    dispatch(setVisibleChoices(false));
  };

  const choicesManagementLast = (response) => {
    const eventEnding = response.data.currentEventEnding;

    // La concaténation du current-ending + next-opening est gérée ici :
    const firstChoice = {
      nextEventId: response.data.BossA.Id,
      content: response.data.BossA.Opening,
    };
    const secondChoice = {
      nextEventId: response.data.BossB.Id,
      content: response.data.BossB.Opening,
    };

    dispatch(setLastEventEnding(eventEnding));
    dispatch(setChoices([firstChoice, secondChoice]));
    dispatch(setVisibleNPC(false));
    dispatch(setVisibleChoices(false));
  };

  // Cette route sera appelée si le compteur progress est en-dessous de notre limite
  const getEventRollFromAPI = (nextEventId) => {
    console.log('fonction getEventRollFromAPI lancée');

    api.get(`/event/roll/${nextEventId}`)
      .then((response) => {
        currentEventManagement(response);
        npcManagement(response);
        choicesManagementRoll(response);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  // Cette route sera appelée si le compteur progress est supérieur ou égal à notre limite
  const getLastEventFromAPI = (nextEventId) => {
    console.log('fonction getLastEventFromAPI lancée');

    api.get(`/event/last/${nextEventId}`)
      .then((response) => {
        currentEventManagement(response);
        npcManagement(response);
        choicesManagementLast(response);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  const getBossFromAPI = (nextEventId) => {
    console.log('fonction getBossFromAPI lancée');

    api.get(`/event/boss/${nextEventId}`)
      .then((response) => {
        currentEventManagement(response);
        npcManagement(response);

        const eventEnding = response.data.currentEventEnding;
        const onlyChoice = {
          nextEventId: response.data.EndBiome.Id,
          content: `${eventEnding} ${response.data.EndBiome.Opening}`,
        };

        dispatch(setChoices([onlyChoice]));
        dispatch(setVisibleNPC(false));
        dispatch(setVisibleChoices(false));
        dispatch(setLastEventEnding(''));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  const getBiomeEndFromAPI = (nextEventId) => {
    console.log('fonction biomeEndFromAPI lancée');

    api.get(`/event/end/${nextEventId}`)
      .then((response) => {
        currentEventManagement(response);
        npcManagement(response);

        const eventEnding = response.data.currentEventEnding;
        const onlyChoice = {
          nextEventId: response.data.EndGame.Id,
          content: `${eventEnding} ${response.data.EndGame.Opening}`,
        };

        dispatch(setChoices([onlyChoice]));
        dispatch(setVisibleNPC(false));
        dispatch(setVisibleChoices(false));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  const getGameOverFromAPI = (nextEventId) => {
    api.get(`/event/death/${nextEventId}`)
      .then((response) => {
        currentEventManagement(response);
        npcManagement(response);

        dispatch(setChoices([]));
        dispatch(setVisibleNPC(false));
        dispatch(setVisibleChoices(false));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  const getGameEndFromAPI = (nextEventId) => {
    console.log('fonction gameEndFromAPI lancée');

    api.get(`/event/victory/${nextEventId}`)
      .then((response) => {
        currentEventManagement(response);
        npcManagement(response);

        dispatch(setChoices([]));
        dispatch(setVisibleNPC(false));
        dispatch(setVisibleChoices(false));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  const manageEventProgressStatus = () => {
    if (playerHealth > 0) {
      // le progressMax est l'étape ultime (fin du jeu)
      // Dans notre exemple (max=6), si progress vaut 6 c'est gagné
      // S'il vaut 4, c'est juste avant la fin du biome
      // S'il vaut 3, c'est juste avant le boss
      // S'il vaut 2, c'est juste avant last
      // S'il vaut <2 (0 ou 1) c'est normal.

      const progressMax = 4;

      if (progress === progressMax) {
        dispatch(setEventProgressStatus('gameEnd'));
      }
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
    } else {
      dispatch(setEventProgressStatus('death'));
    }
  };

  // Le clic sur un des deux choix proposés renvoie vers l'événement suivant
  // (route api/event/roll/id-du-prochain-event)
  const handleClickOnNextEvent = (nextEventId) => {
    // Todo réfléchir à déplacer l'incrémentation du progrès pour éviter le fast click (triche)
    dispatch(setLoading(true));

    dispatch(incrementProgress());

    manageEventProgressStatus();
    if (eventProgressStatus === 'normal') {
      getEventRollFromAPI(nextEventId);
    }

    if (eventProgressStatus === 'beforeLast') {
      getLastEventFromAPI(nextEventId);
    }

    if (eventProgressStatus === 'beforeBoss') {
      getBossFromAPI(nextEventId);
    }

    if (eventProgressStatus === 'beforeBiomeEnd') {
      getBiomeEndFromAPI(nextEventId);
    }

    if (eventProgressStatus === 'beforeGameEnd') {
      getGameEndFromAPI(nextEventId);
    }

    if (eventProgressStatus === 'death') {
      getGameOverFromAPI(nextEventId);
    }

    setVisibleButtonFollowToShowNPC(true);
    setVisibleButtonFollowToShowChoices(true);
    setVisibleButtonFollowToShowDialogue(true);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="GameLogChoices">
      <h2 className="GameLogChoices-last-event-ending">
        {(lastEventEnding.length > 0)
          ? lastEventEnding : ''}
      </h2>

      <h2 className="GameLogChoices-content">
        {(eventProgressStatus === 'death') ? 'Ce dernier coup vous est fatal...' : 'À vous de jouer :'}
      </h2>

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
