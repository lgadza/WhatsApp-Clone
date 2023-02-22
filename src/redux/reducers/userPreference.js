import {
  USER_PREFERENCE_DATA,
  USER_PREFERENCE_DATA_ERROR,
  USER_PREFERENCE_DATA_LOADING,
} from "../actions";

const initialState = {
  data: undefined,
  isLoading: true,
  isError: false,
};
const userPreference = (state = initialState, action) => {
  switch (action.type) {
    case USER_PREFERENCE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case USER_PREFERENCE_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_PREFERENCE_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default userPreference;
