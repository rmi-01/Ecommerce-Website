import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state) => state.cart;

//cart.hidden
export const selectCartDisplay = createSelector(
  selectUser,
  (cart) => cart.hidden
);

//cart.cartItems
export const selectCartItems = createSelector(
  selectUser,
  (cart) => cart.cartItems
);

//cart.cartItems.length
export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);
