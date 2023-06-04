/**
 *  Divides `x` into the ratio of `y` : `z` and returns the resulting values as an array.
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
 * @param {string} fromUnit - The current unit of the (area/distance/volume) value. It is suggested that you use the `Area`, `Distance` or `Volume` Enums 
 * @param {string} toUnit - The unit to which the (area/distance/volume) value should be converted. It is suggested that you use the `Area`, `Distance` or `Volume` Enums
 * 
 * @returns The distance value in the specified unit.
 * 
 * Example with Enums :
 * ```js 
 * const {Area, Distance, Volume, ConvUnit} = require('@yetnt/ump')
 * 
 * console.log(ConvUnit("dist", 12, Distance.Millimeter, Distance.Centimeter)) // 1.2
 * console.log(ConvUnit("area", 34, Area.SquareCentimeter, Area.SquareInch)) // 5.27001054002108
 * console.log(ConvUnit("vol", 490, Volume.Quart, Volume.Liter)) // 463.71297
 * ```
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

/**
 * Enum representing different units of distance measurement.
 */
export enum Distance {
    Nanometer = 'nanometer',
    Micrometer = 'micrometer',
    Millimeter = 'millimeter',
    Centimeter = 'centimeter',
    Meter = 'meter',
    Kilometer = 'kilometer',
    NauticalMile = 'nautical-mile',
    Inch = 'inch',
    Foot = 'foot',
    Yard = 'yard',
    Mile = 'mile',
}

/**
 * Enum representing different units of area measurement.
 */
export enum Area {
    SquareCentimeter = 'square-centimeter',
    SquareMeter = 'square-meter',
    SquareFoot = 'square-foot',
    SquareInch = 'square-inch',
    Acre = 'acre',
    Hectare = 'hectare',
}

/**
 * Enum representing different units of volume measurement.
 */
export enum Volume {
    Milliliter = 'milliliter',
    Centiliter = 'centiliter',
    Deciliter = 'deciliter',
    Liter = 'liter',
    Kiloliter = 'kiloliter',
    Decaliter = 'decaliter',
    Hectoliter = 'hectoliter',
    CubicMillimeter = 'cubic-millimeter',
    CubicCentimeter = 'cubic-centimeter',
    CubicMeter = 'cubic-meter',
    CubicInch = 'cubic-inch',
    FluidOnce = 'fluid-once',
    Gill = 'gill',
    Pint = 'pint',
    Quart = 'quart',
    Gallon = 'gallon',
} 

export = {DinRatio, PropRatio, PrimeFactorize, ConvUnit, ConvTemp, Distance, Area, Volume};
