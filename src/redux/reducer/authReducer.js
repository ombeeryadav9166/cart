const initialState = {isLoggedIn:false};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };

    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
     
    default:
      return state;
  }
};
export default authReducer;