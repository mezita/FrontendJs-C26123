import { obtenerCarrito } from "./storage.js";
import { actualizarCarrito } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarCarrito(carrito);
});


