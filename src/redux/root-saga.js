import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
// Add all the startup sagas here
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}

//call effect will call a sideeffect function
// all : takes an array of sagas , if we have more than one sagas 'all' make the saga run side by side(individual tasks ) rather than one after other
