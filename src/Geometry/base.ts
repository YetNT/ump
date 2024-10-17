import Line from "./Line";

/**
 * Represents a single point in this package.
 */
export class Point {
    /**
     * X Coordinate
     */
    x: number;
    /**
     * Y Coordinate
     */
    y: number;

    /**
     * initalize the point.
     * @param x X Coordinate
     * @param y Y Coordinate
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Interface that is returned by findPtFromMidpt and findPtFromGradient
 */
export interface fResult {
    /**
     * The entire line this makes
     */
    line: Line;
    /**
     * The pt which you were looking for (contains the x/y value that was unknown.)
     */
    pt: Point;
}

/**
 * Where all things are extended from.
 */
export class BaseLine {
    /**
     * Y intercept.
     */
    yIntercept: number;
    /**
     * X intercept.
     */
    xIntercept: number;
}
