/* eslint-disable @typescript-eslint/no-var-requires */
const conversionFactors = require("../../libmath/conversions/dataTable.json");

module.exports = (n, from, to) => {
    const fromFactor = conversionFactors[from];
    const toFactor = conversionFactors[to];

    if (!fromFactor || !toFactor) {
        throw Error("Invalid from/to. Must be a unit of type `data`");
    }

    return (n * toFactor) / fromFactor;
};
