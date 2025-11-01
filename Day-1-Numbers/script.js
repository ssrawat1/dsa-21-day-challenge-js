/* Print all numbers divisible by 3 and 5 upto N
  TC -> better than O(n)
 */

let n = 60;
let a = 3;
let b = 5;
let count = 1;

for (let i = a * b; i <= n; i = a * b * count) {
  // skip unnecessary iterations
  console.log(i);
  count++;
}

/* find the sum of all odd numbers up to N
    TC -> O(1)
*/

let N = 100;

let oddCount = Math.ceil(N / 2); // avoid decimal
let oddSum = oddCount * oddCount; // Odd number formula: n^2
console.log(oddSum);

/* Print the cubes of numbers from 1 to N */
let num = 5;

for (let i = 1; i <= 5; i++) {
  console.log(i ** 3);
}

/* Print only the numbers that are both even and perfect squares */
let range = 90;

for (let i = 2; i ** 2 <= range; i += 2) {
  console.log(i ** 2);
}
