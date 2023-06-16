export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';

export const setCurrentEvent = (codeEvent, title, description, picture) => ({
  type: SET_CURRENT_EVENT,
  payload: {
    code_event: codeEvent,
    title: title,
    description: description,
    picture: picture,
  },
});
