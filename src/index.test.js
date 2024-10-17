/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const i = require("../dist/index");
const { Volume, Area, Distance, Data } = require("../dist/index");
const expect = require("expect.js");

describe("Divide In Ratio", function () {
    describe("#DinRatio()", function () {
        it("should expose a function", function () {
            expect(i.dinRatio).to.be.a("function");
        });

        it("should Divide 500 into the ratio of 3:2, returning [300, 200]", function () {
            var ans = i.dinRatio(500, 3, 2);
            expect(ans).to.eql([300, 200]);
        });
    });
});

describe("Prime Factorization", function () {
    describe("#PrimeFactorize", function () {
        it("should expose a function", function () {
            expect(i.primeFactorize).to.be.a("function");
        });

        it("should give the prime factors of 5000, returning [2, 2, 2, 5, 5, 5, 5]", function () {
            var ans = i.primeFactorize(5000);
            expect(ans).to.eql([2, 2, 2, 5, 5, 5, 5]);
        });
    });
});

describe("Propertional Ratios", function () {
    describe("#PropRatio", function () {
        it("should expose a function", function () {
            expect(i.propRatio).to.be.a("function");
        });

        it("should divide x by z, multiplying that by y (x=2, y=4, 6=z, which?=true) = 12", function () {
            var ans = i.propRatio(2, 4, 6, true);
            expect(ans).to.eql(12);
        });
    });
});

describe("Conversion", function () {
    describe("Convert", function () {
        it("should expose an object", function () {
            expect(i.Convert).to.be.an("object");
        });

        describe("Distance", function () {
            describe("#Convert.Distance", function () {
                it("should expose a function", function () {
                    var ans = i.Convert.distance;
                    expect(ans).to.be.a("function");
                });
            });
            it("should convert 1 nautical-mile to nanometre = 1852000000000", function () {
                var ans = i.Convert.distance(1, "nautical-mile", "nanometer");
                expect(ans).to.eql(1852000000000);
            });
        });

        describe("Area", function () {
            describe("#Convert.Area", function () {
                it("should expose a function", function () {
                    var ans = i.Convert.area;
                    expect(ans).to.be.a("function");
                });
            });
            it("should convert 1 square-centimeter to square-inch = 0.15500031000062", function () {
                var ans = i.Convert.area(1, "square-centimeter", "square-inch");
                expect(ans).to.eql(0.15500031000062);
            });
        });

        describe("Volume", function () {
            describe("#Convert.Volume", function () {
                it("should expose a function", function () {
                    var ans = i.Convert.volume;
                    expect(ans).to.be.a("function");
                });
            });
            it("should conevrt 1 cubic metre to cubic centimetre = 1000000", function () {
                var ans = i.Convert.volume(
                    1,
                    "cubic-meter",
                    "cubic-centimeter"
                );
                expect(ans).to.eql(1000000);
            });
        });

        describe("Tempreture", function () {
            describe("#Convert.Temp", function () {
                it("should expose a function", function () {
                    var ans = i.Convert.temp;
                    expect(ans).to.be.a("function");
                });
            });

            describe("Fahrenheit", function () {
                it("should convert 1 Fahrenheit to Celsius", function () {
                    var ans = i.Convert.temp(1, "F", "C");
                    expect(ans).to.eql(-17.22222222222222);
                });
                it("should convert 1 Fahrenheit to Kelvin", function () {
                    var ans = i.Convert.temp(1, "F", "K");
                    expect(ans).to.eql(255.92777777777775);
                });
            });

            describe("Celsius", function () {
                it("should convert 1 Celsius to Fahrenheit", function () {
                    var ans = i.Convert.temp(1, "C", "F");
                    expect(ans).to.eql(33.8);
                });
                it("should convert 1 Celsius to Kelvin", function () {
                    var ans = i.Convert.temp(1, "C", "K");
                    expect(ans).to.eql(274.15);
                });
            });

            describe("Kelvin", function () {
                it("should convert 1 Kelvin to Celsius", function () {
                    var ans = i.Convert.temp(1, "K", "C");
                    expect(ans).to.eql(-272.15);
                });
                it("should convert 1 Kelvin to Fahrenheit", function () {
                    var ans = i.Convert.temp(1, "K", "F");
                    expect(ans).to.eql(-457.87);
                });
            });
        });

        describe("Data", function () {
            describe("#Convert.Data", function () {
                it("should expose an function", function () {
                    expect(i.Convert.data).to.be.a("function");
                });
            });

            it("should convert 1 Terabyte to Bits", function () {
                var ans = i.Convert.data(1, "terabyte", "bit");
                expect(ans).to.be.eql(8000000000000);
            });

            it("should convert 1 Bit to Terabytes", function () {
                var ans = i.Convert.data(1, "bit", "terabyte");
                expect(ans).to.be.eql(1.25e-13);
            });
        });
    });
});

