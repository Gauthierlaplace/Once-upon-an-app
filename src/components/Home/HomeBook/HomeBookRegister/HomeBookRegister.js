import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import './HomeBookRegister.scss';

function HomeBookRegister({
  email,
  password,
  nickname,
  handleSubmit,
  changeField,
  isPasswordToastVisible
}) {
  const dispatch = useDispatch();

  // Je conditionne l'affichage du toast "password info"
  // Afin d'éviter que 10 toasts se lancent en meme temps
  const infoToast = () => {
    if (!isPasswordToastVisible) {
      toast.info('Infos mdp', {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="HomeBookRegister-glass">
      <h1>Inscrivez-vous</h1>
      <form
        className="HomeBook-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="nickname">Pseudo</label>
        <input
          type="text"
          name="nickname"
          placeholder="Entrez votre pseudo"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'nicknameRegister'));
            infoToast();
          }}
          value={nickname}
        />

        <label htmlFor="mail">E-mail :</label>
        <input
          type="text"
          name="email"
          placeholder="Entrez votre adresse mail"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'emailRegister'));
            infoToast();
          }}
          value={email}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          onChange={(event) => {
            dispatch(changeField(event.target.value, 'passwordRegister'));
            infoToast();
          }}
          value={password}
        />

        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

export default HomeBookRegister;
