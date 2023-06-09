import './Header.scss';

import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <NavLink className="Header-NavLink" to="/">
        Accueil
      </NavLink>
      <div className="Header-logo">Logo</div>
      <NavLink className="Header-NavLink" to="/game">
        Jeu
      </NavLink>
    </div>
  );
}

export default Header;
