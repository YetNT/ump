/* eslint-disable @typescript-eslint/no-var-requires */
const DinRatio = require("./DinRatio");
const PropRatio = require("./PropRatio");
const PrimeFactorize = require("./PrimeFactorize");
const ConvUnit = require("./ConvUnit");
const ConvTemp = require("./ConvTemp");

/** new functions */
const Data = require("./Convert/Data");
const Temp = require("./Convert/Temp");
const Area = require("./Convert/Area");
const Distance = require("./Convert/Distance");
const Volume = require("./Convert/Volume");

const Convert = {
    Data,
    Temp,
    Area,
    Distance,
    Volume,
};

module.exports = {
    DinRatio,
    PropRatio,
    PrimeFactorize,
    ConvUnit,
    ConvTemp,
    Convert,
};
