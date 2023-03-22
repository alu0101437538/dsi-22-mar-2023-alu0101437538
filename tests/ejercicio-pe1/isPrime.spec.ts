import "mocha";
import { expect } from "chai";
import { isPrime } from "../../src/ejercicio-pe1/isPrime";

describe("Test de isPrime", () => {
  it("isPrime devuelve true con números primos", () => {
    expect(isPrime(13)).to.be.eql(true);
    expect(isPrime(7)).to.be.eql(true);
    expect(isPrime(17)).to.be.eql(true);
  });
  it("isPrime devuelve false con números no primos", () => {
    expect(isPrime(15)).to.be.eql(false);
    expect(isPrime(9)).to.be.eql(false);
    expect(isPrime(12)).to.be.eql(false);
  });
});
