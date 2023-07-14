import {
  ADD_TO_CART,
  FETCHING_FAILURE,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "./actionTypes";

export const initialState = {
  users: [],
  loading: false,
  cart: [],
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        loading: true,
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case ADD_TO_CART:
      return {
        ...state,
        loading: false,
        cart: [action.payload, ...state.cart],
        error: "",
      };

    case FETCHING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default userReducer;
