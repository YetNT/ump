module.exports = (arr) => {
    if (!Array.isArray(arr)) {
        throw Error("Parameter is not of type Array");
    }

    arr.sort((a, b) => a - b);

    return arr[arr.length - 1] - arr[0];
};
