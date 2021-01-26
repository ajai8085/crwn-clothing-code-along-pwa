import { ShopActionTypes } from './shop.types';
const DEFAULT_STATE = {
  collection: null,
};

const shopReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collection: action.payload };
    default:
      return state;
  }
};
export default shopReducer;
