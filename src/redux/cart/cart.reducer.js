import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cartReducer",
  initialState: {
    hidden: true,
  },
  reducers: {
    TOGGLE_CART_DISPLAY: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export default cart.reducer;

export const { TOGGLE_CART_DISPLAY } = cart.actions;
