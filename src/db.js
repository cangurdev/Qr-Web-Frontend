import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp(process.env.FIREBASE_SERVICE_ACCOUNT_QR_MENU_MOBILE)
    .firestore()
