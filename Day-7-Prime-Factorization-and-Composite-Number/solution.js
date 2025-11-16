/* Find the Prime Factorization
              Input: N = 84
              Output: [2,2,3,7]
 */

function getPrimeFactorization(n = 2) {
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

/* Factorization in Exponent From:
           Input: N = 360
           Output: "2^3 * 3^2 * 5^1"
 */

function getExponentPrimeFactorization(n = 8321900000) {
  let factorsFreq = {};
  while (n % 2 == 0) {
    factorsFreq[2] = (factorsFreq[2] || 0) + 1;

    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factorsFreq[i] = (factorsFreq[i] || 0) + 1;
      n = n / i;
    }
  }

  if (n > 1) {
    factorsFreq[n] = 1;
  }

  let factors = '';

  for (const key in factorsFreq) {
    factors += ` * ${key}^${factorsFreq[key]}`;
  }

  return { factors: factors.slice(3) };
}

console.log(getExponentPrimeFactorization());

/* Distinct Prime Factor Count:
     Input: N = 100
     Output: Distinct Prime Factors = 2 (because 100 -> 2,5)
*/

function getDistinctPrimeFactorCount(n = 100) {
  let factorsFreq = {};
  while (n % 2 == 0) {
    factorsFreq[2] = (factorsFreq[2] || 0) + 1;

    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factorsFreq[i] = (factorsFreq[i] || 0) + 1;
      n = n / i;
    }
  }

  if (n > 1) {
    factorsFreq[n] = 1;
  }

  return { count: Object.keys(factorsFreq).length };
}

console.log(getDistinctPrimeFactorCount());

/* Check if a Number is a Powerful Number:
A number is powerful if every prime factor appears with an exponent>=2
 
               Input: N = 36
               Output: Powerful Number (36-> 2^2*3^2 -> all exponents>=2)

*/

function isPowerfulNumber(n = 180) {
  let nCopy = n;
  let factorsFreq = {};
  while (n % 2 == 0) {
    factorsFreq[2] = (factorsFreq[2] || 0) + 1;

    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factorsFreq[i] = (factorsFreq[i] || 0) + 1;
      n = n / i;
    }
  }

  if (n > 1) {
    factorsFreq[n] = 1;
  }

  return Math.min(Object.values(factorsFreq)) >= 2
    ? `${nCopy} is powerful nCopyumber`
    : `${nCopy} is not a powerful number`;
}

console.log(isPowerfulNumber());
