import './Header.scss';

import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom';

function Header() {
  const logged = useSelector((state) => state.user.logged);
  const email = useSelector((state) => state.user.email);

  return (
    // Todo retirer les NavLinks quand nous n'en aurons plus besoin
    <div className="Header">
      <NavLink className="Header-NavLink" to="/">
        Accueil
      </NavLink>
      
        <img src="https://imagizer.imageshack.com/img924/3691/6fB19e.png" alt="Logo de l'application web" />
      
      <NavLink className="Header-NavLink" to="/game">
        Jeu
      </NavLink>
      
      { logged && (<h3>Hello {email}</h3>) }

    </div>
  );
}

export default Header;
