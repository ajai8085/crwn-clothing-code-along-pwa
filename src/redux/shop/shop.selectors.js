import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShopData = (state) => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
export const selectShopCollection = createSelector(
  [selectShopData],
  (d) => d.collection
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollection], (d) =>
    d.find((e) => e.id === COLLECTION_ID_MAP[collectionUrlParam])
  )
);
