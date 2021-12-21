import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAgixjyl5HSXBnrhaioZ9RttQAW11WMEXs",
    authDomain: "whatsapp-clone-acac5.firebaseapp.com",
    projectId: "whatsapp-clone-acac5",
    storageBucket: "whatsapp-clone-acac5.appspot.com",
    messagingSenderId: "695273847716",
    appId: "1:695273847716:web:efe3a7282dabbaf219df31",
    measurementId: "G-0JHHN4S6H2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;