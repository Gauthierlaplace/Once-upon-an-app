import {
  CHANGE_LOGIN_OR_REGISTER_FIELD,
  SAVE_LOGIN_SUCCESSFUL,
  SAVE_REGISTER_SUCCESSFUL,
  HAS_FAILED_ACTION,
  LOG_OUT,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  nickname: '',
  logged: false,
  token: '',
  currentUserId: null,

  // Probleme avec un champ unique email, il se remplit à droite quand tapé à gauche (et vice versa)
  nicknameRegister: '',
  emailRegister: '',
  passwordRegister: '',

  // Pour afficher les messages "inscription réussie" ou "erreur email/mdp"
  hasRegisteredSuccessfully: false,
  hasFailedLogin: false,
  hasFailedRegister: false,


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
      currentUserId: action.payload.id,
      token: action.payload.token,

      // pour la sécurité : on efface les identifiants dès qu'on n'en a plus besoin
      email: '',
      password: '',
      hasRegisteredSuccessfully: false,
      hasFailedLogin: false,
    };

  case SAVE_REGISTER_SUCCESSFUL:
    return {
      ...state,
      nickname: action.payload.nickname,
      email: action.payload.email,
      emailRegister: '',
      passwordRegister: '',
      nicknameRegister: '',
      hasRegisteredSuccessfully: true,
    };

  case HAS_FAILED_ACTION:
    if (action.payload.actionFailed === 'login') {
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        hasFailedLogin: true,
      };
    }

    return {
      ...state,
      logged: false,
      emailRegister: '',
      passwordRegister: '',
      nicknameRegister: '',
      hasFailedRegister: true,
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
