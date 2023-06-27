/* eslint-disable no-console */
import './MyAccount.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount } from '../../../actions/user';
import api from '../../../api/api';

function DeleteAccount() {
  // const : tuserId utilisé pour la fonction delete account
  const userId = useSelector((state) => state.user.currentUserId);
  const dispatch = useDispatch();

  // ======================================
  // FONCTION POUR LA SUPPRESSION DU COMPTE
  // ======================================

  // La fonction va à l'intérieur du composant, avant le return
  const deleteUserAccount = () => {
    api
      .delete(`/users/${userId}`)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', '');
        localStorage.setItem('nickname', '');
        localStorage.setItem('id', '');
        dispatch(deleteAccount());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="DeleteAccount">
      <h1>Supprimer mon compte</h1>
      <p>Attention, en cliquant sur le bouton "supprimer mon compte" ci dessous,
        cela entrainement la supprésszion définitive de votre compte et vous perdrez
        toute votre progression dans le jeu.
      </p>
      <p>
        Si vous souhaitez rejouer à nouveau, il vous faudra créer un nouveau compte.
      </p>

      <h1>Souhaitez-vous supprimer votre compte ?</h1>
      <button
        type="button"
        onClick={() => deleteUserAccount()}
      >
        Oui je souhaite supprimer mon compte
      </button>
    </div>
  );
}

export default DeleteAccount;
