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
    caches.open("mi-cache-2").then((cache) => {
        cache.addAll([
            '/',
            '/main.js'
        ]);
    });
});

self.addEventListener("fetch", (e) => {
   console.log("fetch trigger", e.request.url);
   caches.has("mi-cache-1")
   .then(respuesta => {
       /*caches.open("mi-cache-1").then(cache => {
           cache.match("main.js").then(respuesta => {
               console.log("archivo cacheado", respuesta);
           })
       });*/
   });
});