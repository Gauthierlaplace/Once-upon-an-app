import './Header.scss';

import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <NavLink className="Header-NavLink" to="/">
        Accueil
      </NavLink>
      
        <img src="https://imagizer.imageshack.com/img924/3691/6fB19e.png" alt="Logo de l'application web" />
      
      <NavLink className="Header-NavLink" to="/game">
        Jeu
      </NavLink>
    </div>
  );
}

export default Header;
