import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from '../Environment.config';

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userDocRef = firestore.doc(`users/${userAuth.uid}`); // get the document reference
  const snapShot = await userDocRef.get(); // get the document snap shot
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userDocRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userDocRef;
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
