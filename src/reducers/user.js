import {
  CHANGE_LOGIN_OR_REGISTER_FIELD,
  SAVE_LOGIN_SUCCESSFUL,
  SAVE_REGISTER_SUCCESSFUL,
  ERROR_WHILE_LOGIN,
  LOG_OUT,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  nickname: '',
  logged: false,
  token: '',

  // Probleme avec un champ unique email, il se remplit à droite quand tapé à gauche (et vice versa)
  emailRegister: '',
  passwordRegister: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case CHANGE_LOGIN_OR_REGISTER_FIELD:
    // plusieurs traitements sur une seule action : changer les champs de la page d'accueil
    // // email
    // if (action.payload.identifier === 'email') {
    //   return {
    //     ...state,
    //     email: action.payload.newValue,
    //   };
    // }

    // // password
    // if (action.payload.identifier === 'password') {
    //   return {
    //     ...state,
    //     password: action.payload.newValue,
    //   };
    // }

    // Pour factoriser en une ligne :
    return {
      ...state,
      [action.payload.identifier]: action.payload.newValue,
    };

  case SAVE_LOGIN_SUCCESSFUL:
    return {
      ...state,
      logged: true,
      nickname: action.payload.nickname,
      token: action.payload.token,

      // pour la sécurité : on efface les identifiants dès qu'on a plus besoin
      // Todo dé-commenter la ligne suivante quand ce sera OK
      // email: '',
      password: '',
    };

  case SAVE_REGISTER_SUCCESSFUL:
    return {
      ...state,
      logged: true,
      // Todo corriger ceci quand ça tournera
      email: action.payload.nickname,
      nickname: action.payload.nickname,
      emailRegister: '',
      passwordRegister: '',
    };

  case ERROR_WHILE_LOGIN:
    return {
      ...state,
      logged: false,
      nickname: action.payload.nickname,
      token: action.payload.token,
      email: '',
      password: '',
    };

  case LOG_OUT:
    return {
      ...state,
      logged: false,
      nickname: '',
      token: '',
      email: '',
      password: '',
    };

  default:
    return state;
  }
};

export default reducer;
