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
  }
}

export function MostrarPrecioTotal(Item,precio_Item,estado){
  var Precio = MostrarPrecioNeto(Item,precio_Item);
  var porcentaje = MostrarPocentajeDelEstado(estado);
  var sumaporcentaje= (Precio *porcentaje)/100;
  var total = Precio+sumaporcentaje;
  return total;
}