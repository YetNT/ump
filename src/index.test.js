/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const i = require("./index");
const { Volume, Area, Distance, Data } = require("./index");
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
            expect(i.GeometricPatternrimeFactorize).to.be.a("function");
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
                var ans = i.LinearPattern.findN(10, 30, 50);
                expect(ans).to.be.eql("10 + (n - 1) * 20");
            });
            it("should find term number 3", function () {
                var ans = i.LinearPattern.findTerm(3, 20, 10);
                expect(ans).to.be.eql(50);
            });
        });
    });
    describe("Geometric Patterns", function () {
        describe("#GeometricPattern", function () {
            it("should expose an object", function () {
                expect(i.GeometricPattern).to.be.an("object");
            });
            it("should find Nth term of pattern 1, 4, 16", function () {
                let ans = i.GeometricPattern.findN(1, 4, 16);
                expect(ans).to.be.eql("1 * 4^(n - 1)");
            });
            it("should find term number 3", function () {
                let ans = i.GeometricPattern.findTerm(3, 1, 4);
                expect(ans).to.be.eql(16);
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

describe("Enums", function () {
    describe("#Volume", function () {
        it("should be an object", function () {
            expect(Volume).to.be.an("object");
        });
    });

    describe("#Area", function () {
        it("should be an object", function () {
            expect(Area).to.be.a("object");
        });
    });

    describe("#Distance", function () {
        it("should be an object", function () {
            expect(Distance).to.be.a("object");
        });
    });

    describe("#Data", function () {
        it("should be an object", function () {
            expect(Data).to.be.a("object");
        });
    });
});
