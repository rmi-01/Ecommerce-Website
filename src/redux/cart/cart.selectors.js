//user.currentUser
export const selectCurrentUser = (state) => state.user.currentUser;

//cart.hidden
export const selectCartDisplay = (state) => state.cart.hidden;

//cart.cartItems
export const selectCartItems = (state) => state.cart.cartItems;

//cart.cartItems.length
export const selectCartItemsCount = (state) =>
  state.cart.cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );
