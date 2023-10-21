/* eslint-disable @typescript-eslint/no-var-requires */
import * as conversionFactors from "../../libmath/conversions/dataTable.json";

/**
 * Convert between units of data
 * @param n The value to be converted
 * @param from The current data value.
 * @param to The value to convert to.
 */
export function data(n: number, from: string, to: string): number {
    const fromFactor = conversionFactors[from];
    const toFactor = conversionFactors[to];

    if (!fromFactor || !toFactor) {
        throw new Error("Invalid from/to. Must be a unit of type `data`");
    }

    return (n * toFactor) / fromFactor;
}
