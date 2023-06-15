import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

// Import des actions nécessaires
import {
  hasFailedAction,
  saveLoginSuccessful,
  changeField,
} from '../../../actions/user';

import HomeBookLogin from './HomeBookLogin/HomeBookLogin';
import HomeBookRegister from './HomeBookRegister/HomeBookRegister';

import './HomeBook.scss';

function HomeBook() {
  // Pour la partie login
  const emailLogin = useSelector((state) => state.user.email);
  const passwordLogin = useSelector((state) => state.user.password);
  const hasRegisteredSuccessfully = useSelector((state) => state.user.hasRegisteredSuccessfully);
  const hasFailedLogin = useSelector((state) => state.user.hasFailedLogin);

  // Pour la partie register
  const emailRegister = useSelector((state) => state.user.emailRegister);
  const passwordRegister = useSelector((state) => state.user.passwordRegister);
  const nicknameRegister = useSelector((state) => state.user.nicknameRegister);

  const dispatch = useDispatch();

  // Fonction pour envoyer username (l'email) et password à la soumission du formulaire
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // on valide les infos auprès du back-end
    axios
      .post('http://anthony-boutherin.vpnuser.lan:8000/api/login_check', {
        // La documentation API (nos collègues back) nous précise quelles données transmettre
        username: emailLogin,
        password: passwordLogin,
      })
      .then((response) => {
        // Quand le couple email/mdp est valide, j'envoie plusieurs infos dans le state :
        dispatch(
          saveLoginSuccessful(response.data.data.pseudo, response.data.data.id, response.data.token)
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          hasFailedAction('login')
        );
      });
  };

  return (
    <div className="HomeBook">
      <HomeBookLogin
        email={emailLogin}
        password={passwordLogin}
        handleSubmit={handleSubmitLogin}
        hasRegisteredSuccessfully={hasRegisteredSuccessfully}
        hasFailedLogin={hasFailedLogin}
        changeField={changeField}
      />
      <HomeBookRegister
        email={emailRegister}
        password={passwordRegister}
        nickname={nicknameRegister}
        changeField={changeField}
      />
    </div>
  );
}

export default HomeBook;
