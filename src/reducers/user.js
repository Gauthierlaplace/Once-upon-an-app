export const initialState = {
    email: '',
    password: '',
    pseudo: '',
    logged: false,
    token: '',
};
  
const reducer = (state = initialState, action = {}) => {
switch (action.type) {

    default:
    return state;
}
};

export default reducer;