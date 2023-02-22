import { GET_ME, GET_ME_ERROR, GET_ME_LOADING } from "../actions";

const initialState = {
  me: undefined,
  isLoading: true,
  isError: false,
};
const getMe = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME:
      return {
        ...state,
        me: action.payload,
      };
    case GET_ME_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_ME_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default getMe;
