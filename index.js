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
const cf = require('./libmath/concentrateFactors.js');
const dist = require('./libmath/def/distance.json')
const convTable = require('./libmath/conversionTable.js')

const DinRatio = (x, y, z) =>  {
	var a = parseFloat(y) + parseFloat(z)
	var ans = []

	var q = ( parseFloat(y) / a ) * parseFloat(x)
	if (  /[.]/.test(q) === true  ) {
		q = q.toFixed(2)
		ans.push(q)
	} else {
		ans.push(q)
	}

	var w = ( parseFloat(z) / a ) * parseFloat(x)
	if ( /[.]/.test(w) === true  ) {
		w = w.toFixed(2)
		ans.push(w)
	} else {
		ans.push(w)
	}

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
		var mult = parseFloat(z) / parseFloat(x)
		var ans = parseFloat(y) * parseFloat(mult)
	} else if ( which === false || which === undefined || which === null ) {
		var mult = parseFloat(y) / parseFloat(z)
		var ans = parseFloat(x) / parseFloat(mult)
	}

	return ans
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
		console.error("wtf, last parameter is not a boolean")
	}
}

const ConvDist = (input, ext, toExt) => {
	var out
	switch (toExt) {
		case "nm":
		case "nanometre":
		case "nanometer":
			out = convTable.toNM(input, ext)
			return out
			break;
		case "µ":
		case "micrometre":
		case "micrometer":
			out = convTable.toMicroM(input, ext)
			return out
			break;
	}
}

module.exports = {DinRatio, PropRatio, PrimeFactorize, ConvDist}

