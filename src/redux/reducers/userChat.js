import {
  USER_CHAT_DATA,
  USER_CHAT_DATA_ERROR,
  USER_CHAT_DATA_LOADING,
} from "../actions";

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};
const userChat = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHAT_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case USER_CHAT_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_CHAT_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default userChat;
