import { Point, fResult, BaseLine } from ".";

/**
 * A line, what else.
 */
export default class Line extends BaseLine {
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
     * Initalize the line with 2 points.
     * @param a Point a (start)
     * @param b Point b (end)
     */
    constructor(a: Point, b: Point);

    /**
     * Initialize the line using y = mx + c equation.
     * @param m Gradient
     * @param c Y-intercept.
     */
    constructor(m: number, c: number);

    constructor(param1: Point | number, param2: Point | number) {
        super();
        if (param1 instanceof Point && param2 instanceof Point) {
            let a = param1;
            let b = param2;
            this._start = a;
            this._end = b;
            this.calc();
        } else if (typeof param1 == "number" && typeof param2 == "number") {
            let m = param1;
            let c = param2;
            this.calc(m, c);

            this._start = new Point((0 - c) / m, 0);
            this._end = new Point(0, c);
        }
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

    private calc(m?: number, c?: number) {
        this.gradient =
            m || this._end.y == this._start.y // gradient will be undefined.
                ? undefined
                : (this._end.x - this._start.x) / (this._end.y - this._start.y);
        this.midpoint = new Point(
            (this._start.x + this._end.x) / 2,
            (this._start.y + this._end.y) / 2
        );

        this.yIntercept = c || this.start.y - this.gradient * this.start.x;
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
