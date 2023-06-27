/* eslint-disable no-console */
import './MyAccount.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount } from '../../actions/user';
import api from '../../api/api';

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
    <div className="MyAccount-Show">
      <div className="MyAccount-Delete">
        <h1>Supprimer mon compte</h1>
        <p className="MyAccount-red">Attention, en cliquant sur le bouton "supprimer mon compte" ci dessous,
          cela entrainement la suppression définitive de votre compte et vous perdrez
          toute votre progression dans le jeu.
        </p>
        <p className="MyAccount-red">
          Si vous souhaitez rejouer à nouveau, il vous faudra créer un nouveau compte.
        </p>

        <h1 className="MyAccount-question">Souhaitez-vous supprimer votre compte ?</h1>
        <p className="MyAccount-troll">
          Souhaitez-vous vraiment nous briser le coeur ?
          Parce que oui ! C'est ce que vous risquez de faire en osant cliquer sur ce bouton,
          le roi des Cookie pourrait venir vous dévorer
          pour se venger ! Vous n'avez pas peur ? Peur du Cookie vengeur ?
        </p>
        <button
          type="button"
          onClick={() => deleteUserAccount()}
        >
          - Non j'ai pas peur moi et oui je souhaite supprimer mon compte
        </button>
      </div>
    </div>
  );
}

export default DeleteAccount;
