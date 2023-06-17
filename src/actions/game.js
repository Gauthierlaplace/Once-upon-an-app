export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
export const SET_CHOICES = 'SET_CHOICES';

export const setCurrentEvent = (codeEvent, title, description, picture) => ({
  type: SET_CURRENT_EVENT,
  payload: {
    code_event: codeEvent,
    title: title,
    description: description,
    picture: picture,
  },
});

export const setChoices = (firstChoice, secondChoice) => ({
  type: SET_CHOICES,
  payload: {
    choices: [firstChoice, secondChoice],
  },
});
