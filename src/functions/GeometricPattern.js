module.exports = {
    findTerm: (n, a, r) => {
        return a * Math.pow(r, n - 1);
    },
    findN: (num1, num2, num3) => {
        let nums = [num1, num2, num3];
        let r = nums[1] / nums[0];
        let rCheck = nums[2] / nums[1];

        if (r !== rCheck) {
            throw new Error("Pattern is not a geometric pattern.");
        }

        let a = num1;
        let formula = `${a} * ${r}^(n - 1)`;

        return formula;
    },
};
