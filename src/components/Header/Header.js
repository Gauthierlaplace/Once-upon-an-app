/* eslint-disable no-console */
import axios from 'axios';
import './Header.scss';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteAccount, logOut } from '../../actions/user';

function Header() {
  const logged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.nickname);
  // const : token et userId utilisé pour la fonction delete account
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.currentUserId);

  const dispatch = useDispatch();

  // ======================================
  // FONCTION POUR LA SUPPRESSION DU COMPTE
  // ======================================

  function deleteUserAccount() {
    axios
      .delete(
        `http://anthony-boutherin.vpnuser.lan:8000/api/users/${userId}`,
        {
          headers: {
            Authorization: `bearer ${token}`
          }
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          deleteAccount()
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // ======================================
  // FIN DE LA FONCTION DE DELETE
  // ======================================

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
      {logged && (
        <div className="Header-Account">
          <h3>Hello {nickname}</h3>
          {/* Le joueur peut cliquer pour se déconnecter (logged ==> false) */}
          <button
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Déconnexion
          </button>

          {/*  Au clic sur le bouton j'appel la fonction plus haut
          qui va supprimer le compte actuel via l'id et le token */}
          <button
            type="button"
            onClick={deleteUserAccount}
          >
            Supprimer mon compte
          </button>
        </div>
      )}

    </div>
  );
}

export default Header;
