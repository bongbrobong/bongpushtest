import firebase from 'firebase';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyAOtFme62W1uJ-1ulQLlJou-RB1oPYQqT0",
    authDomain: "pushbongtest.firebaseapp.com",
    projectId: "pushbongtest",
    storageBucket: "pushbongtest.appspot.com",
    messagingSenderId: "83379987643",
    appId: "1:83379987643:web:8805a71b8bebd63955b59e",
    measurementId: "G-51YZ41QYCK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
