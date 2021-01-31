import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSignInSuccess = (user) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});
export const googleSignInFailure = (errorMessage) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = (emailAndpassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndpassword,
});

export const emailSignSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (errorMessage) => ({
  type: UserActionTypes.EMAIL_SIGNIN_FAILURE,
  payload: errorMessage,
});
