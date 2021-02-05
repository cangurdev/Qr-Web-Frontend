import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
const firebaseConfig = {
    apiKey: process.env.FIREBASE_SERVICE_ACCOUNT_QR_MENU_MOBILE,
    authDomain: "qr-menu-mobile.firebaseapp.com",
    databaseURL: "https://qr-menu-mobile.firebaseio.com",
    projectId: "qr-menu-mobile",
    storageBucket: "qr-menu-mobile.appspot.com",
};
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()


const admin = require("firebase-admin");

const serviceAccount = require("/home/can/Downloads/qr-menu-mobile-firebase-adminsdk-achgw-20adc5c26a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://qr-menu-mobile.firebaseio.com"
});
