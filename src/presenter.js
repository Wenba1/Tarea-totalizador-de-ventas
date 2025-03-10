import {Ingreso,Ingreso_precio,MostrarPrecioNeto,MostrarPocentajeDelEstado, MostrarEstado,
   MostrarTotalporcentaje, MostrarPrecioTotal,MostrarTotalDescuento, MostrarTotalPrecioYDescuento,
   MostrarDescuentos,MostrarTotalDescuento,MostrarTotalprecioCategoria,MostrarCategoriaDescuento,
   MostrarCategoriaImpuesto,MostrarTotalDescuentoConCategoria,MostrarTotalImpuestoConCategoria, 
   MostrarPesoVolumetrico} from "./totalizador";

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

const div_descuento_categoria=document.querySelector("#resultado-descuento-categoria");
const div_impuesto_categoria=document.querySelector("#resultado-impuesto-categoria");

const div_pesoVolumetrico=document.querySelector("#resultado-peso-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const precio_Item=Number.parseInt(precio_item.value);
  const cantidaditem = Number.parseInt(cantidad_item.value);
  const estadoSeleccionado=estado.value;
  const categoriaSeleccionado=categoria.value;
  const Categoriadescuento=MostrarCategoriaDescuento(categoriaSeleccionado, precio_Item);
  const CategoriaImpuesto= MostrarCategoriaImpuesto(categoriaSeleccionado,estadoSeleccionado);
  const Peso_Volumetrico=Number.parseInt(pesovolumetrico.value);

  div.innerHTML = "<p>Precio Neto: " + MostrarPrecioNeto(precio_Item,cantidaditem) + "</p>";
  div_descuento.innerHTML="<p> Descuento con categoria ("+ Categoriadescuento +" %): "+  MostrarTotalDescuentoConCategoria(Categoriadescuento, MostrarPrecioNeto(precio_Item,cantidaditem)) + " </p>";
  div_impuesto.innerHTML="<p> Impuesto con categoria para "+ MostrarEstado(estadoSeleccionado) +" ("+ CategoriaImpuesto + "%): "+ MostrarTotalImpuestoConCategoria(CategoriaImpuesto,MostrarPrecioNeto(precio_Item,cantidaditem)) +" </p>";
  div_precio_total.innerHTML = "<p> Precio total (descuento e impuesto): $" + MostrarTotalprecioCategoria(cantidaditem, precio_Item, estadoSeleccionado, categoriaSeleccionado) + "</p>";
  div_pesoVolumetrico.innerHTML= "<p>Peso volumetrico: " + MostrarPesoVolumetrico(Peso_Volumetrico) + "</p>";
});

/*
<label for="peso_label">Peso Volumetrico:</label>
    <input type="number"id="Peso-volumetrico"/>

<div id="resultado-peso-div"></div>

*/