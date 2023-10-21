// Formula = a + (n - 1) * d
// Simplified formulka = dn + c

export default {
    /**
     *
     * @param n The term number.
     * @param d The difference.
     * @param a First number in sequqnce. The formula for this is `Tn = a + (n - 1) * d`. If you prefer to use `Tn = dn+c`, then `a` is `c`
     */
    findTerm(n: number, d: number, a: number): number {
        // a is c if you like the formula on line 2.
        return a + (n - 1) * d;
    },
    /**
     *
     * @param num1 The first number
     * @param num2 The second number
     * @param num3 The third number
     * @param returnSimplified Return the simplified formula of `Tn = dn+c` rather than `Tn = a + (n - 1) * d`
     * @deprecated This function is deprecated. Use finNthTerm instead.
     */
    findN(
        num1: number,
        num2: number,
        num3: number,
        returnSimplified?: boolean
    ): string {
        const nums = [num1, num2, num3];

        const d = nums[1] - nums[0];
        const dCheck = nums[2] - nums[1];
        const c = nums[0] - d;
        if (d != dCheck) {
            throw new Error("Pattern is not a linear pattern.");
        }
        const a = nums[0];

        const returnObj = {
            normal: `${a} + (n - 1) * ${d}`,
            simp: `${d}n + ${c < 0 ? `(${c})` : c}`,
        };

        return returnSimplified === false || returnSimplified === undefined
            ? returnObj.normal
            : returnObj.simp;
    },
    /**
     *
     * @param num1 The first number
     * @param num2 The second number
     * @param num3 The third number
     * @param returnSimplified Return the simplified formula of `Tn = dn+c` rather than `Tn = a + (n - 1) * d`
     */
    findNthTerm(
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
    },
};
