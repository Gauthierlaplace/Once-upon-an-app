import { toast } from 'react-toastify';

export const checkPasswordBeforeRegister = (passwordToCheck) => {
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailToCheck);
};

export const checkNicknameBeforeRegister = (nicknameToCheck) => (nicknameToCheck !== '');

export const checkInfoBeforeRegister = (email, password, nickname) => {
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
    toast.error('Mot-de-passe invalide', {
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
