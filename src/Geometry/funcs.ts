import { Point } from "./base";
import Line from "./Line";

/**
 * Checks if two lines are perpendicular.
 *
 * This function determines if two lines are perpendicular by comparing their gradients.
 * If one line has an undefined gradient and the other has a gradient of 0, they are considered perpendicular.
 * For non-horizontal/vertical lines, the function checks if the product of their gradients is -1.
 *
 * @param l1 - The first line.
 * @param l2 - The second line.
 * @returns `true` if the lines are perpendicular, `false` otherwise.
 */
export function isPerpendicular(l1: Line, l2: Line): boolean {
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
 * Checks if two lines are parallel.
 *
 * This function compares the gradients of the two input lines.
 * If the gradients are equal, the lines are considered parallel.
 *
 * @param l1 - The first line.
 * @param l2 - The second line.
 * @returns `true` if the lines are parallel, `false` otherwise.
 */
export function isParallel(l1: Line, l2: Line): boolean {
    return l1.gradient == l2.gradient;
}

/**
 * Calculates the point of intersection between two lines.
 *
 * This function uses the gradients and y-intercepts of the two lines to find the point where they intersect.
 * If the lines are parallel, the function returns `undefined`.
 *
 * @param l1 - The first line.
 * @param l2 - The second line.
 * @returns The point of intersection between `l1` and `l2`, or `undefined` if the lines are parallel.
 */
export function intersectionPt(l1: Line, l2: Line): Point | undefined {
    const epsilon = 1e-10; // tolerance for floating-point errors
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
    const gradientDiff = l2.gradient - l1.gradient;

    if (Math.abs(gradientDiff) < epsilon) {
        return undefined; // Gradients are too close, treat as parallel
    }

    const x = (l1.yIntercept - l2.yIntercept) / gradientDiff;

    // Use either line to calculate the y value (I'll use line 1)
    const y = l1.gradient * x + l1.yIntercept;

    return new Point(x, y);
}

/**
 * Checks if three points are collinear.
 *
 * This function creates two lines using the first and second points, and the second and third points.
 * It then compares the gradients of these two lines. If the gradients are equal, the points are collinear.
 *
 * @param a - The first point.
 * @param b - The second point.
 * @param c - The third point.
 * @returns `true` if the points are collinear, `false` otherwise.
 */
export function arePointsCollinear(a: Point, b: Point, c: Point): boolean {
    return new Line(a, b).gradient === new Line(b, c).gradient;
}
