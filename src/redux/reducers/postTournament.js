import { POST_TOURNAMENT } from "../actions";
const initialState = {
  tournament: "",
};
const postTournament = (state = initialState, action) => {
  switch (action.type) {
    case POST_TOURNAMENT:
      return {
        ...state,
        tournament: action.payload,
      };

    default:
      return state;
  }
};
export default postTournament;
