import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import './HomeBookRegister.scss';

function HomeBookRegister({
  email,
  password,
  nickname,
  handleSubmit,
  changeField,
  isPasswordToastVisible,
  setPasswordToastVisible,
}) {
  const dispatch = useDispatch();

  // Je conditionne l'affichage du toast "password info"
  // Afin d'éviter que 10 toasts ne se lancent en meme temps
  const infoPasswordToast = () => {
    if (!isPasswordToastVisible) {
      toast.info('Le mot-de-passe doit contenir minimum 4 caractères, dont 1 minuscule, 1 majuscule et 1 caractère spécial', {
        position: 'top-right',
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setPasswordToastVisible(true);
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
            infoPasswordToast();
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
            infoPasswordToast();
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
            infoPasswordToast();
          }}
          value={password}
        />

        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

export default HomeBookRegister;
