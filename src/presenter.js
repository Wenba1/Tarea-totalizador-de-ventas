import {Ingreso,Ingreso_precio,MostrarPrecioNeto,MostrarPocentajeDelEstado, MostrarEstado, MostrarPrecioTotal} from "./totalizador";

const cantidad_item=document.querySelector("#Cantidad_item");
const precio_item=document.querySelector("#Precio_item");
const Item_precioNeto=document.querySelector("#precioNeto_item");
const form= document.querySelector("#totalizador-form");
const div= document.querySelector("#resultado-div");
const estado = document.querySelector("#Estado-select");
const impuesto=document.querySelector("#impuesto_item");
const div_impuesto=document.querySelector("#resultado-impuesto-div");
const div_estado=document.querySelector("#resultado-estado-div");
const div_precio_total=document.querySelector("#resultado-precio-total")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const precio_Item=Number.parseInt(precio_item.value);
  const cantidaditem = Number.parseInt(cantidad_item.value);
  const estadoSeleccionado=estado.value;
 
  div.innerHTML = "<p>Precio Neto: " + MostrarPrecioNeto(precio_Item,cantidaditem) + "</p>";
  div_estado.innerHTML="<p> Estado: " + MostrarEstado(estadoSeleccionado) + "</p>";
  div_impuesto.innerHTML="<p> Impuesto para "+ MostrarEstado(estadoSeleccionado) +" ("+ MostrarPocentajeDelEstado(estadoSeleccionado) + "%): </p>";
  div_precio_total.innerHTML="<p> Precio total: " + MostrarPrecioTotal(precio_Item,cantidaditem,estadoSeleccionado) + "</p>";
});


