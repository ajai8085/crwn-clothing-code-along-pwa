import UserActionTypes from './user.types';

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

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS,
});

export const signOutFailed = (message) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: message,
});

export const signUpStart = (userCrentials) => ({
  type: UserActionTypes.SIGNUP_START,
  payload: userCrentials,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFailed = (message) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: message,
});
