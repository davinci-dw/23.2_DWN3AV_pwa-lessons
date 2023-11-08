if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
    .then((registration) => {
        console.log("service worker registrado");
    })
    .catch((error) => {
        console.log("service worker no registrado");
    });
}


const app = new Vue({
        el: '#app',
        data: {
            estadoModal: false,
            pokemonActual: null,
            titulo: 'Hola mundo con Vue',
            pokemons: []
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
            fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0")
                .then(response => response.json())
                .then(data => {
                    this.pokemons = data.results;
                });
        }
    }
);

console.log("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0");