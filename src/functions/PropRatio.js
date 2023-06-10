module.exports = (x, y, z, which) => {
    // if which == false
    //
    // x : y
    // ? : z
    // ----------------
    // if which == true
    //
    // x : y
    // z : ?
    let ans;
    let mult;

    if (which === true) {
        mult = parseFloat(z) / parseFloat(x);
        ans = parseFloat(y) * parseFloat(mult);
    } else if (which === false || which === undefined || which === null) {
        mult = parseFloat(y) / parseFloat(z);
        ans = parseFloat(x) / parseFloat(mult);
    }

    return ans;
};
