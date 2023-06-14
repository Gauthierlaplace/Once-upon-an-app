import './GameMenus.scss';

function GameMenus() {
  return (
    <div className="GameMenus">
      <ul>
        <li>Stats</li>
        <li>Inventaire</li>
        <li className="GameMenus-progress">Progression</li>
      </ul>
    </div>
  );
}

export default GameMenus;
