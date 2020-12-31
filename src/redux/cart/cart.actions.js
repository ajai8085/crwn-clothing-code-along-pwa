import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (cartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const removeItem = (cartItemId) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: cartItemId,
});
