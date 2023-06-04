/**
 * Divides `x` into `y` and `z` in a specific ratio and returns the resulting values as an array.
 * 
 * @param {number} x - The value to be divided.
 * @param {number} y - The ratio value for `y`.
 * @param {number} z - The ratio value for `z`.
 * @param {boolean=} round - If set to true, will round of the value to 2 decimal places.
 * 
 * @returns An array containing two elements, the result of dividing `x` into `y` and the result of dividing `x` into `z`.
 */
declare function DinRatio(x: number, y: number, z: number, round?: boolean): number[];

/**
 * Calculates the proportional value of `x`, `y`, and `z` in a ratio.
 * 
 * @param {number} x - The first value in the ratio.
 * @param {number} y - The second value in the ratio.
 * @param {number} z - The third value in the ratio.
 * @param {boolean=} which - If set to `true`, x : y = z : ?. Otherwise, x : y = ? : z
 * 
 * @returns The proportional value of `x`, `y`, and `z`.
 * 
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
 * @param {string} unit - The unit to convert between. Currently supports `dist`, `area` and `vol`
 * @param {number} n - The value to be converted.
 * @param {string} fromUnit - The current unit of the (area/distance/volume) value. (Make sure the unit is equal to the unit of measurement in the `unit` parameter. List of valid units https://github.com/Yetity/ump/blob/master/src/libmath/def/unit-ali.json ) 
 * @param {string} toUnit - The unit to which the (area/distance/volume) value should be converted. (Make sure the unit is equal to the unit of measurement in the `unit` parameter. List of valid units https://github.com/Yetity/ump/blob/master/src/libmath/def/unit-ali.json )
 * 
 * @returns The distance value in the specified unit.
 */
declare function ConvUnit(unit: string, n: number, fromUnit: string, toUnit: string): number;

/**
 * Converts between Temperature units
 *
 * @param {number} n - THe value to be converted
 * @param {string} from - The current temperature unit. Param accepts these string forms - `["celsius", "Celsius", "c", "C"]` 
 * @param {string} to - The temperature unit to be converted to. Param accepts these strings - `["Kelvin", "kelvin", "k", "K"]` 
 *
 * @returns Converted Temperature
 */
declare function ConvTemp(n: number, from: string, to: string): number;


export = {DinRatio, PropRatio, PrimeFactorize, ConvUnit, ConvTemp};
