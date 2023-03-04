const pf = require('./libmath/primeFactorization.js');
const conversionFactors = require('./libmath/convTable.json');

const DinRatio = (x, y, z, round = false) =>  {
    var a = parseFloat(y) + parseFloat(z)
    var ans = []

    var q = ( parseFloat(y) / a ) * parseFloat(x)
    if (  /[.]/.test(q) === true  ) {
        q = round ? q.toFixed(2) : q
        ans.push(parseFloat(q))
    } else {
        ans.push(q)
    }

    var w = ( parseFloat(z) / a ) * parseFloat(x)
    if ( /[.]/.test(w) === true  ) {
        w = round ? w.toFixed(2) : w
        ans.push(parseFloat(w))
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

const PrimeFactorize = (num) => {
	let primeFactors = [];
	let prime = 2;

	while (num > 1) {
		while (num % prime === 0) {
			primeFactors.push(prime);
			num = num /prime;
		}
		prime = pf.nextPrime(prime);
	}
	
	return primeFactors
}

const ConvUnit = (unit, n, fromUnit, toUnit) => {
	const fromFactor = conversionFactors[fromUnit];
	const toFactor = conversionFactors[toUnit];
	const distance = ["nanomatre", "nanometer", "nm", "micrometre", "micrometer", "millimetre", "millimeter", "mm", "centimeter", "centimetre", "cm", "meter", "metre", "m", "kilometre", "kilometre", "km", "nautical-mile", "nmi", "inch", "foot", "ft", "yard", "yd", "mile", "mi"]
	const area = ["square-centimetre", "square-centimeter", "centimeter-square", "centimetre-square", "cm2", "2cm", "square-foot", "square-feet", "foot-square", "feet-square", "ft2", "2ft", "square-inch", "inch-square", "inch2", "2inch", "in2", "2in", "square-meter", "square-metre", "meter-square", "metre-square", "m2", "2m", "acre", "a", "hectare", "ha"]
	if (!fromFactor || !toFactor) {
		return "invalid unit?";
	}

	if (unit !== "dist" && unit !== "area") {
		return "invalid unit"
	} else if ( ( unit === "area" && ( distance.includes(fromUnit) || distance.includes(toUnit) ) ) || ( unit === "dist" && ( area.includes(fromUnit) || area.includes(toUnit) ) ) ) {
		return `unit parameter is not equal to it's units of conversion. ${fromUnit} and ${toUnit}`;
	} else {
		return n * fromFactor / toFactor
	}
}
module.exports = {DinRatio, PropRatio, PrimeFactorize, ConvUnit}

