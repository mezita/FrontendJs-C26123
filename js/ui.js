export const actualizarCarrito = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

export const mostrarMensaje = (texto) => {
  //alert(texto);
  Swal.fire({
    text: texto,
  });
};
