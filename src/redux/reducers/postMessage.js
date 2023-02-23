import { POST_MESSAGES } from "../actions";
const initialState = {
  messages: "",
};
const postMessages = (state = initialState, action) => {
  switch (action.type) {
    case POST_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    default:
      return state;
  }
};
export default postMessages;
