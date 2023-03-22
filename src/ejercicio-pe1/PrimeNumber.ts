import { isPrime } from "./isPrime";

/**
 * Clase que almacena los n primeros números primos
 */
export class PrimeNumber implements Iterable<number> {
  private _primeCollection: number[];
  private static primeNumberInstance: PrimeNumber;

  /**
   * Constructor de la clase
   * @param number Número que indica cuantos números primos (desde el primero) se almacenan
   */
  private constructor(number: number) {
    let i = 0;
    let j = 0;
    this._primeCollection = [];
    while (i < number) {
      if (isPrime(j)) {
        this._primeCollection.push(j);
        i++;
      }
      j++;
    }
  }

  /**
   * Función que instancia la clase singleton
   * @param n Número a pasar al constructor en caso de que sea necesario
   * @returns LA instancia singleton
   */
  public static getPrimeNumberInstance(n: number): PrimeNumber {
    if (!PrimeNumber.primeNumberInstance) {
      PrimeNumber.primeNumberInstance = new PrimeNumber(n);
    }
    return PrimeNumber.primeNumberInstance;
  }

  /**
   * Getter de la colección de nº primos
   */
  get primeCollection() {
    return this._primeCollection;
  }

  /**
   * Setter de la colección de nº primos
   */
  set primeCollection(primeCollection) {
    for (let i = 0; i < primeCollection.length; ++i) {
      if (!isPrime(primeCollection[i])) {
        throw new TypeError("Uno de los números a introducir no es primo");
      }
    }
    this._primeCollection = primeCollection;
  }

  /**
   * Método que devuelve los n primeros números primos
   * @param n Indica la cantidad de los primeros nº primos a devolver
   * @returns Array con los n primeros núemeros primos
   */
  firstNumbers(n: number): number[] {
    const collection: number[] = [];
    for (let i = 0; i < n; ++i) {
      if (i < PrimeNumber.primeNumberInstance.primeCollection.length) {
        collection.push(PrimeNumber.primeNumberInstance.primeCollection[i]);
      } else {
        let j = collection[i - 1] + 1;
        while (!isPrime(j)) {
          j++;
        }
        collection.push(j);
      }
    }
    return collection;
  }

  /**
   * Método que devuelve los número primos entre dos naturales
   * @param n1 Primero natural
   * @param n2 Segundo natural
   * @returns Array de nº primos entre n1 y n2
   */
  primeNumbersBetween(n1: number, n2: number): number[] {
    const collection: number[] = [];
    let last_num = n1;
    for (
      let i = 0;
      i < PrimeNumber.primeNumberInstance.primeCollection.length;
      ++i
    ) {
      if (
        PrimeNumber.primeNumberInstance.primeCollection[i] >= n1 &&
        PrimeNumber.primeNumberInstance.primeCollection[i] <= n2
      ) {
        collection.push(PrimeNumber.primeNumberInstance.primeCollection[i]);
        last_num = PrimeNumber.primeNumberInstance.primeCollection[i] + 1;
      }
    }
    for (let i = last_num; i <= n2; ++i) {
      if (isPrime(i)) {
        collection.push(i);
      }
    }
    return collection;
  }

  [Symbol.iterator](): Iterator<number> {
    return PrimeNumber.primeNumberInstance.primeCollection.values();
  }
}
