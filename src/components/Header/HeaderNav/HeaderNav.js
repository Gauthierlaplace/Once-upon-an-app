import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './HeaderNav.scss';

function HeaderNav({ logout }) {
  const nickname = useSelector((state) => state.user.nickname);
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div>
      <nav className={`navbar ${showLinks ? 'showNav' : 'hideNav'}`}>
        <ul className="navbar-links">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link" onClick={handleShowLinks}>
              Accueil
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/game" className="navbar-link" onClick={handleShowLinks}>
              Jouer
            </NavLink>
          </li>
          {/* <li className="navbar-item">
            <NavLink to="/MyAccount" className="navbar-link" onClick={handleShowLinks}>
              Mon compte
            </NavLink>
          </li> */}
          <li className="navbar-item" onClick={logout}>
            <NavLink to="#" className="navbar-link" onClick={handleShowLinks}>
              Déconnexion
            </NavLink>
          </li>
        </ul>
        <span className="navbar-nickName">Bienvenue {nickname}</span>
        <button type="button" className="navbar-burger" onClick={handleShowLinks}>
          <span className="navbar-burgerBar" />
        </button>
      </nav>
    </div>
  );
}

export default HeaderNav;
