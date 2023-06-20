import heroData from './../datas/HeroData';

import {
  SET_CURRENT_EVENT,
  SET_CHOICES,
  SET_HAS_NPC,
  SET_VISIBLE_NPC,
  SET_VISIBLE_CHOICES,
  SET_CURRENT_NPC,
} from '../actions/game';

export const initialState = {
  heroData: heroData,
  currentEvent:
  {
    code_event: '',
    title: '',
    description: '',
    picture: '',
    event_type_code: '',
  },
  currentNPC:
  {
    name: '',
    description: '',
    picture: '',
  },
  choices:
  [
    {
      nextEventId: 0,
      content: 'Choix 0',
    },
    {
      nextEventId: 1,
      content: 'Choix 1',
    },
  ],

  hasNPC: false,
  visibleNPC: false,
  visibleChoices: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_CURRENT_EVENT:
    return {
      ...state,
      currentEvent: {
        ...state.currentEvent,
        code_event: action.payload.code_event,
        title: action.payload.title,
        description: action.payload.description,
        picture: action.payload.picture,
      }
    };

  case SET_CURRENT_NPC:
    return {
      ...state,
      currentNPC: {
        ...state.currentNPC,
        name: action.payload.name,
        description: action.payload.description,
        picture: action.payload.picture,
      }
    };

  case SET_CHOICES:
    return {
      ...state,
      choices: action.payload.choices
    };

  case SET_HAS_NPC:
    return {
      ...state,
      hasNPC: action.payload,
    };

  case SET_VISIBLE_NPC:
    return {
      ...state,
      visibleNPC: action.payload,
    };

  case SET_VISIBLE_CHOICES:
    return {
      ...state,
      visibleChoices: action.payload,
    };

  default:
    return state;
  }
};

export default reducer;
