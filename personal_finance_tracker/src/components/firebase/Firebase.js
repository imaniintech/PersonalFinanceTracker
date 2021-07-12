import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD_KNhGUen5Bd-GoMACQdZwpOsG_Gzsk-0",
    authDomain: "personal-finance-tracker-ba879.firebaseapp.com",
    projectId: "personal-finance-tracker-ba879",
    storageBucket: "personal-finance-tracker-ba879.appspot.com",
    messagingSenderId: "159565724613",
    appId: "1:159565724613:web:8783f32af59991e199a9ac",
    measurementId: "G-BKM0VTWX73"
}

const firebase1 = firebase.initializeApp(config)
export default firebase1;