/* Find the Prime Factorization
              Input: N = 84
              Output: [2,2,3,7]
 */

function getPrimeFactorization(n = 84) {
  let primeFactors = [];
  while (n % 2 == 0) {
    primeFactors.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      primeFactors.push(i);
      n = n / i;
    }
  }

  if (n > 1) {
    primeFactors.push(n);
  }

  return primeFactors;
}

console.log(getPrimeFactorization());
