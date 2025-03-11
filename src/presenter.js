import {Ingreso,Ingreso_precio,MostrarPrecioNeto,MostrarPocentajeDelEstado, MostrarEstado,
   MostrarTotalporcentaje, MostrarPrecioTotal,MostrarTotalDescuento, MostrarTotalPrecioYDescuento,
   MostrarDescuentos,MostrarTotalDescuento,MostrarTotalprecioCategoria,MostrarCategoriaDescuento,
   MostrarCategoriaImpuesto,MostrarTotalDescuentoConCategoria,MostrarTotalImpuestoConCategoria, 
   MostrarPesoVolumetrico,MostrarCostoEnvio, CalcularCostoEnvio, MostrarTotalPesoVolumetrico, 
   MostrarTipoCliente, MostrarDescuentoTipoCliente, MostrarTotalPesoVolumetricoDescuento, MostrarDescuentoMontoFijo} from "./totalizador";

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
const TipoCliente = document.querySelector("#Tipocliente-select");
const div_descuento_categoria=document.querySelector("#resultado-descuento-categoria");
const div_impuesto_categoria=document.querySelector("#resultado-impuesto-categoria");
const div_descuento_tipocliente=document.querySelector("#resultadoTipocliente-div");
const div_CostoEnvio=document.querySelector("#resultado-costo-div");
const div_DescuentoMontoFijo=document.querySelector("#resultado-descuentofijo-total");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const precio_Item=Number.parseInt(precio_item.value);
  const cantidaditem = Number.parseInt(cantidad_item.value);
  const estadoSeleccionado=estado.value;
  const categoriaSeleccionado=categoria.value;
  const Categoriadescuento=MostrarCategoriaDescuento(categoriaSeleccionado, precio_Item);
  const CategoriaImpuesto= MostrarCategoriaImpuesto(categoriaSeleccionado,estadoSeleccionado);
  const Costo_Envio=Number.parseInt(costoEnvio.value);
  const Tipocliente_value=TipoCliente.value;

  div.innerHTML = "<p>Precio Neto: " + MostrarPrecioNeto(precio_Item,cantidaditem) + "</p>";
  div_descuento.innerHTML="<p> Descuento con categoria ("+ Categoriadescuento +" %): "+  MostrarTotalDescuentoConCategoria(Categoriadescuento, MostrarPrecioNeto(precio_Item,cantidaditem)) + " </p>";
  div_impuesto.innerHTML="<p> Impuesto con categoria para "+ MostrarEstado(estadoSeleccionado) +" ("+ CategoriaImpuesto + "%): "+ MostrarTotalImpuestoConCategoria(CategoriaImpuesto,MostrarPrecioNeto(precio_Item,cantidaditem)) +" </p>";
  div_precio_total.innerHTML = "<p> Precio total (descuento e impuesto): $" + MostrarTotalPesoVolumetricoDescuento(cantidaditem, precio_Item, estadoSeleccionado, categoriaSeleccionado,Costo_Envio,Tipocliente_value) + "</p>";
  div_CostoEnvio.innerHTML= "<p>Costo envio: " + MostrarCostoEnvio(Costo_Envio) + "</p>";
  div_descuento_tipocliente.innerHTML="<p>Descuento de costo de envio: " + MostrarDescuentoTipoCliente(Tipocliente_value) + "</p>";
  div_DescuentoMontoFijo.innerHTML="<p>Descuento de fijo: " + MostrarDescuentoMontoFijo(8) + "</p>";
});
