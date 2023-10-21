/* eslint-disable @typescript-eslint/no-var-requires */
import { tempUnits } from "../../libmath/Units"; // allowed inputs arrays
/**
 * Converts between Temperature units
 *
 * @param n - The value to be converted
 * @param from - The current temperature unit. Param accepts these string forms - `["celsius", "Celsius", "c", "C"]`
 * @param to - The temperature unit to be converted to. Param accepts these strings - `["Kelvin", "kelvin", "k", "K"]`
 *
 * @returns Converted Temperature
 */
export function temp(n: number, from: string, to: string): number {
    if (!tempUnits.includes(from) || !tempUnits.includes(to)) {
        throw new Error(`Invalid temperature unit.`);
    }

    if (
        from === "K" ||
        from === "Kelvin" ||
        from === "kelvin" ||
        from === "k"
    ) {
        switch (to) {
            case "Celsius":
            case "celsius":
            case "C":
            case "c":
                return n - 273.15; // Kelvin to Celcuis
            case "Fahrenheit":
            case "fahrenheit":
            case "F":
            case "f":
                return ((n - 273.15) * 9) / 5 + 32; // Kelvin to Fahrenheit
        }
    } else if (
        from === "C" ||
        from === "Celsius" ||
        from === "celsius" ||
        from === "c"
    ) {
        switch (to) {
            case "Kelvin":
            case "kelvin":
            case "K":
            case "k":
                return n + 273.15; // Celsius to Kelvin
            case "Fahrenheit":
            case "fahrenheit":
            case "F":
            case "f":
                return (n * 9) / 5 + 32; // Celsius to Fahrenheit
        }
    } else if (
        from === "Fahrenheit" ||
        from === "fahrenheit" ||
        from === "F" ||
        from === "f"
    ) {
        switch (to) {
            case "Celsius":
            case "celsius":
            case "C":
            case "c":
                return ((n - 32) * 5) / 9; // Fahrenheit to Celsius
            case "Kelvin":
            case "kelvin":
            case "K":
            case "k":
                return ((n - 32) * 5) / 9 + 273.15; // Fahrenheit to Kelvin
        }
    }

    return 0;
}
