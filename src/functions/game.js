// Pour cacher un élément, je lui applique la classe "hidden"
// Ceci correspond à un display: none;
export const hide = (element) => {
  element.className = 'GameLog-next-step-npc-button hidden';
};

export const showNPCFollowButton = () => {
  const element = document.querySelector('.GameLog-next-step-npc-button');
  if (element) {
    element.className = 'GameLog-next-step-npc-button';
  }
};
