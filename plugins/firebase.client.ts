import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyC37SqfWkNIYgqtR8yp4nbOe4g_3aHD6e4",
    authDomain: "wajitech-3a8b2.firebaseapp.com",
    projectId: "wajitech-3a8b2",
    storageBucket: "wajitech-3a8b2.appspot.com",
    messagingSenderId: "652756890022",
    appId: "1:652756890022:web:d47e4e7b114a4f586e5f67",
    measurementId: "G-BEKPNX40SH",
}

const firebaseApp = initializeApp(config);
const firedb = getFirestore(firebaseApp);

//export default {fireApp};
export default firedb;