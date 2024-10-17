/**
 * Represents a single point in this package.
 */
class Point {
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
interface fResult {
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
 * A line, what else.
 */
class Line {
    private _start: Point;
    private _end: Point;
    /**
     * The gradient of the line, updates when you update either start or end property.
     */
    gradient: number;
    /**
     * The midpoint of the line, updates when you update either start of end property.
     */
    midpoint: Point;
    /**
     * Y intercept.
     */
    yIntercept: number;
    /**
     * X intercept.
     */
    xIntercept: number;

    /**
     * Initalize the line with 2 points.
     * @param a Point a (start)
     * @param b Point b (end)
     */
    constructor(a: Point, b: Point) {
        this._start = a;
        this._end = b;
        this.calc();
    }

    set start(pt: Point) {
        this._start = pt;
        this.calc();
    }

    set end(pt: Point) {
        this._end = pt;
        this.calc();
    }

    /**
     * The first point of the line.
     */
    get start() {
        return this._start;
    }

    /**
     * The second point of the line.
     */
    get end() {
        return this._end;
    }

    private calc() {
        this.gradient =
            this._end.y == this._start.y // gradient will be undefined.
                ? undefined
                : (this._end.x - this._start.x) / (this._end.y - this._start.y);
        this.midpoint = new Point(
            (this._start.x + this._end.x) / 2,
            (this._start.y + this._end.y) / 2
        );

        this.yIntercept = this.start.y - this.gradient * this.start.x;
        this.xIntercept =
            this.yIntercept === 0
                ? this.start.x
                : -this.yIntercept / this.gradient;
    }

    /**
     * Function that finds an unknown coordinate from the given point and a given midpoint.
     * @param givenPt Given point
     * @param midpt Given midpoint
     * @param givenX Given X (If you're looking for y)
     * @param givenY Given Y (if you're looking for x, if you do enter a value make givenX = undefined)
     * @returns
     */
    static findPtFromMidpt(
        givenPt: Point,
        midpt: Point,
        givenX?: number,
        givenY?: number
    ): fResult {
        // if we're given midpt (0;0)
        // and pts A(1; 1) and B(-1; y)
        // 0 = (1 + y)/2
        // 2 * 0 = 1 + y
        // (2 * 0) - 1 = y (same goes for x)
        if (givenX != undefined) {
            let newY: number = 2 * midpt.y - givenPt.y;
            let newPoint: Point = new Point(givenX, newY);
            return {
                pt: newPoint,
                line: new Line(givenPt, newPoint),
            };
        } else if (givenY != undefined) {
            let newX: number = 2 * midpt.x - givenPt.x;
            let newPoint: Point = new Point(newX, givenY);
            return {
                pt: newPoint,
                line: new Line(givenPt, newPoint),
            };
        }
    }

    /**
     * Function that finds an unknown coordinate from the given point and a given gradient.
     * @param givenPt Given Point
     * @param gradient Given Gradient
     * @param givenX Given X (If you're looking for y)
     * @param givenY Given Y (if you're looking for x, if you do enter a value make givenX = undefined)
     * @returns
     */
    static findPtFromGradient(
        givenPt: Point,
        gradient: number,
        givenX?: number,
        givenY?: number
    ): fResult {
        // if we're given graident m

        // and pts A(Xa; Ya) and B(Xb; y)
        // m = (Ya - y)/(Xa - Xb)
        // m(Xa - Xb) = Ya - y
        // m(Xa - Xb) + y = Ya
        // y = Ya - m(Xa - Xb)

        // and pts A(Xa; Ya) and B(x; Yb)
        // m = (Ya - Yb)/(Xa - x)
        // m(Xa - x) = (Ya - Yb)
        // Xa - x = (Ya - Yb)/m
        // - x = ((Ya - Yb)/m) - Xa
        // therefore x = Xa + ((Ya-Yb)/m)

        if (givenX != undefined) {
            let newY = givenPt.y - gradient * (givenPt.x - givenX);
            let newPoint = new Point(givenX, newY);
            return {
                pt: newPoint,
                line: new Line(givenPt, newPoint),
            };
        } else if (givenY != undefined) {
            let newX = givenPt.x - (givenPt.y - givenY) / gradient;
            let newPoint = new Point(newX, givenY);
            return { pt: newPoint, line: new Line(givenPt, newPoint) };
        }
    }
}
/**
 * Are the lines perpendicular? (Their gradients multiply to -1)
 *
 * An exception for horizontal and vertical lines: where they dont follow m1 * m2 = -1, but by definiton are perpendicular.
 * @param l1 Line 1
 * @param l2 Line 2
 * @returns
 */
function isPerpendicular(l1: Line, l2: Line) {
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
function isParallel(l1: Line, l2: Line) {
    return l1.gradient == l2.gradient;
}

/**
 * Function that returns the intersection point of two lines.
 * @param l1 Line 1
 * @param l2 Line 2
 * @returns
 */
function intersectionPt(l1: Line, l2: Line): Point | undefined {
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

export { Point, fResult, Line, isParallel, isPerpendicular, intersectionPt };
