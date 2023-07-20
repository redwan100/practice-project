import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/posts/PostSlice";
import cartReducer from "../features/cart/CartSlice";

const store = configureStore({
  reducer: {
    postReducer: PostReducer,
    cartReducer: cartReducer,
  },
});

export default store;
