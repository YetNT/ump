import { GeometricPattern } from "./functions/exports";

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
declare function dinRatio(
    x: number,
    y: number,
    z: number,
    round?: boolean
): number[];

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
declare function propRatio(
    x: number,
    y: number,
    z: number,
    which?: boolean
): number;

/**
 * Calculates the prime factorization of a number.
 *
 * @param {number} num - The number to be factorized.
 *
 * @returns An array of prime factors.
 */
declare function primeFactorize(num: number): number[];

/**
 * Greatest Common Divider
 * @param a 1st number
 * @param b 2nd number
 */
declare function gcd(a: number, b: number): number;

/**
 * Convert object used to convert between different things. An example would be Convert.Area
 */
declare namespace Convert {
    /**
     * Converts between distance/length units
     *
     * @param {number} n - The value to be converted
     * @param {string} from - The current distance unit.
     * @param {string} to - The distamce unit to be converted to.
     *
     * @returns Converted distance
     */
    function distance(n: number, from: string, to: string): number;

    /**
     * Converts between area units
     *
     * @param {number} n - The value to be converted
     * @param {string} from - The current area unit.
     * @param {string} to - The area unit to be converted to.
     *
     * @returns Converted area
     */
    function area(n: number, from: string, to: string): number;

    /**
     * Converts between volume units
     *
     * @param {number} n - The value to be converted
     * @param {string} from - The current volume unit.
     * @param {string} to - The volume unit to be converted to.
     *
     * @returns Converted volume
     */
    function volume(n: number, from: string, to: string): number;
    /**
     * Converts between Temperature units
     *
     * @param {number} n - The value to be converted
     * @param {string} from - The current temperature unit. Param accepts these string forms - `["celsius", "Celsius", "c", "C"]`
     * @param {string} to - The temperature unit to be converted to. Param accepts these strings - `["Kelvin", "kelvin", "k", "K"]`
     *
     * @returns Converted Temperature
     */
    function temp(n: number, from: string, to: string): number;
    /**
     *
     * @param n The value to be converted
     * @param from The current data value.
     * @param to The value to convert to.
     *
     * @returns Converted data
     */
    function data(n: number, from: string, to: string): number;
}

/**
 * Linear Pattern functions
 */
declare namespace LinearPattern {
    /**
     *
     * @param n The term number.
     * @param d The difference.
     * @param a First number in sequqnce. The formula for this is `Tn = a + (n - 1) * d`. If you prefer to use `Tn = dn+c`, then `a` is `c`
     */
    function findTerm(n: number, d: number, a: number): number;

    /**
     *
     * @param num1 The first number
     * @param num2 The second number
     * @param num3 The third number
     * @param returnSimplified Return the simplified formula of `Tn = dn+c` rather than `Tn = a + (n - 1) * d`
     */
    function findN(
        num1: number,
        num2: number,
        num3: number,
        returnSimplified?: boolean
    ): string;
}

/**
 * Gemotric pattern functions
 */
declare namespace GeometricPattern {
    /**
     *
     * @param n The term number (not zero indexed)
     * @param a The first term
     * @param r The constant ratio.
     */
    function findTerm(n: number, a: number, r: number): number;

    /**
     *
     * @param num1 The first number
     * @param num2 The second number
     * @param num3 The third number
     */
    function findN(num1: number, num2: number, num3: number): string;
}

declare namespace Stats {
    /**
     * Adds up all the numbers then divide by the array's length.
     * @param arr Array of numbers
     * @param round Round off to the nearest number. Default is false
     */
    function mean(arr: number[], round?: boolean): number;

    /**
     * Places the numbers in order then returns the number in the middle.
     * @param arr Array of numbers
     */
    function median(arr: number[]): number;

    /**
     * Gives the number that occured the most.
     * @param arr Array of numbers
     */
    function mode(arr: number[]): number[];

    /**
     * Difference between the biggest number and the smallest number
     * @param arr Array of numbers
     */
    function range(arr: number[]): number;

    /**
     * Sums up all the numbers in the array.
     * @param arr Array of numbers
     */
    function sum(arr: number[]): number;
}

/**
 * Enum representing different units of distance measurement.
 */
export enum Distance {
    Nanometer = "nanometer",
    Micrometer = "micrometer",
    Millimeter = "millimeter",
    Centimeter = "centimeter",
    Meter = "meter",
    Kilometer = "kilometer",
    NauticalMile = "nautical-mile",
    Inch = "inch",
    Foot = "foot",
    Yard = "yard",
    Mile = "mile",
}

/**
 * Enum representing different units of area measurement.
 */
export enum Area {
    SquareCentimeter = "square-centimeter",
    SquareMeter = "square-meter",
    SquareFoot = "square-foot",
    SquareInch = "square-inch",
    Acre = "acre",
    Hectare = "hectare",
}

/**
 * Enum representing different units of volume measurement.
 */
export enum Volume {
    Milliliter = "milliliter",
    Centiliter = "centiliter",
    Deciliter = "deciliter",
    Liter = "liter",
    Kiloliter = "kiloliter",
    Decaliter = "decaliter",
    Hectoliter = "hectoliter",
    CubicMillimeter = "cubic-millimeter",
    CubicCentimeter = "cubic-centimeter",
    CubicMeter = "cubic-meter",
    CubicInch = "cubic-inch",
    FluidOnce = "fluid-once",
    Gill = "gill",
    Pint = "pint",
    Quart = "quart",
    Gallon = "gallon",
}

export enum Data {
    Bit = "bit",
    Byte = "byte",
    Kilobyte = "kilobyte",
    Kibibyte = "kibibyte",
    Megabyte = "megabyte",
    Mebibyte = "mebibyte",
    Gigabyte = "gigabyte",
    Gibibyte = "gibibyte",
    Terabyte = "terabyte",
    Tebibyte = "tebibyte",
}

export = {
    dinRatio,
    propRatio,
    primeFactorize,
    Convert,
    LinearPattern,
    GeometricPattern,
    gcd,
    Stats,
    Distance,
    Area,
    Volume,
    Data,
};
