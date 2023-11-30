import { useSelector } from 'react-redux';
import './GameMenuStats.scss';

function GameMenuStats() {
  const strength = useSelector((state) => state.game.player.strength);
  const dext = useSelector((state) => state.game.player.dexterity);
  const intel = useSelector((state) => state.game.player.intelligence);
  const def = useSelector((state) => state.game.player.defense);
  const karma = useSelector((state) => state.game.player.karma);
  return (
    <div className="GameMenuStats">
      <h2 className="GameMenuStats-title">Statistiques :</h2>
      <ul>
        <li className="GameMenuStats-title">Force : <span className="GameMenuStats-values">{strength}</span></li>
        <li className="GameMenuStats-title">Dexterité : <span className="GameMenuStats-values">{dext}</span></li>
        <li className="GameMenuStats-title">Intelligence : <span className="GameMenuStats-values">{intel}</span></li>
        <li className="GameMenuStats-title">Défense : <span className="GameMenuStats-values">{def}</span></li>
        <li className="GameMenuStats-title">Karma : <span className="GameMenuStats-values">{karma}</span></li>
      </ul>
    </div>
  )
}

export default GameMenuStats;
