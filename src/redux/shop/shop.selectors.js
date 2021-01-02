import { createSelector } from 'reselect';
const selectShopData = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShopData],
  (d) => d.collection
);
