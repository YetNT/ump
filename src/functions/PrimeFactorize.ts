const nextPrime = (n: number) => {
    let prime = n + 1;
    while (!isPrime(prime)) {
        prime++;
    }
    return prime;
};
const isPrime = (n: number) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

/**
 * Calculates the prime factorization of a number.
 *
 * @param num - The number to be factorized.
 */
export function primeFactorize(num: number): number[] {
    const primeFactors: number[] = [];
    let prime = 2;

    while (num > 1) {
        while (num % prime === 0) {
            primeFactors.push(prime);
            num = num / prime;
        }
        prime = nextPrime(prime);
    }

    return primeFactors;
}
