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
  if(orden>1000 && orden<3000){
    return 3;
  }else if(orden>3000 && orden<7000){
    return 5;
  }else if(orden>7000){
    return 7;
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


