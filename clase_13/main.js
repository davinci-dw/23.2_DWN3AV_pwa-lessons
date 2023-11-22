// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, onSnapshot, collection, query, where} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";


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
const auth = getAuth(app);
const db = getFirestore(app);

if(false && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
    .then((registration) => {
        console.log("service worker registrado");
    })
    .catch((error) => {
        console.log("service worker no registrado");
    });
}


const application = new Vue({
        el: '#app',
        data: {
            estadoModal: false,
            pokemonActual: null,
            titulo: 'Hola mundo con Vue',
            pokemons: [],
            nombre_usuario: ''
        },
        methods: {
            mostrarModal() {
                this.estadoModal = true;
            },
            ocultarModal() {
                this.estadoModal = false;
            },
            verPokemon(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const {weight, sprites} = data;
                        const {front_shiny} = sprites;
                        this.pokemonActual = {weight, front_shiny};
                        this.mostrarModal();
                    });
            }
        },
        mounted() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    //const querySnapshot = await
                        onSnapshot(
                            query(
                                collection(db, "usuarios"),
                                where("uid", "==", user.uid)
                            ), (querySnapshot) => {
                            querySnapshot.forEach((doc, i) => {
                                const id = doc.id;
                                const data = doc.data();
                                //console.log(`${id} => ${data.uid}`);
                                this.nombre_usuario = data.nombre;
                                console.log(i,`${id} => ${data.nombre}`);
                            });

                        })

                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/auth.user
                    //const uid = user.uid;
                    fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0")
                        .then(response => response.json())
                        .then(data => {
                            this.pokemons = data.results;
                        });
                    // ...
                } else {
                    window.location.replace("login");
                }
            });



        }
    }
);

console.log("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0");