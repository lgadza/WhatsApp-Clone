import {
  GET_ALL_CHAT,
  GET_ALL_CHAT_ERROR,
  GET_ALL_CHAT_LOADING,
} from "../actions";

const initialState = {
  chats: [],
  isLoading: GET_ALL_CHAT_LOADING,
  isError: GET_ALL_CHAT_ERROR,
};
const getAllChats = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHAT:
      return {
        ...state,
        chats: action.payload,
      };
    case GET_ALL_CHAT_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_ALL_CHAT_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getAllChats;
