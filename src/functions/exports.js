/* eslint-disable @typescript-eslint/no-var-requires */
const dinRatio = require("./DinRatio");
const propRatio = require("./PropRatio");
const primeFactorize = require("./PrimeFactorize");

/* Convert */
const Data = require("./Convert/Data");
const Temp = require("./Convert/Temp");
const Area = require("./Convert/Area");
const Distance = require("./Convert/Distance");
const Volume = require("./Convert/Volume");

const LinearPattern = require("./LinearPattern");
const GeometricPattern = require("./GeometricPattern");

const gcd = require("./Gcd");

const Convert = {
    Data,
    Temp,
    Area,
    Distance,
    Volume,
};

module.exports = {
    dinRatio,
    propRatio,
    primeFactorize,
    Convert,
    LinearPattern,
    GeometricPattern,
    gcd,
};
