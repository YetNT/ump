/* eslint-disable @typescript-eslint/no-var-requires */
import * as conversionFactors from "../../libmath/conversions/convTable.json";
import { areaUnits } from "../../libmath/Units"; // allowed inputs array

/**
 * Converts between area units
 *
 * @param n - The value to be converted
 * @param from - The current area unit.
 * @param to - The area unit to be converted to.
 */
export function area(n: number, from: string, to: string): number {
    const fromFactor = conversionFactors[from];
    const toFactor = conversionFactors[to];
    if (!fromFactor || !toFactor) {
        throw new Error(
            `Invalid from/to Unit. ${from} or ${to} is not a valid unit.`
        );
    }

    if (!areaUnits.includes(from) || !areaUnits.includes(to)) {
        throw new Error(
            `One of the parameters is not a unit of "area". ${from} and ${to}`
        );
    }

    return (n * fromFactor) / toFactor;
}
