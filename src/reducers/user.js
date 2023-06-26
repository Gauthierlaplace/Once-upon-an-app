import {
  CHANGE_FIELD,
  SAVE_LOGIN_SUCCESSFUL,
  SAVE_REGISTER_SUCCESSFUL,
  HAS_FAILED_ACTION,
  LOG_OUT,
  DELETE_ACCOUNT,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  nickname: '',
  logged: false,
  currentUserId: null,
  // Je récupère le token dans le localStorage
  token: localStorage.getItem('token'),

  // Probleme avec un champ unique email, il se remplit à droite quand tapé à gauche (et vice versa)
  nicknameRegister: '',
  emailRegister: '',
  passwordRegister: '',
  passwordBisRegister: '',

  // Pour afficher les messages "inscription réussie" ou "erreur email/mdp"
  hasRegisteredSuccessfully: false,
  hasFailedLogin: false,
  hasFailedRegister: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case CHANGE_FIELD:
    // plusieurs traitements sur une seule action : changer les champs de la page d'accueil
    // "identifier" indique si on change le champ "email", "password", "nickname", etc
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
      email: action.payload.email,
      nicknameRegister: '',
      emailRegister: '',
      passwordRegister: '',
      passwordBisRegister: '',
      hasRegisteredSuccessfully: true,
    };

  case HAS_FAILED_ACTION:
    // Si c'est la connexion qui a échoué
    if (action.payload.actionType === 'login') {
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        hasFailedLogin: true,
      };
    }

    // Sinon (si c'est l'inscription qui a échoué)
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

  case DELETE_ACCOUNT:
    return {
      ...state,
      currentUserId: null,
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
