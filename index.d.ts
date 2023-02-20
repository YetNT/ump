declare function DinRatio(x: number, y: number, z: number): number[];
/**
 * Divides `x` into `y` and `z` in a specific ratio and returns the resulting values as an array.
 * 
 * @param x The value to be divided.
 * @param y The ratio value for `y`.
 * @param z The ratio value for `z`.
 * 
 * @returns An array containing two elements, the result of dividing `x` into `y` and the result of dividing `x` into `z`.
 */

declare function PropRatio(x: number, y: number, z: number, which?: boolean): number;
/**
 * Calculates the proportional value of `x`, `y`, and `z` in a ratio.
 * 
 * @param x The first value in the ratio.
 * @param y The second value in the ratio.
 * @param z The third value in the ratio.
 * @param which If set to `true`, calculates the proportional value of `z`. Otherwise, calculates the proportional value of an unknown value represented by `?`.
 * 
 * @returns The proportional value of `x`, `y`, and `z`.
 */

declare function PrimeFactorize(num: number): number[];
/**
 * Calculates the prime factorization of a number.
 * 
 * @param num The number to be factorized.
 * 
 * @returns An array of prime factors.
 */

declare function ConvDist(n: number, fromUnit: string, toUnit: string): number;
/**
 * Converts a distance value from one unit to another.
 * 
 * @param n The distance value to be converted.
 * @param fromUnit The current unit of the distance value.
 * @param toUnit The unit to which the distance value should be converted.
 * 
 * @returns The distance value in the specified unit.
 */

export = {DinRatio, PropRatio, PrimeFactorize, ConvDist};
