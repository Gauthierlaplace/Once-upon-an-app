import heroData from './../datas/HeroData';

import {
  SET_CURRENT_EVENT,
  SET_CHOICES,
  SET_HAS_NPC,
  SET_VISIBLE_NPC,
  SET_DIALOGUE,
  SET_EFFECT,
  SET_VISIBLE_CHOICES,
  SET_CURRENT_NPC,
  INCREMENT_PROGRESS,
  RESET_PROGRESS,
  SET_EVENT_PROGRESS_STATUS,
} from '../actions/game';

export const initialState = {
  heroData: heroData,
  progress: 0,

  // Peut prendre les valeurs 'normal', 'beforeLast',
  // 'beforeBoss', 'beforeBiomeEnd', 'beforeGameEnd'
  eventProgressStatus: 'normal',

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

  dialogue:
  {
    sentence: '',
    answers:
    ['Answer 0', 'Answer 1']
  },

  choices:
  ['Choix 0', 'Choix 1'],

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

  case INCREMENT_PROGRESS:
    return {
      ...state,
      progress: state.progress + 1,
    };

  case RESET_PROGRESS:
    return {
      ...state,
      progress: 0,
    };

  case SET_EVENT_PROGRESS_STATUS:
    return {
      ...state,
      eventProgressStatus: action.payload,
    };

  case SET_DIALOGUE:
    return {
      ...state,
      dialogue: {
        ...state.dialogue,
        sentence: action.payload.sentence,
        answers: action.payload.answers
      }
    };

  case SET_EFFECT:
    return {
      ...state,
      effect: {
        ...state.dialogue,
        id: action.payload.id,
        description: action.payload.description,
      }
    };

  default:
    return state;
  }
};

export default reducer;
