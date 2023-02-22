import { USER_DATA, USER_DATA_ERROR, USER_DATA_LOADING } from "../actions";

const initialState = {
  data: undefined,
  isLoading: true,
  isError: false,
};
const userData = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case USER_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default userData;
