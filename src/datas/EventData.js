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
      description: "Vous découvrez un immense arbre centenaire aux branches étendues en arc, formant un abri naturel en son centre. Les rayons du soleil filtrent à travers les feuilles, créant un kaléidoscope de couleurs et un refuge paisible pour les voyageurs égarés.",
      picture: 'https://th.bing.com/th/id/OIG.CLdfXoLxyFmhBjcw0_Sg?pid=ImgGn',
      opening: "Vous apercevez un rayon de soleil filtrant à travers les feuilles, attirant votre attention vers un immense arbre centenaire.",
      event_type_code: 1,
    },
  
    {
      code_event: 2,
      title: "Les Chutes Argentées",
      description: "Vous arrivez devant une cascade impétueuse qui dévale des falaises rocheuses, projetant des éclats d'eau qui brillent comme de l'argent au soleil. L'endroit est réputé pour ses propriétés curatives et sa beauté éblouissante.",
      picture: 'https://th.bing.com/th/id/OIG.YgMUYfqX2e6PfHEa8OX_?pid=ImgGn',
      opening: "Votre oeil est attiré au loin par l'éclat argenté d'une cascade impétueuse, dévalant des falaises rocheuses",
      event_type_code: 1,
    },
  
    {
      code_event: 3,
      title: "Le Chemin du Murmure",
      description: "Vous empruntez un sentier caressé par une douce brise, où les feuilles des arbres murmurent des secrets à ceux qui les écoutent attentivement. Chaque pas révèle une nouvelle mélodie, créant une symphonie naturelle qui berce les âmes en quête de tranquillité.",
      picture: 'https://th.bing.com/th/id/OIG.ZvwTC3v7PMGQYYx7uSB9?pid=ImgGn',
      opening: "Vous réalisé que le bruissement des feuilles a changé. Comme si elles cherchaient à vous parler...",
      event_type_code: 1,
    },
  
    // Trois rencontres - biome FORET
  
    {
      code_event: 4,
      title: "Le Cercle des Champignons",
      description: "Vous pénétrez dans une clairière entourée d'immenses champignons colorés aux formes étranges. Chaque champignon émet une lueur douce, créant une ambiance féerique. C'est un lieu de rassemblement pour les créatures magiques et les amateurs de potions.",
      picture: 'https://th.bing.com/th/id/OIG.mlLVu_iOyNLfpFUQJPZU?pid=ImgGn',
      opening: "Un peu plus loin, d'immenses champignons colorés aux formes étranges attirent votre curiosité.",
      event_type_code: 2,
    },
  
    {
      code_event: 5,
      title: "Les Ruines Perdues",
      description: "Vous découvrez les ruines d'une ancienne cité dissimulées au sein de la forêt, envahies par la végétation. Des colonnes brisées et des sculptures effacées témoignent d'une grandeur passée.",
      picture: 'https://th.bing.com/th/id/OIG.7JFx3KgQdR0Nj0r3RLnk?pid=ImgGn',
      opening: "Vous avancez et buttez sur une pierre qui ne ressemble pas aux autres cailloux de la forêt.",
      event_type_code: 2,
    },
  
    {
      code_event: 6,
      title: "La Clairière des Runes",
      description: "Vous vous tenez au centre d'une clairière sacrée où d'anciens symboles runiques sont gravés dans le sol. Chaque rune renferme un pouvoir unique et une signification mystique, attirant les praticiens de la magie qui cherchent à interpréter leur sagesse.",
      picture: 'https://th.bing.com/th/id/OIG.rhsWKhftZQVLelS1wP_C?pid=ImgGn',
      opening: "Votre attention est attirée par d'étranges symboles gravés dans le sol. Ils semblent indiquer une route à suivre.",
      event_type_code: 2,
    },
  
    // Trois combats simples - biome FORET
  
    {
      code_event: 7,
      title: "Le Sanctuaire des Anciens",
      description: "Vous arrivez devant un cercle sacré de pierres dressées, entouré d'arbres millénaires. C'est un lieu de communion avec les esprits de la forêt, mais il vous semble chargé d'une tension mystique.",
      picture: 'https://th.bing.com/th/id/OIG.yx7I3pk.0OOoXBMMBNYu?pid=ImgGn',
      opening: "Les pierres qui vous entourent ne sont pas placées au hasard. Vous avancez, curieux d'en savoir plus.",
      event_type_code: 3,
    },
  
    {
      code_event: 8,
      title: "La Ravine des Soupirs",
      description: "Vous vous retrouvez face à une gorge étroite et sombre, où les arbres touffus se penchent pour former une canopée dense. L'air est chargé d'une aura de danger, et le murmure du vent à travers les branches donne l'impression que la forêt elle-même soupire, anxieuse.",
      picture: 'https://th.bing.com/th/id/OIG.fgg1QHJv6CHZlDZ7FutL?pid=ImgGn',
      opening: "Vous entendez un murmure mystérieux dans le vent et vous décidez de l'écouter attentivement",
      event_type_code: 3,
    },
  
    {
      code_event: 9,
      title: "Le Bosquet des Araignées Tisseuses",
      description: "Vous pénétrez dans un espace enchanté où les araignées géantes tissent des toiles complexes entre les arbres. Les fils d'argent étincelants forment un véritable labyrinthe !",
      picture: 'https://th.bing.com/th/id/OIG.hldw1z8YYNx0uzYj4VHl?pid=ImgGn',
      opening: "En tendant la main à gauche, vous sentez une matière collante mais vous ne voyez rien... Vous bifurquez pour comprendre de quoi il s'agit.",
      event_type_code: 3,
    },
  
    // Trois combats de boss - biome FORET
  
    {
      code_event: 10,
      title: "L'étang aux Lueurs Spectrales",
      description: "Vous vous aventurez vers un étang envoûtant où des lucioles spectrales éclairent les sentiers serpentant entre les tourbières. Derrière son apparence magnifique, vous sentez qu'il renferme de terribles secrets.",
      picture: 'https://th.bing.com/th/id/OIG.M6kXZGnQrtELTzmsA4Mt?pid=ImgGn',
      opening: "Une luciole spectrale vous file devant le nez ! Vous courez à sa poursuite.",
      event_type_code: 4,
    },
  
    {
      code_event: 11,
      title: "La Sombre Grotte",
      description: "Vous arrivez devant une imposante grotte dissimulée dans la dense forêt. Les ténèbres l'enveloppent, et une aura sinistre émane de son entrée béante. L'intérieur est un labyrinthe de tunnels tortueux et de chambres obscures où des stalactites menaçantes pendent du plafond.",
      picture: 'https://th.bing.com/th/id/OIG.dsfI0zGJsCeGV4.PDppX?pid=ImgGn',
      opening: "Un frisson vous parcourt l'échine. Toute votre attention est absorbée par une grotte que vous voyez se dessiner au loin. Vous êtes comme possédé et ne pouvez vous empêcher d'approcher...",
      event_type_code: 4,
    },
  
    {
      code_event: 12,
      title: "Les racines éternelles",
      description: "Le sol est absolument couvert de racines. Tortueuses et sinistres, elles s'entrelacent et rendent votre progression extrêmement difficile. À chaque pas, la sensation d'oppression ne fait qu'empirer...",
      picture: 'https://th.bing.com/th/id/OIG.KMW.UbVfhtl34fK.xJPV?pid=ImgGn',
      opening: "Vous reprenez votre chemin et n'arrêtez pas de trébucher ! La forêt n'a pas fini de vous surprendre...",
      event_type_code: 4,
    },
  
  
  ] 