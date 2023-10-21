/* eslint-disable @typescript-eslint/no-var-requires */
import * as conversionFactors from "../../libmath/conversions/convTable.json";
import { volumeUnits } from "../../libmath/Units"; // allowed inputs array

/**
 * Converts between volume units
 *
 * @param n - The value to be converted
 * @param from - The current volume unit.
 * @param to - The volume unit to be converted to.
 */
export function volume(n: number, from: string, to: string): number {
    const fromFactor = conversionFactors[from];
    const toFactor = conversionFactors[to];
    if (!fromFactor || !toFactor) {
        throw new Error(
            `Invalid from/to Unit. ${from} or ${to} is not a valid unit.`
        );
    }

    if (!volumeUnits.includes(from) || !volumeUnits.includes(to)) {
        throw new Error(
            `One of the parameters is not a unit of "volume". ${from} and ${to}`
        );
    }

    return (n * fromFactor) / toFactor;
}
