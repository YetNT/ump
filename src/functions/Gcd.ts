/**
 * Greatest Common Divider
 * @param a 1st number
 * @param b 2nd number
 */
export function gcd(a: number, b: number): number {
    // Ensure a and b are positive integers
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));

    // Find the GCD using the Euclidean algorithm
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    // Return the calculated GCD
    return a;
}
