/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const i = require('./index.js')
const {Volume, Area, Distance} = require('./index.js')
const expect = require('expect.js')

describe('Divide In Ratio', function() {
	describe('#DinRatio()', function() {
        it('should expose a function', function() {
            expect(i.DinRatio).to.be.a('function')
        })

		it('should Divide 500 into the ratio of 3:2, returning [300, 200]', function() {
            var ans = i.DinRatio(500, 3, 2)
			expect(ans).to.eql([300, 200])
		})
	})
})

describe('Prime Factorization', function () {
    describe('#PrimeFactorize', function() {
        it('should expose a function', function() {
            expect(i.PrimeFactorize).to.be.a('function')
        })

        it('should give the prime factors of 5000, returning [2, 2, 2, 5, 5, 5, 5]', function() {
            var ans = i.PrimeFactorize(5000)
            expect(ans).to.eql([2, 2, 2, 5, 5, 5, 5])
        })
    })
})

describe('Propertional Ratios', function () {
    describe('#PropRatio', function() {
        it('should expose a function', function() {
            expect(i.PropRatio).to.be.a('function')
        })

        it('should divide x by z, multiplying that by y (x=2, y=4, 6=z, which?=true) = 12', function() {
            var ans = i.PropRatio(2, 4, 6, true)
            expect(ans).to.eql(12)
        })
    })
})

describe('Conversion of Units', function() {
    describe('#ConvUnit', function() {
        it('should expose a function', function() {
            expect(i.ConvUnit).to.be.a('function')
        })

        describe('Distance', function() {
            it('should convert 1 nautical-mile to nanometre = 1852000000000', function() {
                var ans = i.ConvUnit('dist', 1, 'nautical-mile', 'nanometre')
                expect(ans).to.eql(1852000000000)
            })
        })

        describe('Area', function() {
            it('should convert 1 square-centimetre to square-inch = 0.15500031000062', function() {
                var ans = i.ConvUnit('area', 1,'square-centimetre','square-inch')
                expect(ans).to.eql(0.15500031000062)
            })
        })

        describe('Volume', function() {
            it('should conevrt 1 cubic metre to cubic centimetre = 1000000', function() {
                var ans = i.ConvUnit('vol', 1, 'cubic-metre', 'cubic-centimetre')
                expect(ans).to.eql(1000000)
            })
        })
    })
})

describe('Enums', function () {
    describe('#Volume', function() {
        it('should be an object', function() {
            expect(Volume).to.be.a('object')
        })
    })

    describe('#Area', function() {
        it('should be an object', function() {
            expect(Area).to.be.a('object')
        })
    })

    describe('#Distance', function() {
        it('should be an object', function() {
            expect(Distance).to.be.a('object')
        })
    })
})