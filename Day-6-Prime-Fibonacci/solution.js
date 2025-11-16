/***********************************************************
                 Check if a Number is Prime
    Input: 7
    Output: Prime Number
    
    Why loop runs up to square root?
    If a number has a divisor greater than its square root,
    it MUST also have a corresponding divisor smaller than 
    its square root.
***********************************************************/

function isPrime(n = 7) {
  if (n <= 1) return { result: `${n} is not a prime number` };

  for (let i = 2; i ** 2 <= n; i++) {
    if (n % i === 0) return { result: `${n} is not a prime number` };
  }
  return { result: `${n} is prime number` };
}

console.log(isPrime());

/***********************************************************
             Check if Two Numbers are Co-prime
    Input: (7, 8)
    Output: Co-Prime
    
    Any two natural numbers that share no common factors 
    other than 1 are co-prime.
***********************************************************/

function isCoPrimeNumber(a = 7, b = 8) {
  let divisor = a < b ? a : b;
  let dividend = b > a ? b : a;

  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return divisor === 1
    ? { result: `${a} and ${b} are co-prime number` }
    : { result: `${a} and ${b} are not co-prime number` };
}

console.log(isCoPrimeNumber());

/***********************************************************
          Print Fibonacci Series Up to N Terms
    Input: N = 10
    Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    
    The Fibonacci sequence is a series of numbers where 
    each number is the sum of the two preceding ones.
***********************************************************/

function createFibonacciSeries(n = 9) {
  let fiboSeries = [0n, 1n];
  for (let i = 2n; i < BigInt(n); i++) {
    fiboSeries.push(fiboSeries[i - 2n] + fiboSeries[i - 1n]);
  }
  return fiboSeries;
}

console.log(createFibonacciSeries());

/***********************************************************
               Find the Nth Fibonacci Number
    Input: N = 8
    Output: 13
    
    Return the Nth number in the Fibonacci sequence 
    (1-indexed).
***********************************************************/

function getNthFibonacciNumber(n = 8) {
  let fiboSeries = [0n, 1n];
  for (let i = 2n; i < BigInt(n); i++) {
    fiboSeries.push(fiboSeries[i - 2n] + fiboSeries[i - 1n]);
  }
  console.log({ fiboSeries });
  return fiboSeries[n - 1];
}

console.log(getNthFibonacciNumber());

/***********************************************************
      Check if a Number Belongs to the Fibonacci Series
    Input: 21
    Output: Yes
    
    Determine whether the given number exists in the 
    Fibonacci sequence.
***********************************************************/

function isBelongToFibonacci(n = 0) {
  n = BigInt(n);
  let fiboSeries = [0n, 1n];

  for (let i = 2n; true; i++) {
    let fiboNum = fiboSeries[i - 2n] + fiboSeries[i - 1n];
    if (fiboNum === n || n === 0n) return true;
    if (fiboNum > n) return false;
    fiboSeries.push(fiboNum);
  }
}

console.log(isBelongToFibonacci());

/***********************************************************
              Print All Prime Numbers Up to N
    Input: N = 20
    Output: 2, 3, 5, 7, 11, 13, 17, 19
    
    Use Sieve of Eratosthenes algorithm to find all 
    prime numbers less than N.
***********************************************************/

