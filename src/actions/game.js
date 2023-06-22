export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
export const SET_CURRENT_NPC = 'SET_CURRENT_NPC';
export const SET_CHOICES = 'SET_CHOICES';
export const SET_HAS_NPC = 'SET_HAS_NPC';
export const SET_DIALOGUE = 'SET_DIALOGUE';
export const SET_EFFECT = 'SET_EFFECT';
export const SET_VISIBLE_NPC = 'SET_VISIBLE_NPC';
export const SET_VISIBLE_CHOICES = 'SET_VISIBLE_CHOICES';
export const INCREMENT_PROGRESS = 'INCREMENT_PROGRESS';
export const RESET_PROGRESS = 'RESET_PROGRESS';
export const SET_EVENT_PROGRESS_STATUS = 'SET_EVENT_PROGRESS_STATUS';

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

export const setDialogue = (dialogueSentence, dialogueFirstAnswer, dialogueSecondAnswer) => ({
  type: SET_DIALOGUE,
  payload: {
    sentence: dialogueSentence,
    answers: [dialogueFirstAnswer, dialogueSecondAnswer]
  },
});

export const setEffect = (effectId, effectDescription) => ({
  type: SET_EFFECT,
  payload: {
    id: effectId,
    description: effectDescription,
  },
});

// TODO faire évoluer cette action pour qu'elle gère le cas où l'on a plus de 2 choix
export const setChoices = (choicesArray) => ({
  type: SET_CHOICES,
  payload: {
    choices: choicesArray,
  },
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
