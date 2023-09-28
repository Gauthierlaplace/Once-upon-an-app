/* eslint-disable no-alert */
import './Header.scss';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../actions/user';

import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    const confirmation = window.confirm('Votre progression dans le jeu sera perdue, êtes-vous sûr de vouloir vous déconnecter ?');
    if (confirmation) {
      localStorage.setItem('token', '');
      localStorage.setItem('nickname', '');
      localStorage.setItem('id', '');
      dispatch(logOut());
      window.location.href = '/';
    }
  };

  return (
    // Todo retirer les NavLinks quand nous n'en aurons plus besoin
    <div className="Header">
      {/* Logo cliquable qui renvoi sur la page d'accueil */}

      <NavLink to="/">
        <img className="Header-logo" src="https://image.noelshack.com/fichiers/2023/25/4/1687449010-illustration-sans-titre-4.png" alt="Logo de l'application web : Once upon an app" />
      </NavLink>

      {/* La div suivante ne s'affiche que quand logged vaut true */}
      {/* Le joueur peut cliquer pour se déconnecter (logged ==> false) */}
      {logged && (
        <HeaderNav logout={handleLogOut} />
      )}
    </div>
  );
}

export default Header;
