import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA4FvpXvkFdIkZcuHE-RPmijdaqaOS-RtY',
  authDomain: 'facebook-messenger-clone-dc26f.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-clone-dc26f.firebaseio.com',
  projectId: 'facebook-messenger-clone-dc26f',
  storageBucket: 'facebook-messenger-clone-dc26f.appspot.com',
  messagingSenderId: '318486879998',
  appId: '1:318486879998:web:5dfb077df2aa4f842a4faf',
  measurementId: 'G-XJKZMJ11JM',
})
const db = firebaseApp.firestore()

export default db
