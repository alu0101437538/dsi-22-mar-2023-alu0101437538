/**
 * Función que indica si el número es primo o no
 * @param n Número a comprobar
 * @returns booleano que indica si es primo o no
 */
export function isPrime(n: number): boolean {
  for (let k = n - 1; k > 1; --k) {
    if (n % k === 0) {
      return false;
    }
  }
  return true;
}
