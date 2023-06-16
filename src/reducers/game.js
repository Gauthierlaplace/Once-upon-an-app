import heroData from './../datas/HeroData';

import {
  SET_CURRENT_EVENT,
} from '../actions/game';

export const initialState = {
  heroData: heroData,
  currentEvent:
  {
    code_event: '',
    title: '',
    description: '',
    picture: '',
    // opening: "Un peu plus loin, d'immenses champignons colorés aux formes étranges attirent votre curiosité.",
    event_type_code: '',
  },
  currentNpc:
  {
    code_npc: '3',
    name: "Lysandre l'Érudite",
    description: "Très instruite et mystérieuse, elle est connue pour sa sagesse et ses connaissances ésotériques sur les secrets de la forêt. Lysandre ne fait pas attention à vous, bien trop absorbée par sa lecture.",
    picture: 'https://cdn.midjourney.com/1bde38ab-9964-4585-b910-6e744f8152fd/0_0.png',
    is_boss: 0,
    hostility: 0,
  },
  choices:
  [
    {
      id: 0,
      textButton: '',
      action: '',
    },
    {
      id: 1,
      textButton: '',
      action: '',
    },
  ],
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

  default:
    return state;
  }
};

export default reducer;
