/* eslint-disable @typescript-eslint/no-var-requires */
const { Distance, Area, Volume, Data } = require("./libmath/Units"); // enums
const {
    DinRatio,
    PropRatio,
    PrimeFactorize,
    ConvUnit,
    ConvTemp,
    Convert,
} = require("./functions/exports"); // import functions

// moved all function sto different files for better handling.

module.exports = {
    DinRatio,
    PropRatio,
    PrimeFactorize,
    ConvUnit,
    ConvTemp,
    Convert,
    Distance,
    Area,
    Volume,
    Data,
};
