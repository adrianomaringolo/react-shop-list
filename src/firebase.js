// Copy and paste this into your JavaScript code to initialize the Firebase SDK.
// You will also need to load the Firebase SDK.
// See https://firebase.google.com/docs/web/setup for more details.

import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  locationId: process.env.REACT_APP_FB_LOCATION,
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
})

const db = firebase.firestore()
const auth = firebase.auth

export default firebase
export { db, auth }
