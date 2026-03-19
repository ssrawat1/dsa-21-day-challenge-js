/* First Solution: */

function digitsSum(digits) {
  if (digits === 0) return 0;
  let digit = digits % 10;
  digits = Math.floor(digits / 10)
  return digit + digitsSum(digits)
};

console.log(digitsSum(625));


/* Second Solution:*/

function reverseNumber(num, reverse = 0) {
  if (num === 0) return reverse;
  let lastDigit = num % 10;
  num = Math.floor(num / 10);
  reverse = reverse * 10 + lastDigit
  return reverseNumber(num, reverse)
};

console.log(reverseNumber(123))

/* Third Solution: */

function digitsProduct(num) {
  if (num === 0) return 1;
  let lastDigit = num % 10;
  num = Math.floor(num / 10);
  return lastDigit * digitsProduct(num)
};

console.log(digitsProduct(999));

/* Fourth Solution: */

function isPalindrome(num) {
  const reverseNum = reverseNumber(num);
  return num === reverseNum ? "Given Number is palindromic" : "Given Number is Not Palindromic"
};

console.log(isPalindrome(121))

/* Fifth Solution: */

function countZeros(num, count = 0) {
  if (num === 0) return count;
  let digit = num % 10;
  count = digit === 0 ? ++count : count;
  num = Math.floor(num / 10)
  return countZeros(num, count)
};

console.log(countZeros(102030));

/* Sixth Solution: */

function naturalNumbers(start, end) {
  if (start > end) return;
  console.log(start)
  return naturalNumbers(++start, end)
};

naturalNumbers(3, 8)

/* Seventh Solution: */

function evenSum(num, sum = 0) {
  if (num === 1 || num === 0) return sum + num;
  num = num % 2 === 0 ? num : num - 1;
  sum += num
  num -= 2
  return evenSum(num, sum)
};

console.log(evenSum(10))