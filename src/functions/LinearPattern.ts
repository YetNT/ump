// Formula = a + (n - 1) * d
// Simplified formulka = dn + c

/**
 *
 * @param n The term number.
 * @param d The difference.
 * @param a First number in sequqnce. The formula for this is `Tn = a + (n - 1) * d`. If you prefer to use `Tn = dn+c`, then `a` is `c`
 */
function findTerm(n: number, d: number, a: number): number {
    // a is c if you like the formula on line 2.
    return a + (n - 1) * d;
}

/**
 *
 * @param n The first term number.
 * @param nn The last term number.
 * @param d The difference.
 * @param a First number in sequqnce. The formula for this is `Tn = a + (n - 1) * d`. If you prefer to use `Tn = dn+c`, then `a` is `c`
 */
function findTerms(n: number, nn: number, d: number, a: number): number[] {
    let termIndex = n;
    const ans: number[] = [];
    while (termIndex != nn + 1) {
        ans.push(a + (n - 1) * d);
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
 * @param returnSimplified Return the simplified formula of `Tn = dn+c` rather than `Tn = a + (n - 1) * d`
 */
function findNthTerm(
    num1: number,
    num2: number,
    num3: number,
    returnSimplified?: boolean
):
    | {
          a: number;
          d: number;
          formula: string;
      }
    | {
          c: number;
          d: number;
          formula: string;
      } {
    const nums = [num1, num2, num3];

    const d = nums[1] - nums[0];
    const dCheck = nums[2] - nums[1];
    const c = nums[0] - d;
    if (d != dCheck) {
        throw new Error("Pattern is not a linear pattern.");
    }
    const a = nums[0];

    const simplified = {
        normal: `${a} + (n - 1) * ${d}`,
        simp: `${d}n + ${c < 0 ? `(${c})` : c}`,
    };

    const formula =
        returnSimplified === false || returnSimplified === undefined
            ? simplified.normal
            : simplified.simp;

    return returnSimplified === false || returnSimplified === undefined
        ? {
              a,
              d,
              formula,
          }
        : { c, d, formula };
}

export default {
    findTerm,
    findTerms,
    findNthTerm,
};
