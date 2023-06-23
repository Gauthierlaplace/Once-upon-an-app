import { toast } from 'react-toastify';

export const checkPasswordBeforeRegister = (passwordToCheck) => {
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>-_+]/;

  if (
    passwordToCheck.length >= 4
    && lowercaseRegex.test(passwordToCheck)
    && uppercaseRegex.test(passwordToCheck)
    && specialCharRegex.test(passwordToCheck)
  ) {
    return true; // Le mot de passe respecte les critères
  }
  return false; // Le mot de passe ne respecte pas les critères
};

export const checkEmailBeforeRegister = (emailToCheck) => {
  const emailRegex = /^[^\s@]+(\s|[\w-])+@[^\s@]+(\s|[\w-])+\.[^\s@]+$/;
  return emailRegex.test(emailToCheck);
};

export const checkNicknameBeforeRegister = (nicknameToCheck) => (nicknameToCheck !== '');

export const checkPasswordBisBeforeRegister = (password, passwordBis) => (password === passwordBis);

export const checkInfoBeforeRegister = (nickname, email, password, passwordBis) => {
  if (checkNicknameBeforeRegister(nickname) === false) {
    toast.error('Pseudo invalide', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    return false;
  }

  if (checkEmailBeforeRegister(email) === false) {
    toast.error('Email invalide', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    return false;
  }

  if (checkPasswordBeforeRegister(password) === false) {
    toast.error('Le mot-de-passe doit contenir minimum 4 caractères, dont 1 minuscule, 1 majuscule et 1 caractère spécial', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    return false;
  }

  if (checkPasswordBisBeforeRegister(password, passwordBis) === false) {
    toast.error('La confirmation est différente du mot-de-passe', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    return false;
  }

  return true;
};
