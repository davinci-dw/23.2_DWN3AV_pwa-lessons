//10 animales array
const animales = [
    "perro",
    "gato",
    "pez",
    "tortuga",
    "conejo",
    "gallina",
    "caballo",
    "vaca"
];

caches.keys().then(cache => {
    console.log("cache", cache)
})

self.addEventListener("message", (e) => {
    console.log("message received from main.js");
    const isInAnimalList = animales.includes(e.data);
    if(isInAnimalList) {
        setTimeout(() => {
            self.postMessage({
                status: "ok",
                message: "animal found"
            });
        }, 2000);
    } else {
        self.postMessage({
            status: "error",
            message: "animal not found"
        });
    }
});

self.addEventListener("install", (e) => {
    console.log("install");
    const cache = caches.open("mi-cache-2").then((cache) => {
        cache.addAll([
            '/',
            '/images/warning.png',
            'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
            'https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0',
            '/main.js'
        ]);
    });
    e.waitUntil(cache);
});

self.addEventListener("fetch", (e) => {
    const url = e.request.url;
    console.log(url);

    const cacheResponse = caches.match(e.request);

    e.respondWith(cacheResponse);

});