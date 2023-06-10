module.exports = (x, y, z, round = false) => {
    var a = parseFloat(y) + parseFloat(z);
    var ans = [];

    var q = (parseFloat(y) / a) * parseFloat(x);
    if (/[.]/.test(q) === true) {
        q = round ? q.toFixed(2) : q;
        ans.push(parseFloat(q));
    } else {
        ans.push(q);
    }

    var w = (parseFloat(z) / a) * parseFloat(x);
    if (/[.]/.test(w) === true) {
        w = round ? w.toFixed(2) : w;
        ans.push(parseFloat(w));
    } else {
        ans.push(w);
    }

    return ans;
};
