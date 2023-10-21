/**
 *  Divides `x` into the ratio of `y` : `z` and returns the resulting values as an array.
 *
 * @param x - The value to be divided.
 * @param y - The ratio value for `y`.
 * @param z - The ratio value for `z`.
 * @param round - If set to true, will round of the value to 2 decimal places.
 *
 */
export function dinRatio(
    x: number,
    y: number,
    z: number,
    round?: boolean
): (number | string)[] {
    const a = y + z;
    const ans: (number | string)[] = [];

    let q: number | string = (y / a) * x;
    if (/[.]/.test(q.toString())) {
        q = round ? q.toFixed(2) : q.toString();
        ans.push(q);
    } else {
        ans.push(q.toString());
    }

    let w: number | string = (z / a) * x;
    if (/[.]/.test(w.toString())) {
        w = round ? w.toFixed(2) : w.toString();
        ans.push(w);
    } else {
        ans.push(w.toString());
    }

    return ans;
}
