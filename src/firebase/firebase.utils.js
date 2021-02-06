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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;

export const addCollectionAndDocuments = async (collecitonKey, objectToAdd) => {
  const collectionRef = firestore.collection(collecitonKey);
  console.log('0000000000000000000000000');
  console.log(objectToAdd);
  const batch = firestore.batch();
  objectToAdd.forEach((it) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, it);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
