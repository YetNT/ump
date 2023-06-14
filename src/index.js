/* eslint-disable @typescript-eslint/no-var-requires */
const { Distance, Area, Volume, Data } = require("./libmath/Units"); // enums
const {
    dinRatio,
    propRatio,
    primeFactorize,
    Convert,
    LinearPattern,
    GeometricPattern,
    gcd,
} = require("./functions/exports"); // import functions

// moved all function sto different files for better handling.

module.exports = {
    dinRatio,
    propRatio,
    primeFactorize,
    Convert,
    LinearPattern,
    GeometricPattern,
    gcd,
    Distance,
    Area,
    Volume,
    Data,
};
