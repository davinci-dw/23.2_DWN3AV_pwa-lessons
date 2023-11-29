
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6r-lPy-EClqFBBpbeJQ3kgWL3Mc3HP84",
    authDomain: "thepokeapp-01.firebaseapp.com",
    projectId: "thepokeapp-01",
    storageBucket: "thepokeapp-01.appspot.com",
    messagingSenderId: "1035814182424",
    appId: "1:1035814182424:web:a246e5ab8ebf3cb3fa2d6d",
    measurementId: "G-EGZVKW2518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const application = new Vue({
        el: '#app',
        data: {
            email: "",
            password: ""
        },
        methods: {
            login() {
                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then(userCredential => {
                        window.location.replace("/");
                    })
                    .catch(error => {
                        const errorCode = error.code;
                        const errorMessage = error.message;

                        alert(errorMessage);
                    })
            }
        }
    }
);