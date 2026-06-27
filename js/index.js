import { agregarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarCarrito } from "./ui.js";

const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    fetch("./data/productos.json")
    .then(res => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("card");

            const img = document.createElement("img");
            img.src = `./${producto.img}` ;
            img.alt = producto.nombre;

            const titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            const precio = document.createElement("p");
            precio.textContent = `$${producto.precio}`;

            const boton = document.createElement("button");
            boton.classList.add("btn", "btn--primary");
            boton.textContent  = "Agregar al carrito";
  
            boton.addEventListener("click", () => {
                agregarCarrito(producto);
            });
            tarjeta.appendChild(img);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(boton);

            contenedor.appendChild(tarjeta);

        }); 

    })
    .catch((error) =>    console.log(error));
};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarCarrito(carrito);
    renderizarProductos();
});