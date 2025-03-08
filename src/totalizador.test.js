import {Ingreso,Ingreso_precio, MostrarPrecioNeto} from "./totalizador.js";

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
});