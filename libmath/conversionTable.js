// See /ump/libmath/def/distance.json.
const toNM = (n, ext) => {
	switch(ext){
		case "mm":
		case "milimeter":
		case "milimetre":
			var ans = n / 100000;
			return ans
			break;
		case "µ":
		case "micrometer":
		case "micrometre":
			var ans = n / 1000;
			return ans
			break;
		case "cm":
		case "centimeter":
		case "centimetre":
			var ans = n / 1000000;
			return ans
			break;
		case "m":
		case "meter":
		case "metre":
			var ans = n / 100000000;
			return ans
			break;
		case "km":
		case "kilometer":
		case "kilometre":
			var ans = n / 100000000000;
			return ans
			break;

		case "nmi":
		case "nautical-mile":
		case "nauticalmile":
			var ans = n / 1852000000000;
			return ans
			break;
		case "″": // inch but it's the real symbol
		case "inch":
		case `"`: // this one is just the double quote, it's not the unit symbol for inch, (u+2033 = ″). Stay in school kids
			var ans = n / 25400000;
			return ans
			break;
		case "ft":
		case "foot":
			var ans = n / 304800000;
			return ans
			break;
		case "yd":
		case "yard":
			var ans = n / 914400000;
			return ans
			break;
		case "mi":
		case "mile":
			var ans = n / 1609000000000;
			return ans
			break;
		default:
			return "how did you get this"
	}
}

const toMicroM = (n, ext) => {
	switch(ext){
		case "nm":
		case "nanometre":
		case "nanometer":
			var ans = n * 1000;
			return ans
			break;
		case "mm":
		case "milimeter":
		case "milimetre":
			var ans = n / 1000;
			return ans
			break;
		case "cm":
		case "centimeter":
		case "centimeter":
			var ans = n / 10000
			return ans
			break;
		case "m":
		case "meter":
		case "metre":
			var ans = n / 1000000;
			return ans
			break;
		case "km":
		case "kilometer":
		case "kilometre":
			var ans = n / 1000000000;
			return ans
			break;
		case "nmi":
		case "nautical-mile":
			var ans = n * 1852;
			return ans
			break;
		case "″": // inch but it's the real symbol
		case '"': //
		case "inch":
			var ans = n / 25400;
			return ans
			break;
		case "ft":
		case "foot":
			var ans = n / 304800;
			return ans
			break;
		case "yd":
		case "yard":
			var ans = n / 914400;
			return ans
			break;
		case "mi":
		case "mile":
			var ans = n / 1609000;
			return ans
			break;
		default:
			return "how did you get this"

	}
}
module.exports = {toNM, toMicroM}
