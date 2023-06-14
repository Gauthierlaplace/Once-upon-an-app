import './Header.scss';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../actions/user';

function Header() {
  const logged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.nickname);

  const dispatch = useDispatch();

  return (
    // Todo retirer les NavLinks quand nous n'en aurons plus besoin
    <div className="Header">
      <NavLink className="Header-Accueil" to="/">
        Accueil
      </NavLink>

      <img src="https://imagizer.imageshack.com/img924/3691/6fB19e.png" alt="Logo de l'application web" />

      <NavLink className="Header-Jeu" to="/game">
        Jeu
      </NavLink>

      {/* La div suivante ne s'affiche que quand logged vaut true */}
      { logged && (
        <div className="Header-Account">
          <h3>Hello {nickname}</h3>
          {/* Le joueur peut cliquer pour se déconnecter (logged ==> false) */}
          <button
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Déconnexion
          </button>
        </div>
      )}

    </div>
  );
}

export default Header;
