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
	const distance = ["nanometre", "nanometer", "nm", "micrometre", "micrometer", "millimetre", "millimeter", "mm", "centimeter", "centimetre", "cm", "meter", "metre", "m", "kilometer", "kilometre", "km", "nautical-mile", "nmi", "inch", "foot", "ft", "yard", "yd", "mile", "mi"]
	const area = ["square-centimetre", "square-centimeter", "centimeter-square", "centimetre-square", "cm2", "2cm", "square-foot", "square-feet", "foot-square", "feet-square", "ft2", "2ft", "square-inch", "inch-square", "inch2", "2inch", "in2", "2in", "square-meter", "square-metre", "meter-square", "metre-square", "m2", "2m", "acre", "a", "hectare", "ha"]
	const volume = ["milliliter", "millilitre", "ml", "centilitre", "centiiter", "cl", "deciliter", "decilitre", "dl", "liter", "litre", "l", "kiloliter", "kilolitre", "kl", "decalitre", "decaliter", "dal", "hectoliter", "hectolitre", "hl", "cubic-millimeter", "cubic-millimetre", "3mm", "mm3", "cubic-centimetre", "cubic-centimeter", "3cm", "cm3", "cubic-meter", "cubic-metre", "m3", "3m", "cubic-inch", "3in", "in3", "3inch", "inch3", "fluid-ounce", "floz", "gill", "pint", "pt", "quart", "qt", "gallon", "gl"]
	if (!fromFactor || !toFactor) {
		return `invalid from/to Unit, ${fromUnit} or ${toUnit} is not a valid unit.`;
	}

	if (unit !== "dist" && unit !== "area" && unit !== "vol") {
		return "invalid unit. unit must be either 'dist', 'area' or 'vol'"
	} else if ( ( unit === "area" && ( !area.includes(fromUnit) || !area.includes(toUnit) ) ) || ( unit === "dist" && ( !distance.includes(fromUnit) || !distance.includes(toUnit) ) ) || (unit === "vol" && ( !volume.includes(fromUnit) || !volume.includes(toUnit)  ) )  ) {
		return `unit parameter is not equal to it's units of conversion. ${fromUnit} and ${toUnit}`;
	} else {
		return n * fromFactor / toFactor
	}
}

const ConvTemp = (n, from, to) => {
	const units = ["K", "F", "C", "Kelvin", "Fahrenheit", "Celsius", "kelvin", "celsius", "fahrenheit", "k", "f", "c"]
	if ( !units.includes(from) || !units.includes(to) ) {
		console.log("error")
	}

	if (from === "K" || from === "Kelvin" || from === "kelvin" || from === "k") {
		switch(to) {
			case "Celsius":
			case "celsius":
			case "C":
			case "c":
				return n - 273.15
				break;
			case "Fahrenheit":
			case "fahrenheit":
			case "F":
			case "f":
				return (n - 273.15) * 9/5 + 32
				break;
		}
	} else if (from === "C" || from === "Celsius" || from === "celsius" || from === "c") {
		switch(to) {
			case "Kelvin":
			case "kelvin":
			case "K":
			case "k":
				return n + 273.15
				break;
			case "Fahrenheit":
			case "fahrenheit":
			case "F":
			case "f":
				return (n * 9/5) + 32
				break;
		}
	} else if ( from === "Fahrenheit" || from === "fahrenheit" || from === "F" || from === "f") {
		switch(to) {
			case "Celsius":
			case "celsius":
			case "C":
			case "c":
				return (n - 32) * 5/9
				break;
			case "Kelvin":
			case "kelvin":
			case "K":
			case "k":
				return (n - 32) * 5/9 + 273.15
				break;
		}
	}
}

module.exports = {DinRatio, PropRatio, PrimeFactorize, ConvUnit, ConvTemp}

