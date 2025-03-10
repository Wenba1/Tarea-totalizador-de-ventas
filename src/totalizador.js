export function Ingreso(item){
  return item;
}

export function Ingreso_precio(precio_item){
  return precio_item;
}

export function MostrarPrecioNeto(item, precio_item){
  return item*precio_item;
}

export function MostrarEstado(estado){
  return estado;
}

export function MostrarPocentajeDelEstado(estado){
  if(estado==="CA"){
    return 8.25;
  }else if(estado==="AL"){
    return 4.00;
  }else if(estado=="NV"){
    return 8.00;
  }else if(estado==="UT"){
    return 6.65;
  }else if(estado==="TX"){
    return 6.25;
  }
}

export function MostrarTotalporcentaje(Item,precio_Item,estado){
  var Precio = MostrarPrecioNeto(Item,precio_Item);
  var porcentaje = MostrarPocentajeDelEstado(estado);
  var sumaporcentaje= (Precio *porcentaje)/100;
  return sumaporcentaje;
}

export function MostrarPrecioTotal(Item,precio_Item,estado){
  var Precio = MostrarPrecioNeto(Item,precio_Item);
  var porcentaje = MostrarPocentajeDelEstado(estado);
  var sumaporcentaje= (Precio *porcentaje)/100;
  var total = Precio+sumaporcentaje;
  return total;
}

export function MostrarDescuentos(orden){
  if(orden<1000){
    return 0;
  }else if(orden>=1000 && orden<3000){
    return 3;
  }else if(orden>=3000 && orden<7000){
    return 5;
  }else if(orden>=7000 && orden<10000){
    return 7;
  }else if(orden>=10000 && orden<30000){
    return 10;
  }else if(orden>=30000){
    return 15;
  }
}

export function MostrarTotalPrecioYDescuento(Item,precio_Item,estado){
  var precio= MostrarPrecioNeto(Item,precio_Item);
  var porcentaje=MostrarPocentajeDelEstado(estado);
  var descuento=MostrarDescuentos(precio);
  var sumaPorcentaje=(porcentaje*precio)/100;
  var restarDescuento=(descuento*precio)/100;
  var sumaTotal=(precio+sumaPorcentaje-restarDescuento);
  return sumaTotal;
}

export function MostrarTotalDescuento(Item,precio_Item){
  var precio= MostrarPrecioNeto(Item,precio_Item);
  var descuento=MostrarDescuentos(precio);
  var restarDescuento=(descuento*precio)/100;
  return restarDescuento;
}

export function MostrarCategoriaImpuesto(categoria,estado){
  var NuevoImpuesto=0;
  if(categoria==="Alimentos"){
    NuevoImpuesto = 0;
  }else if(categoria==="Bebidas alcoholicas"){
    NuevoImpuesto=7;
  }else if(categoria==="Material de escritorio"){
    NuevoImpuesto=0;
  }else if(categoria==="Muebles"){
    NuevoImpuesto=3;
  }else if(categoria==="Electronicos"){
    NuevoImpuesto= 4 ;
  }else if(categoria==="Vestimenta"){
    NuevoImpuesto= 4 ;
  }else if(categoria==="Varios"){
    NuevoImpuesto= 0 ;
  } 
  /*else{
    NuevoImpuesto = 0;
  }*/
  return MostrarPocentajeDelEstado(estado)+NuevoImpuesto;
}

export function MostrarCategoriaDescuento(categoria,precio){
  var NuevoDescuento=0;
  if(categoria==="Alimentos"){
    NuevoDescuento = 2;
  }else if(categoria==="Bebidas alcoholicas"){
    NuevoDescuento=0;
  }else if(categoria==="Material de escritorio"){
    NuevoDescuento=1.5;
  }else if(categoria==="Muebles"){
    NuevoDescuento=0;
  }else if(categoria==="Electronicos"){
    NuevoDescuento= 1 ;
  }else if(categoria==="Vestimenta"){
    NuevoDescuento= 0 ;
  }else if(categoria==="Varios"){
    NuevoDescuento= 0 ;
  }
  return MostrarDescuentos(precio)+NuevoDescuento;
}

export function MostrarTotalDescuentoConCategoria(catDescuento,precio){
  var restarDescuento=(catDescuento*precio)/100;
  return restarDescuento;
}

export function MostrarTotalImpuestoConCategoria(catImpuesto,precio){
  var sumImpuesto=(catImpuesto*precio)/100;
  return sumImpuesto;
}

export function MostrarTotalprecioCategoria(Item,precio_Item,estado,categoria){
  var precio= MostrarPrecioNeto(Item,precio_Item);
  var catImpuesto=MostrarCategoriaImpuesto(categoria,estado);
  var catDescuento=MostrarCategoriaDescuento(categoria,precio);
  var sumaPorcentaje=MostrarTotalImpuestoConCategoria(catImpuesto,precio);
  var restarDescuento=MostrarTotalDescuentoConCategoria(catDescuento,precio);
  var sumaTotal=(precio+sumaPorcentaje-restarDescuento);
  var redondeado=Math.round(sumaTotal * 10) / 10;
  return redondeado;
}

export function MostrarCostoEnvio(peso_volumetrico){
  var CostoNuevo = 0;
  if (peso_volumetrico >= 0 && peso_volumetrico <= 10) {
    CostoNuevo = 0;
  } else if (peso_volumetrico >= 11 && peso_volumetrico <= 20) {
    CostoNuevo = 3.5;
  } else if (peso_volumetrico >= 21 && peso_volumetrico <= 40) {
    CostoNuevo = 5;
  } else if (peso_volumetrico >= 41 && peso_volumetrico <= 80) {
    CostoNuevo = 6;
  }

  return CostoNuevo;
}

export function CalcularCostoEnvio(peso_volumetrico,cantidad){
  var costo=MostrarCostoEnvio(peso_volumetrico);
  if(costo===0){
    return cantidad;
  }
  else{
    return cantidad*costo;
  }
}

export function MostrarTotalPesoVolumetrico(Item,precio_Item,estado,categoria,peso_volumetrico){
  var precio= MostrarPrecioNeto(Item,precio_Item);
  var precio_peso=CalcularCostoEnvio(peso_volumetrico,precio);
  var catImpuesto=MostrarCategoriaImpuesto(categoria,estado);
  var catDescuento=MostrarCategoriaDescuento(categoria,precio_peso);
  var sumaPorcentaje=MostrarTotalImpuestoConCategoria(catImpuesto,precio_peso);
  var restarDescuento=MostrarTotalDescuentoConCategoria(catDescuento,precio_peso);
  var sumaTotal=(precio_peso+sumaPorcentaje-restarDescuento);
  var redondeado=Math.round(sumaTotal * 10) / 10;
  return redondeado;
}

