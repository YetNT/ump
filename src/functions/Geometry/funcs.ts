import { Point } from ".";
import Line from "./Line";

/**
 * Are the lines perpendicular? (Their gradients multiply to -1)
 *
 * An exception for horizontal and vertical lines: where they dont follow m1 * m2 = -1, but by definiton are perpendicular.
 * @param l1 Line 1
 * @param l2 Line 2
 * @returns
 */
export function isPerpendicular(l1: Line, l2: Line) {
    // If one line has an undefined gradient and the other has a gradient of 0
    if (
        (l1.gradient === undefined && l2.gradient === 0) ||
        (l1.gradient === 0 && l2.gradient === undefined)
    ) {
        return true; // These lines are perpendicular (horizontal & vertical)
    }
    // Standard perpendicularity check for non-horizontal/vertical lines
    return l1.gradient * l2.gradient === -1;
}

/**
 * Are 2 lines parallel? (Their gradients equal.)
 * @param l1 Line 1
 * @param l2 Line 2
 * @returns
 */
export function isParallel(l1: Line, l2: Line) {
    return l1.gradient == l2.gradient;
}

/**
 * Function that returns the intersection point of two lines.
 * @param l1 Line 1
 * @param l2 Line 2
 * @returns
 */
export function intersectionPt(l1: Line, l2: Line): Point | undefined {
    if (isParallel(l1, l2)) {
        return undefined; // Lines are parallel, no intersection
    }
    // if we have line y=mx+c and y=mx+c
    // when their equal essential m1x+c1 = m2x + c2
    // c can be found by looking at what y value is hit when x is 0
    // m1x + c1 - c2 = m2x
    // c1 - c2 = m2x - m1x
    // c1 - c2 = x (m2 - m1)
    // (c1-c2)/(m2-m1) = x.
    // Then when x is found, input it into the findPtFromGradient to find y.

    // Calculate x using the formula for the intersection of two lines
    const x = (l2.yIntercept - l1.yIntercept) / (l1.gradient - l2.gradient);

    // Use either line to calculate the y value (I'll use line 1)
    const y = l1.gradient * x + l1.yIntercept;

    return new Point(x, y);
}
