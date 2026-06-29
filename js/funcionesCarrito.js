import {
  guardarCarrito,
  obtenerCarrito,
  vaciarStorageCarrito,
} from "./storage.js";

import { actualizarCarrito, mostrarMensaje } from "./ui.js";

export const agregarCarrito = (producto) => {
  const carrito = obtenerCarrito();
  carrito.push(producto);
  guardarCarrito(carrito);

  actualizarCarrito(carrito);
  mostrarMensaje("Producto agregado 🕯️");
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1);
  guardarCarrito(carrito);

  actualizarCarrito(carrito);
  mostrarMensaje("Producto eliminado 🕯️");
};

export const vaciarCarrito = () => {
  vaciarStorageCarrito();
  actualizarCarrito([]);
  mostrarMensaje("Carrito vacio 🕯️");
};
