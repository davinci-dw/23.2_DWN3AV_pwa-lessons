console.log("esta funcionando");

if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
    .then((registration) => {
        console.log("service worker registrado");
    })
    .catch((error) => {
        console.log("service worker no registrado");
    });
}

const card_button = document.getElementById("card_button");
card_button.addEventListener("click", () => {
    console.log("tarjeta clickeada");
});