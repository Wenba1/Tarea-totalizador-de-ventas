import {Ingreso,Ingreso_precio, MostrarPrecioNeto, MostrarEstado, MostrarPocentajeDelEstado,MostrarPrecioTotal,MostrarTotalporcentaje} from "./totalizador.js";

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
});