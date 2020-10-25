import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
