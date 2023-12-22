import './MyAccount.scss';
import { useState } from 'react';
import ShowAccount from './ShowAccount';
import EditAccount from './EditAccount';
import DeleteAccount from './DeleteAccount';

function MyAccount() {
  // VARIABLE ET FONCTION POUR AFFICHER LE BON COMPONENT
  // LORS DU ONCLICK
  const [displayAccount, setDisplayAccount] = useState(true);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);

  const displayAccountFunction = () => {
    setDisplayAccount(true);
    setDisplayEdit(false);
    setDisplayDelete(false);
  };

  const displayEditFunction = () => {
    setDisplayAccount(false);
    setDisplayEdit(true);
    setDisplayDelete(false);
  };

  const displayDeleteFunction = () => {
    setDisplayAccount(false);
    setDisplayEdit(false);
    setDisplayDelete(true);
  };

  return (
    <div className="MyAccount">

      <div className="MyAccount-container">

        <div className="MyAccount-title">
          <h1>Gestion du compte</h1>
        </div>

        <div className="MyAccount-main">

          <nav className="MyAccount-nav">
            <div className="MyAccount-nav-link" onClick={displayAccountFunction}>
              Mon compte
            </div>

            {/* <div className="MyAccount-nav-link" onClick={displayEditFunction}>
              Modifier mon compte
            </div> */}

            <div className="MyAccount-nav-link" onClick={displayDeleteFunction}>
              Supprimer mon compte
            </div>
          </nav>

          <div className="MyAccount-right">
            <div className="MyAccount-glasseffect">
              {displayAccount && (
                <ShowAccount />
              )}

              {displayEdit && (
                <EditAccount />
              )}

              {displayDelete && (
                <DeleteAccount />
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default MyAccount;
