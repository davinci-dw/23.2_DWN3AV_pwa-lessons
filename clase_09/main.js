const app = new Vue({
        el: '#app',
        data: {
            titulo: 'Hola mundo con Vue',
            pokemons: []
        },
        methods: {
            verPokemon(url) {
               fetch(url)
                .then(response => response.json())
                .then(data => {
                    const {weight, sprites} = data;
                    const {front_shiny} = sprites;
                    console.log(`Nombre: ${front_shiny} - Peso: ${weight}`);
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