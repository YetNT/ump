// Formula = a + (n - 1) * d
// Simplified formulka = dn + c
module.exports = {
    findTerm: (n, d, a) => {
        // a is c if you like the formula on line 2.
        return a + (n - 1) * d;
    },
    findN: (num1, num2, num3, returnSimplified = false) => {
        let nums = [num1, num2, num3];

        let d = nums[1] - nums[0];
        let dCheck = nums[2] - nums[1];
        let c = nums[0] - d;
        if (d != dCheck) {
            throw Error("Pattern is not a linear pattern.");
        }
        let a = nums[0];

        let returnObj = {
            normal: `${a} + (n - 1) * ${d}`,
            simp: `${d}n + ${c < 0 ? `(${c})` : c}`,
        };

        return returnSimplified === false || returnSimplified === undefined
            ? returnObj.normal
            : returnObj.simp;
    },
};
