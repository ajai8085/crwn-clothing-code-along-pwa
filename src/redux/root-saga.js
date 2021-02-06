import { all, call } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
// Add all the startup sagas here
export default function* rootSaga() {
  yield console.log('root saga');
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

//call effect will call a sideeffect function
// all : takes an array of sagas , if we have more than one sagas 'all' make the saga run side by side(individual tasks ) rather than one after other
