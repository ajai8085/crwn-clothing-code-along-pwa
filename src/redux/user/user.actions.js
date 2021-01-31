import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndpassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndpassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: errorMessage,
});
