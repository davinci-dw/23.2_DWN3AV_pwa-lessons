const jsonConverter = (response) => response.json();

const app = new Vue({
        el: '#app',
        data: {
            estadoModal: false,
            pokemonActual: null,
            titulo: 'Hola mundo con Vue',
            pokemons: [],
            historial: []
        },
        methods: {
            guardarListaLocal() {
                localStorage.setItem("pokemons", JSON.stringify(this.pokemons));
            },
            guardarPokemonLocal(data, url) {
                const pokemon = {...data, url};
                const historial = JSON.parse(localStorage.getItem("historial"));
                if (historial) {
                    historial.push(pokemon);
                    this.historial = historial;
                } else {
                    this.historial.push(pokemon);
                }
                localStorage.setItem("historial", JSON.stringify(this.historial));
            },
            obtenerListaLocal() {
                const pokemons = localStorage.getItem("pokemons");
                if (pokemons) {
                    this.pokemons = JSON.parse(pokemons);
                }
            },
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
                    this.guardarPokemonLocal(this.pokemonActual, url);
                    this.mostrarModal();
                });
            }
        },
        async mounted() {
            this.obtenerListaLocal();
            if(this.pokemons.length === 0) {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0");
                const data = await response.json();
                this.pokemons = data.results;
                this.guardarListaLocal();
            }
        }
    }
);

console.log("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0");