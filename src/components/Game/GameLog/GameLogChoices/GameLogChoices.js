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
  setProgress,
  setEventProgressStatus,
  setVisibleLogDialogue,
  setAnswerAndDescriptionInLog,
  setLoading,
  setBattleMode
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
    // console.log(eventAPI);
    dispatch(setCurrentEvent(eventAPI));
    dispatch(setProgress(response.data.progress));
  };

  // Fonction de gestion des éventuels NPC
  const npcManagement = (response) => {
    const npcAPI = response.data.npcCurrentEvent;
    // console.log(npcAPI);
    const path = `${process.env.REACT_APP_ASSETS_BASE}`;
    const npcAPIpicture = `${path}${npcAPI.picture}`;

    // Dans la partie ci-dessous, nous vérifions la data npcCurrentEvent
    // S'il n'y a pas de NPC, on reçoit un tableau vide (length != 0 donnera false)
    // S'il y a un NPC, on reçoit un tableau non-vide (length != 0 donnera true)
    const hasNPC = npcAPI.length !== 0; // booléen qui dit si NPC ou non
    dispatch(setHasNPC(hasNPC));

    // S'il y a un NPC, on dispatche ses infos
    if (hasNPC) {
      dispatch(setCurrentNPC(
        npcAPI.npcId,
        npcAPI.npcName,
        npcAPI.npcDescription,
        npcAPIpicture,
        npcAPI.hostility
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
      dispatch(setCurrentNPC(0, '', '', '', false));
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
    api.get(`/event/${nextEventId}`)
      .then((response) => {
        console.log(response);
        currentEventManagement(response);
        npcManagement(response);
        choicesManagementRoll(response);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  // Cette route sera appelée si le compteur progress est supérieur ou égal à notre limite
  const getLastEventFromAPI = (nextEventId) => {
    // console.log('fonction getLastEventFromAPI lancée');

    api.get(`/event/${nextEventId}`)
      .then((response) => {
        console.log(response);
        currentEventManagement(response);
        npcManagement(response);
        choicesManagementLast(response);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  const getBossFromAPI = (nextEventId) => {
    // console.log('fonction getBossFromAPI lancée');

    api.get(`/event/${nextEventId}`)
      .then((response) => {
        console.log(response);
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

  // const getBiomeEndFromAPI = (nextEventId) => {
  //   // console.log('fonction biomeEndFromAPI lancée');

  //   api.get(`/event/${nextEventId}`)
  //     .then((response) => {
  //       console.log(response);
  //       currentEventManagement(response);
  //       npcManagement(response);

  //       const eventEnding = response.data.currentEventEnding;
  //       const onlyChoice = {
  //         nextEventId: response.data.EndGame.Id,
  //         content: `${eventEnding} ${response.data.EndGame.Opening}`,
  //       };

  //       dispatch(setChoices([onlyChoice]));
  //       dispatch(setVisibleNPC(false));
  //       dispatch(setVisibleChoices(false));
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => dispatch(setLoading(false)));
  // };

  const getNextBiomeFromAPI = (nextEventId) => {
    console.log('fonction getNextBiomeFromAPI lancée');

    api.get(`/event/${nextEventId}`)
      .then((response) => {
        console.log(response);
        currentEventManagement(response);
        npcManagement(response);

        // Si EndGame est présent, gérer la fin du jeu
        if (response.data.EndGame) {
          const eventEnding = response.data.currentEventEnding;
          const onlyChoice = {
            nextEventId: response.data.EndGame.Id,
            content: `${eventEnding} ${response.data.EndGame.Opening}`,
          };

          dispatch(setChoices([onlyChoice]));
          dispatch(setVisibleNPC(false));
          dispatch(setVisibleChoices(false));
        } else {
          const eventEnding = response.data.currentEventEnding;
          const onlyChoice = {
            nextEventId: response.data.nextBiomeStarterEvent.id,
            content: `${eventEnding} ${response.data.nextBiomeStarterEvent.opening}`,
          };

          dispatch(setChoices([onlyChoice]));
          dispatch(setVisibleNPC(false));
          dispatch(setVisibleChoices(false));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  // const getBackToRollFromAPI = (nextEventId) => {
  //   api.get(`/event/${nextEventId}`)
  //     .then((response) => {
  //       console.log('fonction getBackToRollFromAPI lancée');
  //       console.log(response);
  //       currentEventManagement(response);
  //       npcManagement(response);
  //       choicesManagementRoll(response);
  //       dispatch(setVisibleChoices(false));
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => dispatch(setLoading(false)));
  // };

  const getGameOverFromAPI = (nextEventId) => {
    api.get(`/event/death/${nextEventId}`)
      .then((response) => {
        console.log(response);
        currentEventManagement(response);
        npcManagement(response);

        dispatch(setChoices([]));
        dispatch(setVisibleNPC(false));
        dispatch(setVisibleChoices(false));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  // const getGameEndFromAPI = (nextEventId) => {
  //   // console.log('fonction gameEndFromAPI lancée');

  //   api.get(`/event/${nextEventId}`)
  //     .then((response) => {
  //       currentEventManagement(response);
  //       npcManagement(response);

  //       dispatch(setChoices([]));
  //       dispatch(setVisibleNPC(false));
  //       dispatch(setVisibleChoices(false));
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => dispatch(setLoading(false)));
  // };

  const manageEventProgressStatus = () => {
    if (playerHealth > 0) {
      // Afin d'ajuster les actions à réaliser suivant le progress transmis par l'API,
      // on se sert du eventProgressStatus

      if (progress === 11) {
        dispatch(setEventProgressStatus('gameEnd'));
      }
      if (progress === 9) {
        dispatch(setEventProgressStatus('beforeNextBiome'));
      }
      if (progress === 8) {
        dispatch(setEventProgressStatus('beforeBiomeEnd'));
      }
      if (progress === 7) {
        dispatch(setEventProgressStatus('beforeBoss'));
      }
      if (progress === 6) {
        dispatch(setEventProgressStatus('beforeLast'));
      }
      if (progress < 6) {
        dispatch(setEventProgressStatus('normal'));
      }
    } else {
      dispatch(setEventProgressStatus('death'));
    }
  };

  // Le clic sur un des deux choix proposés renvoie vers l'événement suivant
  // (route api/event/roll/id-du-prochain-event)
  const handleClickOnNextEvent = (nextEventId) => {
    dispatch(setLoading(true));

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
      getNextBiomeFromAPI(nextEventId);
    }

    if (eventProgressStatus === 'beforeNextBiome') {
      getEventRollFromAPI(nextEventId);
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
        {(eventProgressStatus !== 'death' && lastEventEnding.length > 0)
          ? lastEventEnding : ''}
      </h2>

      <h2 className="GameLogChoices-content">
        {(eventProgressStatus === 'death') ? 'Ce dernier coup vous est fatal...' : 'À vous de jouer :'}
      </h2>
      {progress !== 11 && (
        <div>
          {choices.map((choice) => (
            <button
              type="button"
              className="GameLogChoices-button"
              key={choice.nextEventId}
              onClick={() => {
                handleClickOnNextEvent(choice.nextEventId);
                dispatch(setBattleMode(false));
              }}
            >
              <p>
                {choice.content}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default GameLogChoices;
