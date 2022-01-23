import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBpIsUnfvMF3m1Tm1e7iklj7EXWjdV55Pg',
  authDomain: 'pdshare-aadd2.firebaseapp.com',
  databaseURL: 'https://pdshare-aadd2-default-rtdb.firebaseio.com',
  projectId: 'pdshare-aadd2',
  storageBucket: 'pdshare-aadd2.appspot.com',
  messagingSenderId: '504422265939',
  appId: '1:504422265939:web:ed67cef4a70ba259eb42a6',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };