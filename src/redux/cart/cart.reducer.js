import { createSlice } from "@reduxjs/toolkit";
import { addItemsToCart } from "./cart.utils";

const cart = createSlice({
  name: "cartReducer",
  initialState: {
    hidden: true,
    cartItems: [],
  },
  reducers: {
    TOGGLE_CART_DISPLAY: (state) => {
      state.hidden = !state.hidden;
    },
    ADD_CART_ITEMS: (state, action) => {
      state.cartItems = addItemsToCart(state.cartItems, action.payload);
    },
  },
});

export default cart.reducer;

export const { TOGGLE_CART_DISPLAY, ADD_CART_ITEMS } = cart.actions;
