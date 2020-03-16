import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

console.log(firestore.collection('users'));
