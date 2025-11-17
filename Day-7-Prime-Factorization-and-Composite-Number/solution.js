/* Find the Prime Factorization
              Input: N = 84
              Output: [2,2,3,7]
(it is guaranteed that every integer greater than 1 has a unique prime factorization)
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

/* Find The Product of All Distinct Prime Factors:
                  Input: N = 150
                  Output: Product = 2 * 3 * 5 = 30
  */

function getProduct(n = 150) {
  let product = 1;

  if (n % 2 == 0) {
    product *= 2;
    while (n % 2 == 0) {
      n = n / 2;
    }
  }

  for (let i = 3; i ** 2 <= n; i += 2) {
    if (n % i == 0) {
      product *= i;
      while (n % i == 0) {
        n = n / i;
      }
    }
  }

  if (n > 1) product *= n;

  return product;
}

console.log(getProduct());

/* Check if a Number is a Square-Free Number:
A number is square free if none of its prime factors repeat
             Input: N = 30
             Output: Square-free number (2*3*5 -> no repeats)
 */

function isSquareFreeNumber(n = 20) {
  let nCopy = n;

  if (n % 2 == 0) {
    n /= 2;
    if (n % 2 == 0) return `${nCopy} is not a square-free number`;
  }

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i == 0) {
      n /= i;
      if (n % i == 0) return `${nCopy} is not a square-free number`;
    }
  }

  return `${nCopy} is square-free number`;
}

console.log(isSquareFreeNumber());

/* Check if a Number is a Smith Number:
 A composite number whose sum of digits = sum of digits of prime factors
              Input: N = 666
              Output: Smith Number
 */

function isCompositeNumber(num) {
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i == 0) return true;
  }
  return false;
}

function getDigitsSum(num, sum) {
  while (num !== 0) {
    digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit;
  }
  return sum;
}

function isSmithNumber(n = 666) {
  let nCopy = n;
  if (isCompositeNumber(n)) {
    let sum = 0;
    sum = getDigitsSum(n, sum);

    let factorsSum = 0;

    while (nCopy % 2 == 0) {
      factorsSum += 2;
      nCopy = nCopy / 2;
    }

    for (let i = 3; i ** 2 <= nCopy; i += 2) {
      while (nCopy % i == 0) {
        if (i >= 10) {
          let iCopy = i;
          factorsSum = getDigitsSum(iCopy, factorsSum);
        } else {
          factorsSum += i;
        }
        nCopy = nCopy / i;
      }
    }

    if (nCopy > 1) {
      factorsSum = getDigitsSum(nCopy, factorsSum);
    }
    return sum === factorsSum
      ? `Given number is smith number`
      : `Given number is not a smith number`;
  }
  return `Given number is not a smith number`;
}

console.log(isSmithNumber());

/* 
Check if a Number is an Ugly Number:
      ->   Input: N = 18
           Output: Not Ugly (Because 18 -> 2 * 3 * 3 -> allowed )
      ->   Input: N = 14
           Output: Not Ugly (Contains 7)

Note -> (An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5)

 */

function isUglyNumber(n) {
  if (n <= 0) return false;

  for (let f of [2, 3, 5]) {
    while (n % f === 0) {
      n /= f;
    }
  }

  return n > 1 ? 'Given number is not a Ugly Number' : 'Given number is Ugly Number';
}

console.log(isUglyNumber());

/* Check if a Number is a Kaprekar Number
Square the number -> split -> sum should give the original number
                  Input: N = 45
                  Output: Kaprekar Number (45^2 = 2025 -> 20 + 25 = 45)
 */

function isKaprekarNumber(n = 9) {
  if (n === 1) return `${n} is Kaprekar number`;

  let sq = n ** 2;
  let pow = 1;

  while (pow <= sq) {
    let right = sq % pow;
    let left = Math.floor(sq / pow);
    console.log({ right, left });

    if (right > 0 && left + right === n) {
      return `${n} is Kaprekar number`;
    }

    pow *= 10;
  }

  return `${n} is not a Kaprekar number`;
}

console.log(isKaprekarNumber(2));

/* Check if a number is a Happy Number:
Repeatedly replace the number with the sum of squares of its digits. if a becomes 1. it is happy.
           Input: N = 19
           Output: Happy Number
*/

function isHappyNumber(num = 4) {
  let numCopy = num;
  let seen = new Set();

  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }

    num = sum;
  }

  return num === 1 ? `${numCopy} is Happy Number` : `${numCopy} is not a Happy Number`;
}

console.log(isHappyNumber(num));
