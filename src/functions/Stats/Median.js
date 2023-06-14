module.exports = (arr) => {
    if (!Array.isArray(arr)) {
        throw Error("Parameter is not of type Array");
    }

    arr.sort((a, b) => a - b);
    let median = Math.round(arr.length / 2);
    let answer = 0;

    if (arr.length % 2 == 0) {
        answer = (arr[median - 1] + arr[median - 2]) / 2;
    } else {
        answer = arr[median - 1];
    }

    return answer;
};
