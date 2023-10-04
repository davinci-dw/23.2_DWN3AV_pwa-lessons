console.log("esta funcionando");

const myWorker = new Worker("worker.js");

const card_button = document.getElementById("card_button");
card_button.addEventListener("click", () => {
    console.log("tarjeta clickeada");
    myWorker.postMessage("perro");
});

myWorker.addEventListener("message", (e) => {
    console.log("mensaje recibido desde worker.js");
    console.log(e.data);
});