/* eslint-disable @typescript-eslint/no-var-requires */
const { units } = require("../libmath/Units"); // allowed inputs arrays

module.exports = (n, from, to) => {
    if (!units.includes(from) || !units.includes(to)) {
        console.log(`Invalid temperature unit.`);
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
};
