import "mocha";
import { expect } from "chai";
import { PrimeNumber } from "../../src/ejercicio-pe1/PrimeNumber";

describe("Test de StringPrintableCollection", () => {
  const collection = PrimeNumber.getPrimeNumberInstance(3);
  it("Se instancia la clase correctamente", () => {
    expect(collection).to.be.instanceOf(PrimeNumber);
  });
  it("Si se vuelve a instanciar, devuelve la primera instancia", () => {
    expect(PrimeNumber.getPrimeNumberInstance(7)).to.be.eql(collection);
  });
  it("Se puede acceder y modificar la colección de números primos", () => {
    collection.primeCollection = [2, 3, 5, 7, 11, 13, 17, 19];
    expect(collection.primeCollection).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19]);
  });
  it("PrimeNumber suelta un error cuando en la modificación hay un número no primo", () => {
    expect(() => (collection.primeCollection = [2, 3, 5, 7, 8])).to.be.throw();
  });
  it("Existe un método que devuelve los n primeros números primos", () => {
    expect(collection.firstNumbers(4)).to.be.eql([2, 3, 5, 7]);
    expect(collection.firstNumbers(10)).to.be.eql([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    ]);
  });
  it("Existe un método que devuelve los primos entre n1 y n2", () => {
    expect(collection.primeNumbersBetween(2, 8)).to.be.eql([2, 3, 5, 7]);
    expect(collection.primeNumbersBetween(23, 30)).to.be.eql([23, 29]);
  });
  /**it("La clase es iterable", () => {
    expect(collection).to.be.eql();
    expect(collection).to.be.eql();
  });*/
});
