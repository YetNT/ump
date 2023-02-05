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


const DinRatio = (x, y, z) =>  {
	var a = parseFloat(y) + parseFloat(z)
	var ans = []

	var q = ( parseFloat(y) / a ) * parseFloat(x)
	ans.push(q)
	var w = ( parseFloat(z) / a ) * parseFloat(x)
	ans.push(w)

	return ans
}

const PropRatio = (x, y, z, which) => {
	// if which == false
	//
	// x : y
	// ? : z
	// ----------------
	// if which == true
	//
	// x : y
	// z : ?
	
	if ( which === true ) {
		var mult = parseFloar(z) / parseFloat(x)
		var ans = parseFloat(y) * parseFloat(mult)
	}
}

const PrimeFactorize = (num, concFactors) => {
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

module.exports = {DinRatio, PropRatio, PrimeFactorize}

