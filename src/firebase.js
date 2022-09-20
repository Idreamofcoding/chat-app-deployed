import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'



const firebaseApp = initializeApp({
    apiKey: "AIzaSyDTpqUDh-0eEVpRhyfQrQ8DnknWZgse59o",
    authDomain: "chat-for-portf.firebaseapp.com",
    projectId: "chat-for-portf",
    storageBucket: "chat-for-portf.appspot.com",
    messagingSenderId: "30357175180",
    appId: "1:30357175180:web:4a03b11e14551f52de74a9"
  })

const db = getFirestore()
const provider = new GoogleAuthProvider()

export {db, provider}