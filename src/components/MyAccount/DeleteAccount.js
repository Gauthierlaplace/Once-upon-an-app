import './MyAccount.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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
        // console.log(response);
        localStorage.setItem('token', '');
        localStorage.setItem('nickname', '');
        localStorage.setItem('id', '');
        const confirmation = window.confirm('Confirmez-vous la suppression du compte ?');
        if (confirmation) {
          localStorage.setItem('token', '');
          localStorage.setItem('nickname', '');
          localStorage.setItem('id', '');
          dispatch(deleteAccount());
          toast.success('Suppression réussie', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          // Différer la redirection de 3.5 secondes (3500 millisecondes)
          setTimeout(() => {
            window.location.href = '/';
          }, 3500);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Echec de la suppression', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  return (
    <div className="MyAccount-Delete">
      <p className="MyAccount-Delete-warning">Attention, en cliquant sur le bouton ci-dessous,
        cela entraînera la suppression définitive de votre compte.
      </p>
      <p className="MyAccount-Delete-warning">Vous devrez en recréer un pour pouvoir jouer.
      </p>

      <h2 className="MyAccount-Delete-question">Souhaitez-vous supprimer votre compte ?</h2>
      <button
        className="MyAccount-Delete-button"
        type="button"
        onClick={() => deleteUserAccount()}
      >
        J'ai bien compris et je souhaite supprimer mon compte.
      </button>
    </div>
  );
}

export default DeleteAccount;
