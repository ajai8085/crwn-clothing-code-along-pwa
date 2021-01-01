import { createSelector } from 'reselect';

// npm install reselect
// get the state and retur the slice of the state and memorize it , this will prevent un-necessary re-rendering

//follwoing are the selectors for selecting the data slice
export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartitems) =>
    cartitems.reduce(
      (accumulated, cartItem) =>
        (accumulated = accumulated + cartItem.quantity),
      0
    )
);
