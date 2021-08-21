import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-811UyAw9DVrVYauv936PXkqGNd6KetY",
    authDomain: "crudrestoo.firebaseapp.com",
    projectId: "crudrestoo",
    storageBucket: "crudrestoo.appspot.com",
    messagingSenderId: "104129731121",
    appId: "1:104129731121:web:d0c37d83f617f7b0f49310"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)