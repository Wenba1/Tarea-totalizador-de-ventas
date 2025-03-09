import {Ingreso,Ingreso_precio, MostrarPrecioNeto, MostrarEstado, MostrarPocentajeDelEstado,MostrarPrecioTotal,MostrarTotalporcentaje,MostrarTotalDescuento,
   MostrarTotalPrecioYDescuento, MostrarDescuentos,MostrarTotalprecioCategoria,MostrarCategoriaDescuento,MostrarCategoriaImpuesto,
   MostrarTotalImpuestoConCategoria,
   MostrarTotalDescuentoConCategoria} from "./totalizador.js";

describe("Totalizador de ventas: ", () => {
  it("Deberia Ingresar la cantidad de items", () => {
    expect(Ingreso(2)).toEqual(2);
  });

  it("Deberia Mostrar el precio por item", () => {
    expect(Ingreso_precio(3)).toEqual(3);
  });

  it("Deberia Mostrar el precio neto", () => {
    expect(MostrarPrecioNeto(20,3)).toEqual(60);
  });

  it("Deberia mostrar el estado", () => {
    expect(MostrarEstado("CA")).toEqual("CA");
  });

  it("Deberia mostrar el porcentaje del estado", () => {
    expect(MostrarPocentajeDelEstado("CA")).toEqual(8.25);
  });

  it("Deberia mostrar el precio total con el impuesto de california CA", () => {
    expect(MostrarPrecioTotal(20,3,"CA")).toEqual(64.95);
  });

  it("Deberia mostrar el total del porcentaje del estado CA", () => {
    expect(MostrarTotalporcentaje(20,3,"CA")).toEqual(4.95);
  });

  it("Deberia mostrar el precio total con el impuesto del estado AL", () => {
    expect(MostrarPrecioTotal(20,3,"AL")).toEqual(62.4);
  });

  it("Deberia mostrar el total del porcentaje del estado AL", () => {
    expect(MostrarTotalporcentaje(20,3,"AL")).toEqual(2.4);
  });

  it("Deberia mostrar el precio total con el impuesto del estado NV", () => {
    expect(MostrarPrecioTotal(20,3,"NV")).toEqual(64.8);
  });

  it("Deberia mostrar el total del porcentaje del estado NV", () => {
    expect(MostrarTotalporcentaje(20,3,"NV")).toEqual(4.8);
  });

  it("Deberia mostrar el precio total con el impuesto del estado UT", () => {
    expect(MostrarPrecioTotal(20,3,"UT")).toEqual(63.99);
  });

  it("Deberia mostrar el total del porcentaje del estado UT", () => {
    expect(MostrarTotalporcentaje(20,3,"UT")).toEqual(3.99);
  });

  it("Deberia mostrar el precio total con el impuesto del estado TX", () => {
    expect(MostrarPrecioTotal(20,3,"TX")).toEqual(63.75);
  });

  it("Deberia mostrar el total del porcentaje del estado TX", () => {
    expect(MostrarTotalporcentaje(20,3,"TX")).toEqual(3.75);
  });

  it("Deberia mostrar el precio total de descuento que corresponde a 1000", () => {
    expect(MostrarTotalPrecioYDescuento(20,60,"TX")).toEqual(1239);
  });

  it("Deberia mostrar el total del descuento de 1000", () => {
    expect(MostrarTotalDescuento(20,60)).toEqual(36);
  });

  it("Deberia mostrar el precio total de descuento que corresponde a 3000", () => {
    expect(MostrarTotalPrecioYDescuento(60,60,"TX")).toEqual(3645);
  });

  it("Deberia mostrar el total del descuento de 3000", () => {
    expect(MostrarTotalDescuento(60,60)).toEqual(180);
  });

  it("Deberia mostrar el precio total de descuento que corresponde a 7000", () => {
    expect(MostrarTotalPrecioYDescuento(60,120,"AL")).toEqual(6984);
  });

  it("Deberia mostrar el total del descuento de 7000", () => {
    expect(MostrarTotalDescuento(60,120)).toEqual(504);
  });

  it("Deberia mostrar el precio total de descuento que corresponde a 10000", () => {
    expect(MostrarTotalPrecioYDescuento(100,120,"AL")).toEqual(11280);
  });

  it("Deberia mostrar el total del descuento de 10000", () => {
    expect(MostrarTotalDescuento(100,120)).toEqual(1200);
  });

  it("Deberia mostrar el precio total de descuento que corresponde a 30000", () => {
    expect(MostrarTotalPrecioYDescuento(150,210,"NV")).toEqual(29295);
  });

  it("Deberia mostrar el total del descuento de 30000", () => {
    expect(MostrarTotalDescuento(150,210)).toEqual(4725);
  });

  it("Deberia mostrar el precio total con la categoria de productos Alimentos", () => {
    expect(MostrarTotalprecioCategoria(20,3,"AL","Alimentos")).toEqual(61.2);
  });

  it("Deberia mostrar el impuesto con la categoria de productos Alimentos", () => {
    expect(MostrarTotalImpuestoConCategoria(4,60)).toEqual(2.4);
  });

  it("Deberia mostrar el descuento con la categoria de productos Alimentos", () => {
    expect(MostrarTotalDescuentoConCategoria(2,60)).toEqual(1.2);
  });
});