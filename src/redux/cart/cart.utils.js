export const addItemsToCart = (cartItems, newItem) => {
  let existingItem = cartItems.find((cartItem) => cartItem.id === newItem.id);
  if (existingItem)
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const clearItemsFromCart = (cartItems, newItem) =>
  cartItems.filter((cartItem) => cartItem.id !== newItem.id);
