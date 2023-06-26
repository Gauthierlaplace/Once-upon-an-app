// action déclenchée quand un input (email / password / nickname) change de valeur
export const CHANGE_FIELD = 'CHANGE_FIELD';

export const SAVE_LOGIN_SUCCESSFUL = 'SAVE_LOGIN_SUCCESSFUL';
export const SAVE_REGISTER_SUCCESSFUL = 'SAVE_REGISTER_SUCCESSFUL';

// action commune pour login ou register
export const HAS_FAILED_ACTION = 'HAS_FAILED_ACTION';
export const LOG_OUT = 'LOG_OUT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

/* MEMO : quand on ne sait pas s'il y a besoin d'infos en payload, on ne met pas de payload.
On verra si on est bloqué au niveau du case du reducer parce qu'il manque une/des infos */

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
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

export const saveRegisterSuccessful = (userEmail) => ({
  type: SAVE_REGISTER_SUCCESSFUL,
  payload: {
    email: userEmail,
  },
});

export const hasFailedAction = (loginOrRegister) => ({
  type: HAS_FAILED_ACTION,
  payload: {
    actionType: loginOrRegister,
  },
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});
