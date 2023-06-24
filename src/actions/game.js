export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
export const SET_CURRENT_NPC = 'SET_CURRENT_NPC';
export const SET_CHOICES = 'SET_CHOICES';
export const SET_LAST_EVENT_ENDING = 'SET_LAST_EVENT_ENDING';
export const SET_HAS_NPC = 'SET_HAS_NPC';
export const SET_DIALOGUE_AND_EFFECTS = 'SET_DIALOGUE_AND_EFFECTS';
export const SET_EFFECT = 'SET_EFFECT';
export const SET_VISIBLE_NPC = 'SET_VISIBLE_NPC';
export const SET_VISIBLE_CHOICES = 'SET_VISIBLE_CHOICES';
export const INCREMENT_PROGRESS = 'INCREMENT_PROGRESS';
export const RESET_PROGRESS = 'RESET_PROGRESS';
export const SET_EVENT_PROGRESS_STATUS = 'SET_EVENT_PROGRESS_STATUS';
export const SET_HERO_STATUS = 'SET_HERO_STATUS';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_ANSWER_AND_DESCRIPTION_IN_LOG = 'SET_ANSWER_AND_DESCRIPTION_IN_LOG';
export const SET_VISIBLE_LOG_DIALOGUE = 'SET_VISIBLE_LOG_DIALOGUE';

// Pour afficher l'événement actuel, on a déjà besoin d'avoir ses infos (id, titre, image, etc)
export const setCurrentEvent = (codeEvent, title, description, picture) => ({
  type: SET_CURRENT_EVENT,
  payload: {
    code_event: codeEvent,
    title: title,
    description: description,
    picture: picture,
  },
});

export const setCurrentNPC = (nameNPC, descriptionNPC, pictureNPC) => ({
  type: SET_CURRENT_NPC,
  payload: {
    name: nameNPC,
    description: descriptionNPC,
    picture: pictureNPC,
  },
});

export const setDialogueAndEffects = (
  dialogueSentence,
  [firstAnswer, secondAnswer]
) => ({
  type: SET_DIALOGUE_AND_EFFECTS,
  payload: {
    sentence: dialogueSentence,
    answers: [firstAnswer, secondAnswer]
  },
});

export const setChoices = (choicesArray) => ({
  type: SET_CHOICES,
  payload: {
    choices: choicesArray,
  },
});

export const setLastEventEnding = (ending) => ({
  type: SET_LAST_EVENT_ENDING,
  payload: ending,
});

export const setHasNPC = (boolean) => ({
  type: SET_HAS_NPC,
  payload: boolean,
});

export const setVisibleNPC = (boolean) => ({
  type: SET_VISIBLE_NPC,
  payload: boolean,
});

export const setVisibleChoices = (boolean) => ({
  type: SET_VISIBLE_CHOICES,
  payload: boolean,
});

export const incrementProgress = () => ({
  type: INCREMENT_PROGRESS,
});

export const resetProgress = () => ({
  type: RESET_PROGRESS,
});

export const setEventProgressStatus = (newStatus) => ({
  type: SET_EVENT_PROGRESS_STATUS,
  payload: newStatus,
});

export const setHeroStatus = (newhealth) => ({
  type: SET_HERO_STATUS,
  payload:
  {
    health: newhealth,
  },
});

export const setPlayer = (id, name, picture, health, maxHealth) => ({
  type: SET_PLAYER,
  payload:
  {
    id: id,
    name: name,
    picture: picture,
    health: health,
    maxHealth: maxHealth,
  },
});

export const setAnswerAndDescriptionInLog = (sentence, answer, effectDescription) => ({
  type: SET_ANSWER_AND_DESCRIPTION_IN_LOG,
  payload:
  {
    sentence: sentence,
    answer: answer,
    effectDescription: effectDescription
  },
});

export const setVisibleLogDialogue = (boolean) => ({
  type: SET_VISIBLE_LOG_DIALOGUE,
  payload: boolean,
});
