const i = require('./index.js');

test('Divides 500 into the ratio of 3:2, = [300, 200]', () => {
	expect(i.DinRatio(500, 3, 2)).toStrictEqual([300, 200])
})

test('Gives the prime factors of 5000, which should be [2, 2, 2, 5, 5, 5, 5]', () => {
	expect(i.PrimeFactorize(5000)).toStrictEqual([2, 2, 2, 5, 5, 5, 5])
})

test('Divides x by z, and multiplies that by y. (x=2. y=4, 6=z) (which? = true) = 12', () => {
	expect(i.PropRatio(2, 4, 6, true)).toStrictEqual(12)
})

test('Converts 1 nautical-mile to nanometre, = 1852000000000', () => {
	expect(i.ConvDist(1, "nautical-mile", "nanometre")).toStrictEqual(1852000000000)
})
