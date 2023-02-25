const nextPrime = (n) =>  {
  let prime = n + 1;
	while (!isPrime(prime)) {
		prime++;
	}
	return prime;
}

const isPrime = (n) =>  {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

module.exports = {nextPrime, isPrime}
