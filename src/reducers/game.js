import eventData from './../datas/EventData';
import npcData from './../datas/NPCData';
import endingData from './../datas/EndingData';
import heroData from './../datas/HeroData';

export const initialState = {
    eventData: eventData,
    npcData: npcData,
    endingData: endingData,
    heroData: heroData,
    currentEvent: 
    {
      code_event: 4,
      title: "Le Cercle des Champignons",
      description: "Vous pénétrez dans une clairière entourée d'immenses champignons colorés aux formes étranges. Chaque champignon émet une lueur douce, créant une ambiance féerique. C'est un lieu de rassemblement pour les créatures magiques et les amateurs de potions.",
      picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117494079635337256/rahkart_generate_an_image_with_a_concise_brush_technique_that_d_03a01f8f-eeea-4634-8538-7556f43c2ff7.png',
      opening: "Un peu plus loin, d'immenses champignons colorés aux formes étranges attirent votre curiosité.",
      event_type_code: 2,
    },
    currentNpc: 
    {
      code_npc: 3,
      name: "Lysandre l'Érudite",
      description: "Très instruite et mystérieuse, elle est connue pour sa sagesse et ses connaissances ésotériques sur les secrets de la forêt. Lysandre ne fait pas attention à vous, bien trop absorbée par sa lecture.",
      picture: 'https://cdn.midjourney.com/1bde38ab-9964-4585-b910-6e744f8152fd/0_0.png',
      is_boss: 0,
      hostility: 0,
    },
    choices: 
    [
      {
        id: 1,
        textButton: "Vous vous éloignez des champignons lumineux, avide de contrées très paisibles. Vous apercevez un rayon de soleil filtrant à travers les feuilles, attirant votre attention vers un immense arbre centenaire.",
        action: ""
      },
      {
        id: 2,
        textButton: "Vous délaissez les champignons étranges, pour vous enfoncer dans les profondeurs de la forêt. Les pierres qui vous entourent ne sont pas placées au hasard. Vous avancez, curieux d'en savoir plus.",
        action: ""
      }
    ]
    
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      default:
        return state;
    }
  };
  
  export default reducer;