/***********************************************************
                 Print All Factors of a Number
    Input: N = 100
    Output: [1, 2, 4, 5, 10, 20, 25, 50, 100]
    
    Find all numbers that divide evenly into the given number.
    Optimization: Only loop up to √n and add factor pairs.
***********************************************************/

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

/***********************************************************
            Print All Multiples of a Number up to N
    Input: Number = 4, Limit = 30
    Output: [4, 8, 12, 16, 20, 24, 28]
    
    Find all multiples of a given number that do not 
    exceed the specified limit.
***********************************************************/

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

/***********************************************************
                    Find the HCF/GCD
    Input: 12, 18
    Output: HCF = 6
    
    HCF (Highest Common Factor) or GCD (Greatest Common Divisor)
    is the largest number that divides both numbers evenly.
    
    Uses Euclidean Algorithm:
    - Repeatedly replace larger number with remainder
    - Continue until remainder is 0
***********************************************************/

function getLargestFactor(n = 20, m = 28) {
  if (n === 0 || m === 0) return { n, m, HCF_or_GCD: n || m };
  let min = n < m ? n : m;
  for (let i = min; i >= 1; i--) {
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

/***********************************************************
                      Find the LCM
    Input: 12, 16
    Output: LCM = 48
    
    LCM (Least Common Multiple) is the smallest number 
    that is a multiple of both numbers.
    
    Formula: LCM(a, b) = (a × b) / GCD(a, b)
***********************************************************/

function getLCM(n = 12, m = 16) {
  if (n === 0 || m === 0) return { n, m, LCM: n || m };
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

/***********************************************************
            Count the Total Number of Factors
    Input: N = 24
    Output: 8 Factors
    
    Count how many divisors a number has.
    
    Optimization: Loop only up to √n
    - If i is a factor, both i and n/i are factors
    - Special case: If i² = n, count only once
***********************************************************/

function getFactorsCount(n = 48) {
  let factorsCount = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      if (i * i === n) {
        factorsCount += 1;  // Perfect square: count once
      } else {
        factorsCount += 2;  // Count both i and n/i
      }
    }
  }
  return { factorsCount };
}

console.log(getFactorsCount());

/***********************************************************
                 Sum of All Factors of a Number
    Input: N = 12
    Output: Sum = 28 (1 + 2 + 3 + 4 + 6 + 12)
    
    Calculate the total sum of all divisors of a number.
    
    Optimization: Loop only up to √n and add both factors.
***********************************************************/

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

/***********************************************************
      Find the Greatest Factor of a Number (Other than Itself)
    Input: N = 100
    Output: 50
    
    Find the largest divisor of a number excluding 
    the number itself.
***********************************************************/

function getGreatestFactor(n = 100) {
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    if (n % i === 0) {
      return { greatestFactor: i };
    }
  }
  return { greatestFactor: 1 };
}

console.log(getGreatestFactor());

/***********************************************************
              Check if a Number is a Perfect Number
    Input: N = 28
    Output: Perfect Number
    
    28 = 1 + 2 + 4 + 7 + 14 (sum of proper divisors)
    
    A perfect number is equal to the sum of its proper 
    divisors (all divisors except the number itself).
    Examples: 6 (1+2+3), 28 (1+2+4+7+14), 496, 8128
***********************************************************/

function isPerfectNumber(n = 28) {
  let divisorSum = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisorSum += i;
      let pairFactor = n / i;
      if (i !== pairFactor && pairFactor !== n) divisorSum += pairFactor;
    }
  }
  return {
    result: divisorSum === n 
      ? `Yes, ${n} is a Perfect Number` 
      : `No, ${n} is not a Perfect Number`,
  };
}

console.log(isPerfectNumber());

/***********************************************************
            Find HCF and LCM of Three Numbers
    Input: 8, 12, 16
    Output: HCF = 4, LCM = 48
    
    For three numbers:
    - HCF(a, b, c) = HCF(HCF(a, b), c)
    - LCM(a, b, c) = LCM(LCM(a, b), c)
    
    First find HCF/LCM of first two, then with the third.
***********************************************************/

function getThreeNumLcmAndHcf(a = 8, b = 12, c = 16) {
  let hcf = getHCF(getHCF(a, b), c);
  let lcm = getLCM(getLCM(a, b), c);

  return { HCF: hcf, LCM: lcm };
}

console.log(getThreeNumLcmAndHcf());