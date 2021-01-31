import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';
import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInFailure,
  emailSignSuccess,
} from './user.actions';
import UserActionTypes from './user.types';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshopt = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapshopt.id, ...userSnapshopt.data() })
    );
  } catch (exception) {
    yield put(googleSignInFailure(exception.message));
  }
}
export function* onGoogleSigninStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshopt = yield userRef.get();

    yield put(
      emailSignSuccess({ id: userSnapshopt.id, ...userSnapshopt.data() })
    );
  } catch (exception) {
    yield put(emailSignInFailure(exception.message));
  }
}

export function* onSignInWithEmailStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSigninStart), call(onSignInWithEmailStart)]);
}
