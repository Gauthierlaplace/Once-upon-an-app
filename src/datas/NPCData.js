// Préparation de données en dur pour les NPC
// Pour tester l'interface front avant la création de la BDD

// Ce que je ne mets pas dans la V1 : 
// - les statistiques (health, strength, intelligence, dexterity, defense)
// - xp_earned
// - race_code

export default [

  // Trois alliés - biome FORET

  {
    code_npc: 1,
    name: "Brom la Chasseuse de Monstres",
    description: "Cette chasseuse intrépide protège les voyageurs des créatures les plus dangereuses, elle pourrait vous prêter main forte.",
    picture: 'http://imagizer.imageshack.com/v2/642x642q70/924/8kXdnt.png',
    is_boss: 0,
    hostility: 0,
  },

  {
    code_npc: 2,
    name: "Eloi le Protecteur des Animaux",
    description: "Ce druide dévoué donnerait sa vie pour protéger les créatures de la forêt. Il vous aidera si vous partagez sa passion pour la nature.",
    picture: 'http://imagizer.imageshack.com/v2/642x642q70/924/8kXdnt.png',
    is_boss: 0,
    hostility: 0,
  },

  {
    code_npc: 3,
    name: "Lysandre l'Érudite",
    description: "Très instruite et mystérieuse, elle est connue pour sa sagesse et ses connaissances ésotériques sur les secrets de la forêt.",
    picture: 'https://cdn.midjourney.com/1bde38ab-9964-4585-b910-6e744f8152fd/0_0.png',
    is_boss: 0,
    hostility: 0,
  },

  // Trois ennemis - biome FORET

  {
    code_npc: 4,
    name: "Thorgar la Rôdeuse",
    description: "Cette chasseuse solitaire et silencieuse a une affinité profonde avec les animaux de la forêt et peut vous aider à éviter les pièges.",
    picture: 'https://cdn.midjourney.com/7547d81a-ab55-4c18-ac75-5a3973d42ae9/0_1.png',
    is_boss: 0,
    hostility: 1,
  },

  {
    code_npc: 5,
    name: "Les Farfadets Chapardeurs",
    description: "Ces farfadets espiègles adorent voler des objets sans importance à ceux qui traversent leur territoire.",
    picture: 'https://imagizer.imageshack.com/img924/5015/Q27XNl.png',
    is_boss: 0,
    hostility: 1,
  },

  {
    code_npc: 6,
    name: "Les Gobelins Artificiers",
    description: "Ces gobelins aiment jouer avec des explosifs et sont parfois aussi dangereux pour eux-mêmes que pour les autres.",
    picture: 'https://cdn.midjourney.com/eba73e8c-3ccb-4bc7-8972-ee1fa133d86b/0_1.png',
    is_boss: 0,
    hostility: 1,
  },

  // Trois boss - biome FORET

  {
    code_npc: 7,
    name: "Le Dragon des Brumes",
    description: "Ce dragon ne crache pas des flammes, mais un brouillard toxique qui ferait succomber l'aventurier le plus robuste dans d'atroces souffrances.",
    picture: 'https://cdn.midjourney.com/a475dd90-cace-46f8-8829-fd9cf1b110cf/0_3.png',
    is_boss: 1,
    hostility: 1,
  },

  {
    code_npc: 8,
    name: "La Gardienne des Ancêtres",
    description: "Esprit vengeur, elle déteste absolument toutes les créatures qui perturbent l'équilibre de la forêt. Oui, piétiner une brindille, ça compte… N'avez-vous donc aucun respect pour les brindilles ?!",
    picture: 'https://cdn.midjourney.com/3f252c85-642c-49b8-ba7d-cdd60d40147c/0_2.png',
    is_boss: 1,
    hostility: 1,
  },

  {
    code_npc: 9,
    name: "La Sorcière de l'humus",
    description: "Cette sorcière maléfique au visage inquiétant utilise la magie noire pour ensorceler les aventuriers et les mener à leur perte.",
    picture: 'https://cdn.midjourney.com/cff72ca6-251f-4baa-8b9b-032eca3abbba/0_0.png',
    is_boss: 1,
    hostility: 1,
  },


]