import { takeLatest, put, call, all } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

function* clearCartOnSignOut() {
  yield console.log('signiout sagas');
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield console.log('on signout success register sagas ');
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield console.log('cart sagas');
  yield all([call(onSignOutSuccess)]);
}
