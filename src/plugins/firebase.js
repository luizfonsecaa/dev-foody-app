import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwJQ8yW4NXYzT4rx8fyZ4t0t9GW6fNAX4",
    authDomain: "dev-foody.firebaseapp.com",
    databaseURL: "https://dev-foody.firebaseio.com",
    projectId: "dev-foody",
    storageBucket: "dev-foody.appspot.com",
    messagingSenderId: "623400202242",
    appId: "1:623400202242:web:4be2756c52134cb0f5b71b"
};

firebase.initializeApp(firebaseConfig)

export default firebase

