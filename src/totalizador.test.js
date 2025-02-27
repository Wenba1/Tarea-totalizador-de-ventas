import totalizador from "./totalizador.js";

describe("Totalizador de ventas: ", () => {
  it("Deberia Ingresar la cantidad de items", () => {
    expect(totalizador(2)).toEqual(2);
  });
});