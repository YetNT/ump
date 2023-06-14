/* eslint-disable @typescript-eslint/no-var-requires */
const conversionFactors = require("../../libmath/conversions/convTable.json");
const { distance } = require("../../libmath/Units"); // allowed inputs array

module.exports = (n, from, to) => {
    const fromFactor = conversionFactors[from];
    const toFactor = conversionFactors[to];
    if (!fromFactor || !toFactor) {
        throw Error(
            `Invalid from/to Unit. ${from} or ${to} is not a valid unit.`
        );
    }

    if (!distance.includes(from) || !distance.includes(to)) {
        throw Error(
            `One of the parameters is not a unit of "distance". ${from} and ${to}`
        );
    }

    return (n * fromFactor) / toFactor;
};
