import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
var firebaseConfig = {
    apiKey: process.env.FIREBASE_SERVICE_ACCOUNT_QR_MENU_MOBILE,
    authDomain: "qr-menu-mobile.firebaseapp.com",
    databaseURL: "https://qr-menu-mobile.firebaseio.com",
    projectId: "qr-menu-mobile",
    storageBucket: "qr-menu-mobile.appspot.com",
};
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()
