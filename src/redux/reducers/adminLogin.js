import {
  GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR,
  GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
  GET_ADMIN_LOGIN_ACCESSTOKEN,
} from "../actions";

const initialState = {
  accessToken: "",
  isLoading: true,
  isError: false,
};
const adminSignInToken = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_LOGIN_ACCESSTOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default adminSignInToken;