describe("Patterns", function () {
    describe("Linear Patterns", function () {
        describe("#LinearPattern", function () {
            it("should expose an object", function () {
                expect(i.LinearPattern).to.be.an("object");
            });
            it("should find Nth term of pattern 10, 30, 50", function () {
                var ans = i.LinearPattern.findNthTerm(10, 30, 50);
                expect(ans.formula).to.be.eql("10 + (n - 1) * 20");
            });
            it("should find term number 3", function () {
                var ans = i.LinearPattern.findTerm(3, 20, 10);
                expect(ans).to.be.eql(50);
            });
            it("should the next 5 terms (starting from Tn = 10)", function () {
                var ans = i.LinearPattern.findTerms(10, 15, 4, 9);
                expect(ans).to.be.eql([45, 49, 53, 57, 61, 65]);
            });
        });
    });
    describe("Geometric Patterns", function () {
        describe("#GeometricPattern", function () {
            it("should expose an object", function () {
                expect(i.GeometricPattern).to.be.an("object");
            });
            it("should find Nth term of pattern 1, 4, 16", function () {
                let ans = i.GeometricPattern.findNthTerm(1, 4, 16);
                expect(ans.formula).to.be.eql("1 * 4^(n - 1)");
            });
            it("should find term number 3", function () {
                let ans = i.GeometricPattern.findTerm(3, 1, 4);
                expect(ans).to.be.eql(16);
            });
            it("should the next 5 terms (starting from Tn = 10)", function () {
                var ans = i.GeometricPattern.findTerms(10, 15, 4, 2);
                expect(ans).to.be.eql([2048, 4096, 8192, 16384, 32768, 65536]);
            });
        });
    });
    describe("Quadratic Patterns", function () {
        describe("#QuadraticPattern", function () {
            it("should expose an object", function () {
                expect(i.QuadraticPattern).to.be.an("object");
            });
            it("should find Nth term of pattern 1, 4, 16", function () {
                let ans = i.QuadraticPattern.findNthTerm(1, 20, 65);
                expect(ans.formula).to.be.eql("(13n^2) + (-20n) + 8");
            });
            it("should find term number 3", function () {
                let ans = i.QuadraticPattern.findTerm(3, 1, 4, 90);
                expect(ans).to.be.eql(111);
            });
            it("should the next 5 terms (starting from Tn = 10)", function () {
                var ans = i.QuadraticPattern.findTerms(10, 15, 4, 2, 8);
                expect(ans).to.be.eql([428, 514, 608, 710, 820, 938]);
            });
        });
    });
});

describe("Greatest Common Divisor", function () {
    describe("#Gcd", function () {
        it("should expose a function", function () {
            expect(i.gcd).to.be.a("function");
        });
        it("should find the greatest common divisor between 56 and 24", function () {
            let ans = i.gcd(56, 24);
            expect(ans).to.be.eql(8);
        });
    });
});

describe("Calculate", function () {
    it("should expose a function", function () {
        expect(i.calculate).to.be.a("function");
    });
    it("should calculate 2^(2 + (2/2)) = 8", function () {
        let ans = i.calculate("2^(2+(2/2))");
        expect(ans).to.be.eql(8);
    });
});

describe("Stats", function () {
    describe("#Stats", function () {
        it("should be an object", function () {
            expect(i.Stats).to.be.an("object");
        });

        describe("#Stats.mean", function () {
            it("should expose a func", function () {
                expect(i.Stats.mean).to.be.a("function");
            });
            it("mean of [1, 1, 2, 6, 7, 8, 3, 5, 5, 1] should equal to 3.9", function () {
                let ans = i.Stats.mean([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]);
                expect(ans).to.be.eql(3.9);
            });
        });

        describe("#Stats.median", function () {
            it("should expose a func", function () {
                expect(i.Stats.median).to.be.a("function");
            });
            it("median of [1, 1, 2, 6, 7, 8, 3, 5, 5, 1] should equal to 3.9", function () {
                let ans = i.Stats.median([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]);
                expect(ans).to.be.eql(2.5);
            });
        });

        describe("#Stats.mode", function () {
            it("should expose a func", function () {
                expect(i.Stats.mode).to.be.a("function");
            });
            it("mode of [1, 1, 2, 6, 7, 8, 3, 5, 5, 1] should equal [ 1 ]", function () {
                let ans = i.Stats.mode([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]);
                expect(ans).to.be.eql([1]);
            });
        });

        describe("#Stats.range", function () {
            it("should expose a func", function () {
                expect(i.Stats.range).to.be.a("function");
            });
            it("range of [1, 1, 2, 6, 7, 8, 3, 5, 5, 1] should equal 7", function () {
                let ans = i.Stats.range([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]);
                expect(ans).to.be.eql(7);
            });
        });

        describe("#Stats.sum", function () {
            it("should expose a func", function () {
                expect(i.Stats.sum).to.be.a("function");
            });
            it("sum of [1, 1, 2, 6, 7, 8, 3, 5, 5, 1] should equal 39", function () {
                let ans = i.Stats.sum([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]);
                expect(ans).to.be.eql(39);
            });
        });
    });
});

