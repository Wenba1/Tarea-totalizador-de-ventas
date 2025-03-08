import {Ingreso,Ingreso_precio, MostrarPrecioNeto, MostrarEstado, MostrarPocentajeDelEstado,MostrarPrecioTotal} from "./totalizador.js";

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

  it("Deberia mostrar el precio total con el impuesto de california", () => {
    expect(MostrarPrecioTotal(20,3,"CA")).toEqual(64.95);
  });
});