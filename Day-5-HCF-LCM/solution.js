/* Print All Factors of a Number:
  100 -> 1 2 4 5 10 20 25 50 100 
  81 -> 1 3 9 27 81

 */

function getAllFactors(n = 27) {
  const factors = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      const secondPair = n / i;
      if (i !== secondPair) factors.splice(factors.length / 2 + 1, 0, secondPair);
    }
  }

  return factors;
}

console.log(getAllFactors());

/* Print All Multiples of a Number up to N:
                Input: Number = 4, Limit = 30;
                Output: [4,8,12,16,20,24,28]
  */

function getMultiples(num = 5, limit = 50) {
  let currMultiple = num;
  let allMultiples = [];
  while (currMultiple <= limit) {
    allMultiples.push(currMultiple);
    currMultiple += num;
  }
  return allMultiples;
}

console.log(getMultiples());

/* Find the HCF/GCD:
   Input: 12, 18
   Output HCF = 6
*/

function getLargestFactor(n = 20, m = 28) {
  if (n === 0 || m === 0) return { n, m, HCF_or_GCD: n || m };
  let min = n < m ? n : m;
  let count = null;
  for (let i = min; i >= 1; i--) {
    console.log({ count: count++ });
    if (n % i == 0 && m % i == 0) return { n, m, HCF_or_GCD: i };
  }
}

function getHCF(n = 20, m = 28) {
  if (n === 0 || m === 0) return { n, m, HCF_or_GCD: n || m };
  let divisor = n < m ? n : m;
  let dividend = m > n ? m : n;

  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return divisor;
}
console.log({ HCF: getHCF() });
// console.log(getLargestFactor());

/* Find the LCM 
      Input: 12, 16
      Output: LCM = 36
*/

function getLCM(n = 12, m = 16) {
  if (n === 0 || m === 0) return { n, m, HCF_or_GCD: n || m };
  let divisor = n < m ? n : m;
  let dividend = m > n ? m : n;

  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return (n * m) / divisor;
}

console.log({ LCM: getLCM() });

/* Count the total number of factors of a number:
                Input: N = 24
                Output: 8 Factors
*/

function getFactorsCount(n = 48) {
  let factorsCount = 0;
  for (let i = 1; i ** 2 < n; i++) {
    if (n % i == 0) {
      factorsCount += 2;
    }
  }
  return { factorsCount };
}

console.log(getFactorsCount());

/* Sum of all factors of a number:
         Input : N = 12
         Output: sum = 28
*/

function getSumOfFactors(n = 12) {
  let totalSumOfFactors = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      totalSumOfFactors += i;
      const secondPair = n / i;
      if (i !== secondPair) totalSumOfFactors += secondPair;
    }
  }

  return { totalSumOfFactors };
}

console.log(getSumOfFactors());

/* Find the greatest factor of a number (Other than itself) */

function getGreatestFactor(n = 100) {
  let greatestFactor = 0;

  for (let i = 1; i ** 2 < n; i++) {
    if (n % i === 0) {
      greatestFactor += i;
      const secondPair = n / i;
      if (i !== secondPair && secondPair !== n) return { greatestFactor: secondPair };
    }
  }
}

console.log(getGreatestFactor());

/* Check if a number is a perfect number:
                Input: N = 28
                Output: Perfect Number
*/

function isPerfectNumber(n = 28) {
  let divisorSum = null;
  for (let i = 1; i ** 2 <= n; i++) {
    if (n % i === 0) {
      divisorSum += i;
      let pairFactor = n / i;
      if (i !== pairFactor && pairFactor !== n) divisorSum += pairFactor;
    }
  }
  return {
    result: divisorSum === n ? `Yes ${n} is perfect Number` : `No ${n} i s not a perfect number`,
  };
}

console.log(isPerfectNumber());

/* Find The HCF and LCM of Three Numbers:
           Input: 8, 12, 16
           Output: HCF = 4, LCM = 48
 */

console.log(getHCF());

function getThreeNumLcmAndHcf(a = 8, b = 12, c = 16) {
  let hcf = getHCF(getHCF(a, b), c);
  let lcm = getLCM(getLCM(a, b), c);

  return { HCF: hcf, LCM: lcm };
}

console.log(getThreeNumLcmAndHcf());
