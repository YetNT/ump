module.exports = (arr, round = undefined) => {
    if (!Array.isArray(arr)) {
        throw Error("Parameter is not of type Array");
    }
    let x = 0;

    for (let number of arr) {
        x += number;
    }
    let mean = x / arr.length;
    return round === undefined || round === false ? mean : Math.round(mean);
};
