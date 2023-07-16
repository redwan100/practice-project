import { DECREMENT, INCREMENT, RESET } from "../actionTypes/actionType";

const initialCounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};


export default counterReducer;