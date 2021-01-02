import { createSelector } from 'reselect';
const shopSelector = (state) => state.shop;

export const shopDataSelector = createSelector(
  [shopSelector],
  (d) => d.SHOP_DATA
);
