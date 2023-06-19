import heroData from './../datas/HeroData';

import {
  SET_CURRENT_EVENT,
  SET_CHOICES,
  SET_VISIBLE_NPC,
  SET_VISIBLE_CHOICES,
} from '../actions/game';

export const initialState = {
  heroData: heroData,
  currentEvent:
  {
    code_event: '',
    title: '',
    description: '',
    picture: '',
    // opening: '',
    event_type_code: '',
  },
  currentNpc:
  {
    code_npc: '3',
    name: 'Lysandre l\'Érudite',
    description: 'Très instruite et mystérieuse, elle est connue pour sa sagesse et ses connaissances ésotériques sur les secrets de la forêt. Lysandre ne fait pas attention à vous, bien trop absorbée par sa lecture.',
    picture: 'https://cdn.midjourney.com/1bde38ab-9964-4585-b910-6e744f8152fd/0_0.png',
    is_boss: 0,
    hostility: 0,
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

  case SET_CHOICES:
    return {
      ...state,
      choices: action.payload.choices
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
