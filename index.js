/* 
 * Dividde x into y : z
 *
 * y + z = a
 *
 * (y/a) * x = q
 * (z/a) * x = w
 *
 * q + w = x
 */
const pf = require('./libmath/primeFactorization.js')
const cf = require('./libmath/concentrateFactors.js')


function DinRatio(x, y, z) {
	var a = parseFloat(y) + parseFloat(z)
	var ans = []

	var q = ( parseFloat(y) / a ) * parseFloat(x)
	ans.push(q)
	var w = ( parseFloat(z) / a ) * parseFloat(x)
	ans.push(w)

	return ans
}

function primeFactorization(num, concFactors) {
	let primeFactors = [];
	let prime = 2;
	while (num > 1) {
		while (num % prime === 0) {
			primeFactors.push(prime);
			num = num /prime;
		}
		prime = pf.nextPrime(prime);
	}

	if ( concFactors === false ) {
		return primeFactors
	} else if ( concFactors === true ) {
		return cf.concFact(primeFactors)
	} else if ( concFactors === undefined )  {
		return primeFactors
	} else {
		console.error("wtf")
	}
}

console.log(primeFactorization(3))
console.log(primeFactorization(9) //)
console.log(primeFactorization(93928893))

