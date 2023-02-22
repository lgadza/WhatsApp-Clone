import { GET_USERS, GET_USERS_ERROR, GET_USERS_LOADING } from "../actions";

const initialState = {
  users: [],
  isLoading: true,
  isError: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USERS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
