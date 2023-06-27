// import heroData from './../datas/HeroData';

import {
  SET_CURRENT_EVENT,
  SET_CHOICES,
  SET_LAST_EVENT_ENDING,
  SET_HAS_NPC,
  SET_VISIBLE_NPC,
  SET_DIALOGUE_AND_EFFECTS,
  SET_VISIBLE_CHOICES,
  SET_CURRENT_NPC,
  INCREMENT_PROGRESS,
  RESET_PROGRESS,
  SET_EVENT_PROGRESS_STATUS,
  SET_PLAYER,
  SET_HERO_STATUS,
  SET_ANSWER_AND_DESCRIPTION_IN_LOG,
  SET_VISIBLE_LOG_DIALOGUE,
  SET_LOADING
} from '../actions/game';

export const initialState = {
  player:
  {
    id: 0,
    name: '',
    picture: '',
    health: 0,
    maxHealth: 0,
  },

  progress: 0,

  // Peut prendre les valeurs 'normal', 'beforeLast',
  // 'beforeBoss', 'beforeBiomeEnd', 'beforeGameEnd'
  // 'gameEnd"
  eventProgressStatus: 'normal',

  currentEvent:
  {
    code_event: '',
    title: '',
    description: '',
    picture: '',
    event_type_code: '',
  },

  lastEventEnding: '',

  currentNPC:
  {
    name: '',
    description: '',
    picture: '',
  },

  dialogue:
  {
    sentence: '',
    answers: ['Answer 0', 'Answer 1'],
  },

  eventDialogueToDisplay:
  {
    sentence: '',
    answer: '',
    effectDescription: ''
  },

  choices:
  ['Choix 0', 'Choix 1'],

  hasNPC: false,
  visibleNPC: false,
  visibleChoices: false,
  visibleLogDialogue: false,

  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_CURRENT_EVENT:
    return {
      ...state,
      currentEvent: action.payload,
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

  case SET_LAST_EVENT_ENDING:
    return {
      ...state,
      lastEventEnding: action.payload
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

  case SET_DIALOGUE_AND_EFFECTS:
    return {
      ...state,
      dialogue: {
        ...state.dialogue,
        sentence: action.payload.sentence,
        answers: action.payload.answers
      }
    };

  case SET_HERO_STATUS:
    return {
      ...state,
      player: {
        ...state.player,
        health: action.payload.health,
      }
    };

  case SET_PLAYER:
    return {
      ...state,
      player: {
        ...state.player,
        id: action.payload.id,
        name: action.payload.name,
        picture: action.payload.picture,
        health: action.payload.health,
        maxHealth: action.payload.maxHealth
      }
    };

  case SET_ANSWER_AND_DESCRIPTION_IN_LOG:
    return {
      ...state,
      eventDialogueToDisplay: {
        ...state.eventDialogueToDisplay,
        sentence: action.payload.sentence,
        answer: action.payload.answer,
        effectDescription: action.payload.effectDescription
      }
    };

  case SET_VISIBLE_LOG_DIALOGUE:
    return {
      ...state,
      visibleLogDialogue: action.payload,
    };

  case SET_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  default:
    return state;
  }
};

export default reducer;
