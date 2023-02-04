const concFact = (arr) => {
	let result = [];
	let count = {};

	for (let i = 0; i < arr.length; i++) {
		if (!count[arr[i]]) {
			count[arr[i]] = 1;
		} else {
			count[arr[i]]++;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (count[arr[i]] === 1) {
			result.push(arr[i]);
		} else if (count[arr[i]] > 1) {
			result.push();
			count[arr[i]] = 0;
		}
	}

	return result;
}

module.exports = {concFact}
