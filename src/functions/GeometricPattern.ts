/**
 *
 * @param n The term number (not zero indexed)
 * @param a The first term
 * @param r The constant ratio.
 */
function findTerm(n: number, a: number, r: number): number {
    return a * Math.pow(r, n - 1);
}

/**
 *
 * @param num1 The first number
 * @param num2 The second number
 * @param num3 The third number
 * @deprecated This function is deprecated. Use findNthTerm() instead
 */
function findN(num1: number, num2: number, num3: number): string {
    const nums = [num1, num2, num3];
    const r = nums[1] / nums[0];
    const rCheck = nums[2] / nums[1];

    if (r !== rCheck) {
        throw new Error("Pattern is not a geometric pattern.");
    }

    const a = num1;
    const formula = `${a} * ${r}^(n - 1)`;

    return formula;
}

/**
 *
 * @param num1 The first number
 * @param num2 The second number
 * @param num3 The third number
 */
function findNthTerm(
    num1: number,
    num2: number,
    num3: number
): {
    a: number;
    r: number;
    formula: string;
} {
    const nums = [num1, num2, num3];
    const r = nums[1] / nums[0];
    const rCheck = nums[2] / nums[1];

    if (r !== rCheck) {
        throw new Error("Pattern is not a geometric pattern.");
    }

    const a = num1;
    const formula = `${a} * ${r}^(n - 1)`;

    return { a, r, formula };
}

/**
 * Gemotric pattern functions
 */
export default { findTerm, findN, findNthTerm };
