/* eslint-disable @typescript-eslint/no-var-requires */
const {
    data,
    units,
    volume,
    area,
    distance,
    ...enums
} = require("./libmath/Units"); // enums

module.exports = { ...require("./functions/exports"), ...enums };
