export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
export const SET_CHOICES = 'SET_CHOICES';
export const SET_VISIBLE_NPC = 'SET_VISIBLE_NPC';
export const SET_VISIBLE_CHOICES = 'SET_VISIBLE_CHOICES';

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

// TODO faire évoluer cette action pour qu'elle gère le cas où l'on a plus de 2 choix
export const setChoices = (firstChoice, secondChoice) => ({
  type: SET_CHOICES,
  payload: {
    choices: [firstChoice, secondChoice],
  },
});

export const setVisibleNPC = (boolean) => ({
  type: SET_VISIBLE_NPC,
  payload: boolean,
});

export const setVisibleChoices = (boolean) => ({
  type: SET_VISIBLE_CHOICES,
  payload: boolean,
});
