import { CHANGE_LOGIN_FIELD, SAVE_LOGIN_SUCCESSFUL, ERROR_WHILE_LOGIN, LOG_OUT } from '../actions/user';

export const initialState = {
    email: '',
    password: '',
    nickname: '',
    logged: false,
    token: '',
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_LOGIN_FIELD:
        // deux traitements sur une seule action : soit changer email, soit changer password
        if (action.payload.identifier === 'email') {
          return {
            ...state,
            email: action.payload.newValue,
          };
        }
        // if (action.payload.identifier === 'password') {
        return {
          ...state,
          password: action.payload.newValue,
        };
  
        /* On pourrait meme l'écrire en une ligne, 
        je le garde en commentaire pour que ça reste plus lisible dans le code :
        return {
          ...state,
          [action.payload.identifier]: action.payload.newValue
        }
        */
  
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