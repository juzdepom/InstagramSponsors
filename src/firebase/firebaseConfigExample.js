import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XX.firebaseapp.com",
    databaseURL: "https://XX.firebaseio.com",
    projectId: "XXX",
    storageBucket: "XXX",
}
export const firebaseApp = firebase.initializeApp(firebaseConfig);
