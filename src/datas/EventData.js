// Préparation de données en dur pour les événements
// Pour tester l'interface front avant la création de la BDD

// Ce que je ne mets pas dans la V1 :
// - biome_code : car c'est toujours foret
// - event_type_code : 1 - normal / 2 - rencontre / 3 - combat / 4 - boss

export default [

  // Trois repos - biome FORET

  {
    code_event: 1,
    title: "L'Arche de Verdure",
    description: 'Vous découvrez un immense arbre centenaire aux branches étendues en arc, formant un abri naturel en son centre. Les rayons du soleil filtrent à travers les feuilles, créant un kaléidoscope de couleurs et un refuge paisible pour les voyageurs égarés.',
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117496613590540369/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_fc6c8418-6cfd-4ead-8cde-1e5fa0a8af74.png',
    opening: 'Vous apercevez un rayon de soleil filtrant à travers les feuilles, attirant votre attention vers un immense arbre centenaire.',
    event_type_code: 1,
  },

  {
    code_event: 2,
    title: 'Les Chutes Argentées',
    description: "Vous arrivez devant une cascade impétueuse qui dévale des falaises rocheuses, projetant des éclats d'eau qui brillent comme de l'argent au soleil. L'endroit est réputé pour ses propriétés curatives et sa beauté éblouissante.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117497319902937128/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_17594541-24d6-4700-966a-63fb701f4155.png',
    opening: "Votre oeil est attiré au loin par l'éclat argenté d'une cascade impétueuse, dévalant des falaises rocheuses",
    event_type_code: 1,
  },

  {
    code_event: 3,
    title: 'Le Chemin du Murmure',
    description: 'Vous empruntez un sentier caressé par une douce brise, où les feuilles des arbres murmurent des secrets à ceux qui les écoutent attentivement. Chaque pas révèle une nouvelle mélodie, créant une symphonie naturelle qui berce les âmes en quête de tranquillité.',
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117489786043764796/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_40e80c62-acb7-4637-9f90-38a0e75c019d.png',
    opening: 'Vous réalisé que le bruissement des feuilles a changé. Comme si elles cherchaient à vous parler...',
    event_type_code: 1,
  },

  // Trois rencontres - biome FORET

  {
    code_event: 4,
    title: 'Le Cercle des Champignons',
    description: "Vous pénétrez dans une clairière entourée d'immenses champignons colorés aux formes étranges. Chaque champignon émet une lueur douce, créant une ambiance féerique. C'est un lieu de rassemblement pour les créatures magiques et les amateurs de potions.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117494079635337256/rahkart_generate_an_image_with_a_concise_brush_technique_that_d_03a01f8f-eeea-4634-8538-7556f43c2ff7.png',
    opening: "Un peu plus loin, d'immenses champignons colorés aux formes étranges attirent votre curiosité.",
    event_type_code: 2,
  },

  {
    code_event: 5,
    title: 'Les Ruines Perdues',
    description: "Vous découvrez les ruines d'une ancienne cité dissimulées au sein de la forêt, envahies par la végétation. Des colonnes brisées et des sculptures effacées témoignent d'une grandeur passée.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117490877250666546/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_f39b9d4a-f51b-44fc-83d3-b036f114786b.png',
    opening: 'Vous avancez et buttez sur une pierre qui ne ressemble pas aux autres cailloux de la forêt.',
    event_type_code: 2,
  },

  {
    code_event: 6,
    title: 'La Clairière des Runes',
    description: "Vous vous tenez au centre d'une clairière sacrée où d'anciens symboles runiques sont gravés dans le sol. Chaque rune renferme un pouvoir unique et une signification mystique, attirant les praticiens de la magie qui cherchent à interpréter leur sagesse.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117492488425455647/rahkart_generate_an_image_with_a_concise_brush_technique_that_d_351f5532-7b73-49de-b609-79ab97200f9c.png',
    opening: "Votre attention est attirée par d'étranges symboles gravés dans le sol. Ils semblent indiquer une route à suivre.",
    event_type_code: 2,
  },

  // Trois combats simples - biome FORET

  {
    code_event: 7,
    title: 'Le Sanctuaire des Anciens',
    description: "Vous arrivez devant un cercle sacré de pierres dressées, entouré d'arbres millénaires. C'est un lieu de communion avec les esprits de la forêt, mais il vous semble chargé d'une tension mystique.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117495294280618155/rahkart_enerate_an_image_with_a_concise_brush_technique_that_de_ab4643a7-2b4c-42cc-8b4f-4ddbcd64113a.png',
    opening: "Les pierres qui vous entourent ne sont pas placées au hasard. Vous avancez, curieux d'en savoir plus.",
    event_type_code: 3,
  },

  {
    code_event: 8,
    title: 'La Ravine des Soupirs',
    description: "Vous vous retrouvez face à une gorge étroite et sombre, où les arbres touffus se penchent pour former une canopée dense. L'air est chargé d'une aura de danger, et le murmure du vent à travers les branches donne l'impression que la forêt elle-même soupire, anxieuse.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117498289823154267/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_6866b654-6b21-4ee0-b63f-f258b1c9e805.png',
    opening: "Vous entendez un murmure mystérieux dans le vent et vous décidez de l'écouter attentivement",
    event_type_code: 3,
  },

  {
    code_event: 9,
    title: 'Le Bosquet des Araignées Tisseuses',
    description: "Vous pénétrez dans un espace enchanté où les araignées géantes tissent des toiles complexes entre les arbres. Les fils d'argent étincelants forment un véritable labyrinthe !",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117499732927987733/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_b4aadb88-e35d-4d5c-8302-0c680e91b03c.png',
    opening: "En tendant la main à gauche, vous sentez une matière collante mais vous ne voyez rien... Vous bifurquez pour comprendre de quoi il s'agit.",
    event_type_code: 3,
  },

  // Trois combats de boss - biome FORET

  {
    code_event: 10,
    title: "L'étang aux Lueurs Spectrales",
    description: "Vous vous aventurez vers un étang envoûtant où des lucioles spectrales éclairent les sentiers serpentant entre les tourbières. Derrière son apparence magnifique, vous sentez qu'il renferme de terribles secrets.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117500580097691848/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_92d069f0-16e4-4448-a997-75cd665bc4de.png',
    opening: 'Une luciole spectrale vous file devant le nez ! Vous courez à sa poursuite.',
    event_type_code: 4,
  },

  {
    code_event: 11,
    title: 'La Sombre Grotte',
    description: "Vous arrivez devant une imposante grotte dissimulée dans la dense forêt. Les ténèbres l'enveloppent, et une aura sinistre émane de son entrée béante. L'intérieur est un labyrinthe de tunnels tortueux et de chambres obscures où des stalactites menaçantes pendent du plafond.",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117501321109573712/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_fc584627-203c-4417-9c80-5ce57dc03cb3.png',
    opening: "Un frisson vous parcourt l'échine. Toute votre attention est absorbée par une grotte que vous voyez se dessiner au loin. Vous êtes comme possédé et ne pouvez vous empêcher d'approcher...",
    event_type_code: 4,
  },

  {
    code_event: 12,
    title: 'Les racines éternelles',
    description: "Le sol est absolument couvert de racines. Tortueuses et sinistres, elles s'entrelacent et rendent votre progression extrêmement difficile. À chaque pas, la sensation d'oppression ne fait qu'empirer...",
    picture: 'https://cdn.discordapp.com/attachments/1114521519893254195/1117502359032049785/rahkart_generate_an_image_that_depicts_a_captivating_scene_insp_8f0465e2-999e-4467-a166-fb5039726c1d.png',
    opening: "Vous reprenez votre chemin et n'arrêtez pas de trébucher ! La forêt n'a pas fini de vous surprendre...",
    event_type_code: 4,
  },

];
