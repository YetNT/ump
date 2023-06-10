/* eslint-disable @typescript-eslint/no-var-requires */
const { Distance, Area, Volume } = require("./libmath/Units"); // enums
const {
    DinRatio,
    PropRatio,
    PrimeFactorize,
    ConvUnit,
    ConvTemp,
} = require("./functions/exports"); // import functions

// moved all function sto different files for better handling.

module.exports = {
    DinRatio,
    PropRatio,
    PrimeFactorize,
    ConvUnit,
    ConvTemp,
    Distance,
    Area,
    Volume,
};