function getAllPrimeUptoN(n = 20) {
  const isPrime = new Array(n).fill(true);
  const primeSeries = [];
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primeSeries.push(i);
      for (let j = i * 2; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return primeSeries;
}

console.log(getAllPrimeUptoN());

/***********************************************************
              Sum of All Prime Numbers till N
    Input: N = 10
    Output: Sum = 17 (2 + 3 + 5 + 7)
    
    Find the sum of all prime numbers less than N using 
    Sieve of Eratosthenes.
***********************************************************/

function checkPrimeSum(n = 20) {
  const isPrime = new Array(n).fill(true);
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      sum += i;
      for (let j = i * 2; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return { sum };
}

console.log(checkPrimeSum());

/***********************************************************
           Check if Two Numbers are Twin Primes
    Input: (3, 5)
    Output: Twin Primes
    
    Twin primes are a pair of prime numbers that have a 
    difference of exactly 2.
    Examples: (3,5), (5,7), (11,13), (17,19)
***********************************************************/

function isTwinPrime(a = 8, b = 10) {
  const largerNum = a > b ? a : b;
  let primeNum = [];
  const isPrime = new Array(largerNum + 1).fill(true);
  for (let i = 2; i <= largerNum; i++) {
    if (isPrime[i]) {
      if (i === a || i === b) {
        primeNum.push(i);
      }
      for (let j = i * 2; j <= largerNum; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return primeNum.length === 2 && Math.abs(primeNum[1] - primeNum[0]) == 2
    ? { result: `(${a}, ${b}) are Twin Primes` }
    : { result: `(${a}, ${b}) are not Twin Primes` };
}

console.log(isTwinPrime());

/***********************************************************
         Generate Fibonacci Numbers Within a Range
    Input: Start = 10, End = 100
    Output: 13, 21, 34, 55, 89
    
    Find all Fibonacci numbers that fall within the given 
    range [Start, End).
***********************************************************/

function generateFibonacciRange(start = 10, end = 100) {
  const rangeSeries = [];
  let a = 0,
    b = 1;

  while (b < end) {
    if (b > start) {
      rangeSeries.push(b);
    }
    [a, b] = [b, a + b];
  }

  return rangeSeries.length > 0
    ? rangeSeries
    : { result: `No Fibonacci numbers exist within range (${start}, ${end})` };
}

console.log(generateFibonacciRange());

/***********************************************************
         Find the Sum of Even Fibonacci Numbers Up to N
    Input: N = 10
    Output: Sum = 44 (0 + 2 + 8 + 34)
    
    Generate first N Fibonacci numbers and sum only the 
    even ones.
***********************************************************/

function sumOfEvenFibonacci(n = 10) {
  let fiboSeries = [0, 1];
  let sum = 0;
  for (let i = 2; i < n; i++) {
    let fiboSum = fiboSeries[i - 2] + fiboSeries[i - 1];
    if (fiboSum % 2 == 0) sum += fiboSum;
    fiboSeries.push(fiboSum);
  }
  return sum;
}

console.log(sumOfEvenFibonacci());

/***********************************************************
    Check if the Sum of Two Consecutive Fibonacci 
                    Numbers is Prime
    Input: (5 + 8)
    Output: 13 is Prime
    
    For each pair of consecutive Fibonacci numbers, 
    check if their sum is a prime number.
    
    Why loop runs up to square root?
    If a number has a divisor greater than its square root,
    it MUST also have a corresponding divisor smaller than 
    its square root.
***********************************************************/

function checkIsPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isSumPrime(n = 10) {
  let fiboSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    let currFiboNum = fiboSeries[i - 2] + fiboSeries[i - 1];
    fiboSeries.push(currFiboNum);
    let res = checkIsPrime(currFiboNum)
      ? { result: `sum of (${fiboSeries[i - 2]}, ${fiboSeries[i - 1]}) is prime number` }
      : { result: `sum of (${fiboSeries[i - 2]}, ${fiboSeries[i - 1]}) is not prime number` };
    console.log(res);
  }
}

isSumPrime();

/***********************************************************
             Print First N Prime Fibonacci Numbers
    Input: N = 5
    Output: [2, 3, 5, 13, 89]
    
    Find the first N Fibonacci numbers that are also 
    prime numbers.
***********************************************************/

function isPrimeNum(num) {
  if (num <= 1) return false;
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getFirstNPrimeFibonacci(n = 7) {
  let fiboSeries = [];
  let a = 0;
  let b = 1;
  let count = 0;
  while (count < n) {
    let currFiboNum = a + b;
    if (isPrimeNum(currFiboNum)) {
      fiboSeries.push(currFiboNum);
      count++;
    }
    a = b;
    b = currFiboNum;
  }
  return fiboSeries;
}

console.log(getFirstNPrimeFibonacci());