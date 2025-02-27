import sumar from "./sumador";
import totalizador from "./totalizador";

const cantidad_item=document.querySelector("#cantidaddeitems");
const form= document.querySelector("#totalizador-form");
const div= document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad_item.value);

  div.innerHTML = "<p>" + totalizador(cantidaditem) + "</p>";
});


