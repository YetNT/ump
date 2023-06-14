/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const i = require("./index");
const { Volume, Area, Distance, Data } = require("./index");
const expect = require("expect.js");

describe("Divide In Ratio", function () {
    describe("#DinRatio()", function () {
        it("should expose a function", function () {
            expect(i.DinRatio).to.be.a("function");
        });

        it("should Divide 500 into the ratio of 3:2, returning [300, 200]", function () {
            var ans = i.DinRatio(500, 3, 2);
            expect(ans).to.eql([300, 200]);
        });
    });
});

describe("Prime Factorization", function () {
    describe("#PrimeFactorize", function () {
        it("should expose a function", function () {
            expect(i.PrimeFactorize).to.be.a("function");
        });

        it("should give the prime factors of 5000, returning [2, 2, 2, 5, 5, 5, 5]", function () {
            var ans = i.PrimeFactorize(5000);
            expect(ans).to.eql([2, 2, 2, 5, 5, 5, 5]);
        });
    });
});

describe("Propertional Ratios", function () {
    describe("#PropRatio", function () {
        it("should expose a function", function () {
            expect(i.PropRatio).to.be.a("function");
        });

        it("should divide x by z, multiplying that by y (x=2, y=4, 6=z, which?=true) = 12", function () {
            var ans = i.PropRatio(2, 4, 6, true);
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
                    var ans = i.Convert.Distance;
                    expect(ans).to.be.a("function");
                });
            });
            it("should convert 1 nautical-mile to nanometre = 1852000000000", function () {
                var ans = i.Convert.Distance(1, "nautical-mile", "nanometer");
                expect(ans).to.eql(1852000000000);
            });
        });

        describe("Area", function () {
            describe("#Convert.Area", function () {
                it("should expose a function", function () {
                    var ans = i.Convert.Area;
                    expect(ans).to.be.a("function");
                });
            });
            it("should convert 1 square-centimeter to square-inch = 0.15500031000062", function () {
                var ans = i.Convert.Area(1, "square-centimeter", "square-inch");
                expect(ans).to.eql(0.15500031000062);
            });
        });

        describe("Volume", function () {
            describe("#Convert.Volume", function () {
                it("should expose a function", function () {
                    var ans = i.Convert.Volume;
                    expect(ans).to.be.a("function");
                });
            });
            it("should conevrt 1 cubic metre to cubic centimetre = 1000000", function () {
                var ans = i.Convert.Volume(
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
                    var ans = i.Convert.Temp;
                    expect(ans).to.be.a("function");
                });
            });

            describe("Fahrenheit", function () {
                it("should convert 1 Fahrenheit to Celsius", function () {
                    var ans = i.Convert.Temp(1, "F", "C");
                    expect(ans).to.eql(-17.22222222222222);
                });
                it("should convert 1 Fahrenheit to Kelvin", function () {
                    var ans = i.Convert.Temp(1, "F", "K");
                    expect(ans).to.eql(255.92777777777775);
                });
            });

            describe("Celsius", function () {
                it("should convert 1 Celsius to Fahrenheit", function () {
                    var ans = i.Convert.Temp(1, "C", "F");
                    expect(ans).to.eql(33.8);
                });
                it("should convert 1 Celsius to Kelvin", function () {
                    var ans = i.Convert.Temp(1, "C", "K");
                    expect(ans).to.eql(274.15);
                });
            });

            describe("Kelvin", function () {
                it("should convert 1 Kelvin to Celsius", function () {
                    var ans = i.Convert.Temp(1, "K", "C");
                    expect(ans).to.eql(-272.15);
                });
                it("should convert 1 Kelvin to Fahrenheit", function () {
                    var ans = i.Convert.Temp(1, "K", "F");
                    expect(ans).to.eql(-457.87);
                });
            });
        });

        describe("Data", function () {
            describe("#Convert.Data", function () {
                it("should expose an function", function () {
                    expect(i.Convert.Data).to.be.a("function");
                });
            });

            it("should convert 1 Terabyte to Bits", function () {
                var ans = i.Convert.Data(1, "terabyte", "bit");
                expect(ans).to.be.eql(8000000000000);
            });

            it("should convert 1 Bit to Terabytes", function () {
                var ans = i.Convert.Data(1, "bit", "terabyte");
                expect(ans).to.be.eql(1.25e-13);
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
