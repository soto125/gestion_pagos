document.getElementById("confirmar").addEventListener("click", () => {
  const monto = document.getElementById("monto").value;
  const metodo = document.querySelector('input[name="metodo"]:checked');

  if (!monto || !metodo) {
    alert("Por favor ingrese el monto y seleccione un método de pago.");
    return;
  }

  document.getElementById("cantidadPagada").innerText = "$" + parseFloat(monto).toFixed(3);
  document.getElementById("modal").classList.remove("oculto");
});

document.getElementById("comentar").addEventListener("click", () => {
  alert("Gracias por su comentario.");
  document.getElementById("modal").classList.add("oculto");
});
