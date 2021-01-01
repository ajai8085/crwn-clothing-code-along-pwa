export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((it) => it.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((it) =>
      it.id === cartItemToAdd.id ? { ...it, quantity: it.quantity + 1 } : it
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFormCart = (cartItems, id) => {
  const existingCartItem = cartItems.find((it) => it.id === id);
  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((it) => it.id !== id);
    }

    return cartItems.map((it) =>
      it.id === id ? { ...it, quantity: it.quantity - 1 } : it
    );
  }
};
