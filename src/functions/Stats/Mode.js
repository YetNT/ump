module.exports = (arr) => {
    if (!Array.isArray(arr)) {
        throw Error("Parameter is not of type Array");
    }

    let frequencyMap = new Map();

    // Count the frequency of each element in the array
    for (let element of arr) {
        if (frequencyMap.has(element)) {
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
            frequencyMap.set(element, 1);
        }
    }

    let maxFrequency = 0;
    let modes = [];

    // Find the element(s) with the maximum frequency
    for (let [element, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            modes = [element];
        } else if (frequency === maxFrequency) {
            modes.push(element);
        }
    }

    return modes;
};
