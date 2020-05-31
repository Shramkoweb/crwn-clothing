import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBid9mxl4bYGvqKnHiV8A0E-KnMJkWAuSg',
  authDomain: 'crwn-clothes-43972.firebaseapp.com',
  databaseURL: 'https://crwn-clothes-43972.firebaseio.com',
  projectId: 'crwn-clothes-43972',
  storageBucket: 'crwn-clothes-43972.appspot.com',
  messagingSenderId: '637544235873',
  appId: '1:637544235873:web:110a4d2b07c747f456fb20',
  measurementId: 'G-WDVMZSRNWJ'
};

export const createUserProfileDocument = async (userAuth, additionalUserInfo) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalUserInfo
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collecctionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(item => {
    const newDocRef = collecctionRef.doc();

    batch.set(newDocRef, item);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  // throw error if we had empty collections or offline
  if (collections.empty) {
    throw new Error('Empty collections or you are offline')
  }

  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
