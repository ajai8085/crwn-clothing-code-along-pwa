import { takeLatest, put, call, all, take } from 'redux-saga/effects';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';
import {
  signInFailure,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from './user.actions';
import UserActionTypes from './user.types';

function* getSnapsotFormUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshopt = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshopt.id, ...userSnapshopt.data() }));
  } catch (exception) {
    yield put(signInFailure(exception.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapsotFormUserAuth(user);
  } catch (exception) {
    yield put(signInFailure(exception.message));
  }
}
export function* onGoogleSigninStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapsotFormUserAuth(user);
  } catch (exception) {
    yield put(signInFailure(exception.message));
  }
}

export function* onSignInWithEmailStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapsotFormUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (exception) {
    yield put(signOutFailed(exception.message));
  }
}
export function* onSignoutUserSession() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, signOut);
}

function* signUpStart({ payload: { email, password, displayName } }) {
  try {
    console.log(email);
    console.log(password);
    console.log(displayName);
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    // const userRef = yield call(
    //   createUserProfileDocument,
    //   { email, password },
    //   { displayName }
    // );

    //yield getSnapsotFormUserAuth({email,password});

    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailed(error.message));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapsotFormUserAuth(user, additionalData);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpUser() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUpStart);
}

export function* userSagas() {
  yield console.log('user sagas');
  yield all([
    call(onGoogleSigninStart),
    call(onSignInWithEmailStart),
    call(onCheckUserSession),
    call(onSignoutUserSession),
    call(onSignUpUser),
    call(onSignUpSuccess),
  ]);
}
