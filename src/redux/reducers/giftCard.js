import {
  GIFT_CARD_DATA,
  GIFT_CARD_DATA_ERROR,
  GIFT_CARD_DATA_LOADING,
} from "../actions";

const initialState = {
  data: undefined,
  isLoading: true,
  isError: false,
};
const giftData = (state = initialState, action) => {
  switch (action.type) {
    case GIFT_CARD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case GIFT_CARD_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GIFT_CARD_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default giftData;
