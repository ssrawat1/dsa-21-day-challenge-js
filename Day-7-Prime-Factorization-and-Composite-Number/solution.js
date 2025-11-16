/* Find the Prime Factorization
              Input: N = 84
              Output: [2,2,3,7]
 */

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrimeFactorization(n = 84) {
  let primeFactors = [];
  if (isPrime(n)) {
    return [n];
  } else {
    let nextFactor = 2;
    while (n > 1) {
      if (n % nextFactor == 0) {
        primeFactors.push(nextFactor);
        n = n / nextFactor;
      } else {
        nextFactor++;
      }
    }
  }
  return primeFactors;
}

console.log(getPrimeFactorization());
