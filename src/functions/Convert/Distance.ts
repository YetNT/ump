/* eslint-disable @typescript-eslint/no-var-requires */
import * as conversionFactors from "../../libmath/conversions/convTable.json";
import { distanceUnits } from "../../libmath/Units"; // allowed inputs array

/**
 * Converts between distance/length units
 *
 * @param n - The value to be converted
 * @param from - The current distance unit.
 * @param to - The distamce unit to be converted to.
 */
export function distance(n: number, from: string, to: string): number {
    const fromFactor = conversionFactors[from];
    const toFactor = conversionFactors[to];
    if (!fromFactor || !toFactor) {
        throw new Error(
            `Invalid from/to Unit. ${from} or ${to} is not a valid unit.`
        );
    }

    if (!distanceUnits.includes(from) || !distanceUnits.includes(to)) {
        throw new Error(
            `One of the parameters is not a unit of "distance". ${from} and ${to}`
        );
    }

    return (n * fromFactor) / toFactor;
}
