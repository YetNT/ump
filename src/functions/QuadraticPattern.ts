/**
 * f1 : 2a = T1
 * f2 : 3a+b = T1
 * f3 : a+b+c = T1
 *
 * final : an^2+bn+c
 */

/**
 * Returns singular term.
 * @param n The term number (not zero indexed)
 * @param a `a`n^2+bn+c
 * @param b an^2+`b`n+c
 * @param c an^2+bn+`c`
 */
function findTerm(n: number, a: number, b: number, c: number): number {
    return a * Math.pow(n, 2) + b * n + c;
}

/**
 * Returns multiple terms
 * @param n The term number to start at (not zero indexed)
 * @param nn The term number to end at
 * @param a `a`n^2+bn+c
 * @param b an^2+`b`n+c
 * @param c an^2+bn+`c`
 */
function findTerms(
    n: number,
    nn: number,
    a: number,
    b: number,
    c: number
): number[] {
    let termIndex = n;
    const ans: number[] = [];
    while (termIndex != nn + 1) {
        ans.push(a * Math.pow(n, 2) + b * n + c);
        n++;
        termIndex++;
    }
    return ans;
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
    b: number;
    c: number;
    formula: string;
} {
    const p1: number[] = [num2 - num1, num3 - num2];
    const p2: number = p1[1] - p1[0];

    const a = p2 / 2; // 2a = Term 1;
    const b = p1[0] - 3 * a; // 3a+b = Term 1
    const c = num1 - a - b;

    const formula = `(${a}n^2) + (${b}n) + ${c}`;

    return { a, b, c, formula };
}

/**
 * Quadratic pattern functions
 */
export default { findTerm, findNthTerm, findTerms };
