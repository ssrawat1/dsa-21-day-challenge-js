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
