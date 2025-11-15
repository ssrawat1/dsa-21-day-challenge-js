/* Check if a Number is Prime:
             Input: 7
             Output: Prime Number
 */

function isPrime(n = 7) {
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) return { result: `${n} is not a prime number` };
  }
  return { result: `${n} is prime number` };
}

console.log(isPrime());

/* Check if two Numbers are Co-prime
          Input: (7,8)
          Output: Co-Prime
(any two natural numbers that share no common factors other than 1)
*/

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

/* Print Fibonacci Series Up to N Terms:
             Input: N = 10;
             Output: 0, 1, 2, 3, 5, 8, 13, 21, 34
 */

function createFibonacciSeries(n = 10) {
  let fiboSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fiboSeries.push(fiboSeries[i - 2] + fiboSeries[i - 1]);
  }
  return fiboSeries;
}

console.log(createFibonacciSeries());
