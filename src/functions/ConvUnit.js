/**
 * FUNCTION IS DEPRACTED!
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const conversionFactors = require("../libmath/conversions/convTable.json");
const { distance, area, volume } = require("../libmath/Units"); // allowed inputs arrays

module.exports = (unit, n, fromUnit, toUnit) => {
    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];
    if (!fromFactor || !toFactor) {
        throw Error(
            `invalid from/to Unit, ${fromUnit} or ${toUnit} is not a valid unit.` +
                fromFactor ==
                undefined
                ? `${fromUnit} is invalid.`
                : toFactor == undefined
                ? `${toUnit} is invalid.`
                : `Hm`
        );
    }

    if (unit !== "dist" && unit !== "area" && unit !== "vol") {
        throw Error(
            "invalid unit. unit must be either 'dist', 'area' or 'vol'"
        );
    } else if (
        (unit === "area" &&
            (!area.includes(fromUnit) || !area.includes(toUnit))) ||
        (unit === "dist" &&
            (!distance.includes(fromUnit) || !distance.includes(toUnit))) ||
        (unit === "vol" &&
            (!volume.includes(fromUnit) || !volume.includes(toUnit)))
    ) {
        throw Error(
            `unit parameter is not equal to it's units of conversion. ${fromUnit} and ${toUnit}`
        );
    } else {
        return (n * fromFactor) / toFactor;
    }
};
