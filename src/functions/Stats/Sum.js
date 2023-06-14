module.exports = (arr) => {
    if (!Array.isArray(arr)) {
        throw Error("Parameter is not of type Array");
    }
    let x = 0;

    for (let number of arr) {
        x += number;
    }

    return x;
};
