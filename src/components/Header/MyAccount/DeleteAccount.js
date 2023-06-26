/* eslint-disable no-console */
import './MyAccount.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount } from '../../../actions/user';
import api from '../../../api/api';
// ======================================
// FONCTION POUR LA SUPPRESSION DU COMPTE
// ======================================

function deleteUserAccount() {
  // const : token et userId utilisé pour la fonction delete account
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.currentUserId);
  const dispatch = useDispatch();

  api
    .delete(`/users/${userId}`)
    .then((response) => {
      console.log(response);
      // dispatch(
      //   deleteAccount()
      // );
    })
    .catch((error) => {
      console.log(error);
    });
}

// ======================================
// FIN DE LA FONCTION DE DELETE
// ======================================
function DeleteAccount() {
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
        onClick={deleteUserAccount}
      >
        Oui je souhaite supprimer mon compte
      </button>
    </div>
  );
}

export default DeleteAccount;
