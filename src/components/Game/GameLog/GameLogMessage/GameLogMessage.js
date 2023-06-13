import './GameLogMessage.scss';

function GameLogMessage() {
  return (
    <div className="GameLogMessage">
      <p className="GameLogMessage-content">A vous de jouer :</p>
      <div>
        <button className="GameLogMessage-button">
        <p>
        Vous vous éloignez des champignons lumineux, avide de contrées très paisibles. Vous apercevez un rayon de soleil filtrant à travers les feuilles, attirant votre attention vers un immense arbre centenaire.
        </p>
        </button>
        <button className="GameLogMessage-button">
        <p>
        Vous délaissez les champignons étranges, pour vous enfoncer dans les profondeurs de la forêt. Les pierres qui vous entourent ne sont pas placées au hasard. Vous avancez, curieux d'en savoir plus.
        </p></button>
      </div>
    </div>
  );
}

export default GameLogMessage;
