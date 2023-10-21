/**
 * Calculates the proportional value of `x`, `y`, and `z` in a ratio.
 *
 * @param x - The first value in the ratio.
 * @param y - The second value in the ratio.
 * @param z - The third value in the ratio.
 * @param which - If set to `true`, x : y = z : ?. Otherwise, x : y = ? : z
 *
 *@example
 *console.log(Ump.PropRatio(4, 2, 1, false)) // 2
 *@exmaple
 *console.log(Ump.PropRatio(4, 2, 1, true)) // 0.5
 *
 */
export function propRatio(
    x: number,
    y: number,
    z: number,
    which?: boolean
): number {
    // if which == false
    //
    // x : y
    // ? : z
    // ----------------
    // if which == true
    //
    // x : y
    // z : ?

    return which == true ? (z / x) * y : x / (y / x);
}
