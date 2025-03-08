import {Ingreso,Ingreso_precio} from "./totalizador";

const cantidad_item=document.querySelector("#Cantidad_item");
const precio_item=document.querySelector("#Precio_item");
const form= document.querySelector("#totalizador-form");
const div= document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad_item.value);

  div.innerHTML = "<p>" + Ingreso(cantidaditem) + "</p>";
});


