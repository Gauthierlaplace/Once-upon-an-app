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
          <h1>Bienvenue sur votre compte</h1>
        </div>

        <div className="MyAccount-main">

          <div className="MyAccount-left">
            <nav>
              <ul>
                <li onClick={displayAccountFunction}>
                  Mon compte
                </li>

                <li onClick={displayEditFunction}>
                  Modifier mon compte
                </li>

                <li onClick={displayDeleteFunction}>
                  Supprimer mon compte
                </li>
              </ul>
            </nav>
          </div>

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
