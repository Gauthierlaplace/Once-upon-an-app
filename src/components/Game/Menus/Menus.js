import './Menus.scss';

function Menus() {
  return (
    <div className="Menus">
      <ul>
        <li>Stats</li>
        <li>Inventaire</li>
        <li className="Menus-progress">Progression</li>
      </ul>
    </div>
  );
}

export default Menus;