describe("Enums", function () {
    describe("#Volume", function () {
        it("should be an object", function () {
            expect(Volume).to.be.an("object");
        });
    });

    describe("#Area", function () {
        it("should be an object", function () {
            expect(Area).to.be.an("object");
        });
    });

    describe("#Distance", function () {
        it("should be an object", function () {
            expect(Distance).to.be.an("object");
        });
    });

    describe("#Data", function () {
        it("should be an object", function () {
            expect(Data).to.be.an("object");
        });
    });
});

describe("Analytical Geometry", function () {
    describe("#Point", function () {
        it("should be a class (well function)", function () {
            expect(i.Point).to.be.a("function");
        });
        let a = new i.Point(10, 23);
        it("should have the right x and y values", function () {
            expect(a.x).to.be(10);
            expect(a.y).to.be(23);
        });
    });
    describe("#Line", function () {
        let a = new i.Point(1, 1);
        let b = new i.Point(-1, -1);
        let line1 = new i.Line(a, b);
        let line2 = new i.Line(new i.Point(0, 0), new i.Point(-1, 1)); // perpendicular to line 1
        let line3 = new i.Line(new i.Point(2, 0), new i.Point(0, 2)); // parallel to line2
        describe("Class", function () {
            it("should be a class (Well function)", function () {
                expect(i.Line).to.be.a("function");
            });
            it("should correctly place the points in the properties (1;1) and (-1;-1)", function () {
                expect(JSON.stringify(line1.start)).to.be(JSON.stringify(a));
                expect(JSON.stringify(line1.end)).to.be(JSON.stringify(b));
            });
            it("should identify the correct midpoint (0; 0)", function () {
                expect(JSON.stringify(line1.midpoint)).to.be(
                    JSON.stringify(new i.Point(0, 0))
                );
            });
            it("should correctly get the slope of the line (1)", function () {
                expect(line1.gradient).to.be(1);
            });
        });
        describe("Static methods", function () {
            describe("find the missing ? coordinate from the gradient", function () {
                describe("should find ? to be 2 | m = -1, point 1 = (2;0), point 2 = (0;?)", function () {
                    let z = i.Line.findPtFromGradient(line3.start, -1, 0);

                    it("should have the correct point stored in fResult", function () {
                        expect(JSON.stringify(z.pt)).to.be(
                            JSON.stringify(line3.end)
                        );
                    });
                    it("should have the correct line stored in fResult", function () {
                        expect(JSON.stringify(z.line)).to.be(
                            JSON.stringify(line3)
                        );
                    });
                });
                describe("should find ? to be 0 | m = -1, point 1 = (2;0), point 2 = (?;2)", function () {
                    let z = i.Line.findPtFromGradient(
                        line3.start,
                        -1,
                        undefined,
                        2
                    );

                    it("should have the correct point stored in fResult", function () {
                        expect(JSON.stringify(z.pt)).to.be(
                            JSON.stringify(line3.end)
                        );
                    });
                    it("should have the correct line stored in fResult", function () {
                        expect(JSON.stringify(z.line)).to.be(
                            JSON.stringify(line3)
                        );
                    });
                });
            });
            describe("find the missing ? coordinate from the midpoint", function () {
                describe("should find ? to be 2 | midpoint = (1;1), point 1 = (2;0), point 2 = (0;?)", function () {
                    let z = i.Line.findPtFromMidpt(
                        line3.start,
                        new i.Point(1, 1),
                        0
                    );

                    it("should have the correct point stored in fResult", function () {
                        expect(JSON.stringify(z.pt)).to.be(
                            JSON.stringify(line3.end)
                        );
                    });
                    it("should have the correct line stored in fResult", function () {
                        expect(JSON.stringify(z.line)).to.be(
                            JSON.stringify(line3)
                        );
                    });
                });
                describe("should find ? to be 0 | midpoint = (1;1), point 1 = (2;0), point 2 = (?;2)", function () {
                    let z = i.Line.findPtFromMidpt(
                        line3.start,
                        new i.Point(1, 1),
                        undefined,
                        2
                    );

                    it("should have the correct point stored in fResult", function () {
                        expect(JSON.stringify(z.pt)).to.be(
                            JSON.stringify(line3.end)
                        );
                    });
                    it("should have the correct line stored in fResult", function () {
                        expect(JSON.stringify(z.line)).to.be(
                            JSON.stringify(line3)
                        );
                    });
                });
            });
        });
        describe;
    });
});
