/**
 * Divides `x` into `y` and `z` in a specific ratio and returns the resulting values as an array.
 * 
 * @param {number} x - The value to be divided.
 * @param {number} y - The ratio value for `y`.
 * @param {number} z - The ratio value for `z`.
 * 
 * @returns An array containing two elements, the result of dividing `x` into `y` and the result of dividing `x` into `z`.
 */
declare function DinRatio(x: number, y: number, z: number): number[];

/**
 * Calculates the proportional value of `x`, `y`, and `z` in a ratio.
 * 
 * @param {number} x - The first value in the ratio.
 * @param {number} y - The second value in the ratio.
 * @param {number} z - The third value in the ratio.
 * @param {boolean=} which - If set to `true`, calculates the proportional value of `z`. Otherwise, calculates the proportional value of an unknown value represented by `?`.
 * 
 * @returns The proportional value of `x`, `y`, and `z`.
 * 
 *```ts
 *console.log(Ump.PropRatio(4, 2, 1, false)) // 2
 *```
 *```ts
 *console.log(Ump.PropRatio(4, 2, 1, true)) // 0.5 
 *```
*/
declare function PropRatio(x: number, y: number, z: number, which?: boolean): number;

/**
 * Calculates the prime factorization of a number.
 * 
 * @param {number} num - The number to be factorized.
 * 
 * @returns An array of prime factors.
 */
declare function PrimeFactorize(num: number): number[];

/**
 * Converts a distance value from one unit to another.
 * 
 * @param {string} unit - The unti to convert between. Currently supports `dist` and `area`
 * @param {number} n - The distance value to be converted.
 * @param {string }fromUnit - The current unit of the distance value.
 * @param {string} toUnit - The unit to which the distance value should be converted.
 * 
 * @returns The distance value in the specified unit.
 */
declare function ConvUnit(unit:string, n: number, fromUnit: string, toUnit: string): number;


export = {DinRatio, PropRatio, PrimeFactorize, ConvUnit};
