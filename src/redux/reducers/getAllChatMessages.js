import {
  GET_ALL_CHAT_MESSAGES,
  GET_ALL_CHAT_MESSAGES_ERROR,
  GET_ALL_CHAT_MESSAGES_LOADING,
} from "../actions";

const initialState = {
  messages: [],
  isLoading: GET_ALL_CHAT_MESSAGES_LOADING,
  isError: GET_ALL_CHAT_MESSAGES_ERROR,
};
const getMessages = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHAT_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case GET_ALL_CHAT_MESSAGES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_ALL_CHAT_MESSAGES_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getMessages;
