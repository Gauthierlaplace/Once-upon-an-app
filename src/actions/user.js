// action déclenchée quand l'un des deux inputs (email / password) change de valeur
export const CHANGE_LOGIN_OR_REGISTER_FIELD = 'CHANGE_LOGIN_OR_REGISTER_FIELD';
export const SAVE_LOGIN_SUCCESSFUL = 'SAVE_LOGIN_SUCCESSFUL';
export const SAVE_REGISTER_SUCCESSFUL = 'SAVE_REGISTER_SUCCESSFUL';
export const ERROR_WHILE_LOGIN = 'ERROR_WHILE_LOGIN';
export const LOG_OUT = 'LOG_OUT';

/* on ne sait pas s'il y a besoin d'infos en payload : on ne met pas de payload,
on verra si on est bloqué au niveau du case du reducer parce qu'il manque une/des infos */

export const changeLoginOrRegisterField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_OR_REGISTER_FIELD,
  payload: {
    newValue: newValue,
    identifier: identifier,
  },
});

export const saveLoginSuccessful = (userNickname, userId, userToken) => ({
  type: SAVE_LOGIN_SUCCESSFUL,
  payload: {
    nickname: userNickname,
    id: userId,
    token: userToken,
  },
});

export const saveRegisterSuccessful = (userNickname) => ({
  type: SAVE_REGISTER_SUCCESSFUL,
  payload: {
    nickname: userNickname,
  },
});

export const errorWhileLogin = (nickname, token) => ({
  type: ERROR_WHILE_LOGIN,
  payload: {
    nickname: nickname,
    token: token,
  },
});

export const logOut = () => ({
  type: LOG_OUT,
})