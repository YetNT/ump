module.exports = (a, b) => {
    // Ensure a and b are positive integers
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));

    // Find the GCD using the Euclidean algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    // Return the calculated GCD
    return a;
};
