import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShopData = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShopData],
  (d) => d.collection
);

// export const selectCollection = memoize((collectionUrlParam) =>
//   createSelector([selectShopCollection], (d) =>
//     d.find((e) => e.id === COLLECTION_ID_MAP[collectionUrlParam])
//   )
// );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollectionItemsBySection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (d) => d[collectionUrlParam])
);
