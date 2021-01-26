import { ShopActionTypes } from './shop.types';
const DEFAULT_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return { ...state, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    default:
      return state;
  }
};
export default shopReducer;
