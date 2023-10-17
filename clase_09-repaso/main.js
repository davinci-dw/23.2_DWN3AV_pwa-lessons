const jsonConverter = (response) => response.json();

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
                .then(jsonConverter)
                .then(async data => {
                    const {weight, sprites} = data;
                    const {front_shiny} = sprites;
                    this.pokemonActual = {weight, front_shiny};
                    this.mostrarModal();
                });
            }
        },
        async mounted() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0");
            const data = await response.json();
            this.pokemons = data.results;
        }
    }
);

console.log("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0");