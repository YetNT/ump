// eslint-disable-next-line @typescript-eslint/no-var-requires
const pf = require("../libmath/primeFactorization");

module.exports = (num) => {
    let primeFactors = [];
    let prime = 2;

    while (num > 1) {
        while (num % prime === 0) {
            primeFactors.push(prime);
            num = num / prime;
        }
        prime = pf.nextPrime(prime);
    }

    return primeFactors;
};
