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
});