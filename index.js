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


function DinRatio(x, y, z) {
	var a = parseFloat(y) + parseFloat(z)
	var ans = []

	var q = ( parseFloat(y) / a ) * parseFloat(x)
	ans.push(q)
	var w = ( parseFloat(z) / a ) * parseFloat(x)
	ans.push(w)

	return ans
}

function primeFactorization(num) {
	let primeFactors = [];
	let prime = 2;
	while (num > 1) {
		while (num % prime === 0) {
			primeFactors.push(prime);
			num = num /prime;
		}
		prime = pf.nextPrime(prime);
	}
	return primeFactors;
}

console.log(primeFactorization(50))

