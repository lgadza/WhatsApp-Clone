import { CREATE_CHAT } from "../actions";
const initialState = {
  chat: [],
};
const createChat = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHAT:
      return {
        ...state,
        chat: action.payload,
      };
    default:
      return state;
  }
};
export default createChat;
