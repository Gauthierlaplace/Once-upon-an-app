import './MyAccount.scss';
import { useSelector } from 'react-redux';
import api from '../../../api/api';

// ======================================
// FONCTION POUR LA SUPPRESSION DU COMPTE
// ======================================

const deleteUserAccount = (userId) => {
  api
    .delete(`/users/${userId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// ======================================
// FIN DE LA FONCTION DE DELETE
// ======================================
function DeleteAccount() {
  // const : tuserId utilisé pour la fonction delete account
  const userId = useSelector((state) => state.user.currentUserId);

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
        onClick={() => deleteUserAccount(userId)}
      >
        Oui je souhaite supprimer mon compte
      </button>
    </div>
  );
}

export default DeleteAccount;
