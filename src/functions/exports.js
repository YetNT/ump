/* eslint-disable @typescript-eslint/no-var-requires */
const dinRatio = require("./DinRatio");
const propRatio = require("./PropRatio");
const primeFactorize = require("./PrimeFactorize");
const gcd = require("./Gcd");

const data = require("./Convert/Data");
const temp = require("./Convert/Temp");
const area = require("./Convert/Area");
const distance = require("./Convert/Distance");
const volume = require("./Convert/Volume");

const LinearPattern = require("./LinearPattern");
const GeometricPattern = require("./GeometricPattern");

const mean = require("./Stats/Mean");
const median = require("./Stats/Median");
const mode = require("./Stats/Mode");
const range = require("./Stats/Range");
const sum = require("./Stats/Sum");

const Convert = {
    data,
    temp,
    area,
    distance,
    volume,
};

const Stats = {
    mean,
    median,
    mode,
    range,
    sum,
};

module.exports = {
    dinRatio,
    propRatio,
    primeFactorize,
    Convert,
    Stats,
    LinearPattern,
    GeometricPattern,
    gcd,
};
