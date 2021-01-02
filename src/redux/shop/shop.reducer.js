import SHOP_DATA from '../../pages/shop/shop-page.data';
const DEFAULT_STATE = {
  collection: SHOP_DATA,
};

const shopReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopReducer;
