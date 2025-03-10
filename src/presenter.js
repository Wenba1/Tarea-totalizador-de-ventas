import {Ingreso,Ingreso_precio,MostrarPrecioNeto,MostrarPocentajeDelEstado, MostrarEstado,
   MostrarTotalporcentaje, MostrarPrecioTotal,MostrarTotalDescuento, MostrarTotalPrecioYDescuento,
   MostrarDescuentos,MostrarTotalDescuento,MostrarTotalprecioCategoria,MostrarCategoriaDescuento,
   MostrarCategoriaImpuesto,MostrarTotalDescuentoConCategoria,MostrarTotalImpuestoConCategoria, 
   MostrarPesoVolumetrico,MostrarCostoEnvio, CalcularCostoEnvio, MostrarTotalPesoVolumetrico} from "./totalizador";

const cantidad_item=document.querySelector("#Cantidad_item");
const precio_item=document.querySelector("#Precio_item");
const Item_precioNeto=document.querySelector("#precioNeto_item");
const form= document.querySelector("#totalizador-form");
const div= document.querySelector("#resultado-div");
const estado = document.querySelector("#Estado-select");
const impuesto=document.querySelector("#impuesto_item");
const div_impuesto=document.querySelector("#resultado-impuesto-div");
const div_precio_total=document.querySelector("#resultado-precio-total");
const div_descuento=document.querySelector("#resultado-descuento");
const categoria = document.querySelector("#categoria-select");
const pesovolumetrico=document.querySelector("#Peso-volumetrico");
const costoEnvio=document.querySelector("#Costo-Envio");

const div_descuento_categoria=document.querySelector("#resultado-descuento-categoria");
const div_impuesto_categoria=document.querySelector("#resultado-impuesto-categoria");

const div_CostoEnvio=document.querySelector("#resultado-costo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const precio_Item=Number.parseInt(precio_item.value);
  const cantidaditem = Number.parseInt(cantidad_item.value);
  const estadoSeleccionado=estado.value;
  const categoriaSeleccionado=categoria.value;
  const Categoriadescuento=MostrarCategoriaDescuento(categoriaSeleccionado, precio_Item);
  const CategoriaImpuesto= MostrarCategoriaImpuesto(categoriaSeleccionado,estadoSeleccionado);
  const Costo_Envio=Number.parseInt(costoEnvio.value);

  div.innerHTML = "<p>Precio Neto: " + MostrarPrecioNeto(precio_Item,cantidaditem) + "</p>";
  div_descuento.innerHTML="<p> Descuento con categoria ("+ Categoriadescuento +" %): "+  MostrarTotalDescuentoConCategoria(Categoriadescuento, MostrarPrecioNeto(precio_Item,cantidaditem)) + " </p>";
  div_impuesto.innerHTML="<p> Impuesto con categoria para "+ MostrarEstado(estadoSeleccionado) +" ("+ CategoriaImpuesto + "%): "+ MostrarTotalImpuestoConCategoria(CategoriaImpuesto,MostrarPrecioNeto(precio_Item,cantidaditem)) +" </p>";
  div_precio_total.innerHTML = "<p> Precio total (descuento e impuesto): $" + MostrarTotalPesoVolumetrico(cantidaditem, precio_Item, estadoSeleccionado, categoriaSeleccionado,Costo_Envio) + "</p>";
  div_CostoEnvio.innerHTML= "<p>Costo envio: " + MostrarCostoEnvio(Costo_Envio) + "</p>";
});
