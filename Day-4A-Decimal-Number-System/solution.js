/* create a number using this [2,4,6,5] but condition is that 2 should be one unit place , 4 on 10th place and so on  */

function createNumber() {
  let nums = [2, 4, 6, 5];
  let number = 0;
  let pow = 1;
  for (let num of nums) {
    number += num * pow;
    pow *= 10;
  }
  return number;
}
console.log(createNumber());

/* sum of tow digit is 10 (e.g, x+y=10) and there diff is 36 find the digits and numbers */

function findDigitAndNumber() {
  let sum = 10;
  let diff = 36;
  let d1 = null;
  let d2 = null;
  let num1 = null;
  let num2 = null;
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let currSum = i + j;
      if (currSum === sum) {
        let num = `${i}${j}`;
        let revNum = `${j}${i}`;
        let currDiff = Math.abs(num - revNum);
        if (diff === currDiff) {
          d1 = i;
          d2 = j;
          num1 = num;
          num2 = revNum;
          break;
        }
      }
    }
  }
  return { d1, d2, num1, num2 };
}

console.log(findDigitAndNumber());

/* Split Number into Digits:
        Input: N = 12345
        Output: [1,2,3,4,5]
 */

function numberToDigit(n = 12345) {
  let digitArr = [];
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    digitArr.unshift(rem);
  }
  return digitArr;
}
console.log(numberToDigit());

/* Reverse a Number: */

function reverseNumber(n = 13579) {
  let revNum = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    revNum = revNum * 10 + rem;
  }
  return { revNum };
}

console.log(reverseNumber());
/* Remove the Decimal Point Mathematically:
        Input: N = 12.34
        Output: 1234
 */

function decimalToDigit(n = 12.34) {
  while (!Number.isInteger(n)) {
    n *= 10;
  }
  return n;
}
console.log(decimalToDigit());

/* Separate Whole and Fractional Parts of a Number:
              Input: N = 5.75
              Output: Whole = 5; Fraction = 0.75;
*/

function separateWholeAndFractionalParts(n = 5.75) {
  /*
  ********************************************
                FIRST APPROACH
   ********************************************* 
   */
  // let whole = Math.floor(n);
  // let fractional = n - whole;
  // return { whole, fractional };

  /*
  ********************************************
                SECOND APPROACH
   ********************************************* 
   */

  // let fractional = 0;
  // for (let i = 1; i <= n; i++) {
  //   fractional = i;
  // }
  // let whole = n - fractional;
  // return { fractional, whole };

  /*
  ********************************************************************
                            THIRD APPROACH

      To get decimal number we can divide any number by 1
      Computer can't preciously represent the floating point numbers
         0.1 + 0.2 === 0.3

  ********************************************************************
   */

  const fractionPart = Number((n % 1).toFixed(10));
  const wholePart = Number((n - fractionPart).toFixed(10)); // Number method automatically round the number upto correct decimal
  return { fractionPart, wholePart };
}
console.log(separateWholeAndFractionalParts());

/* 
  Generate a Decimal Number from Whole and Fractional Digit
  Input: Whole = [1,2], Fraction = [3,4]
  Output: 12.34;

*/

function createFractionalToDecimal(whole = [1, 2], fraction = [3, 4]) {
  let decimalNum = 0;
  let pow = 10;
  for (let i = 1; i <= whole.length; i++) {
    decimalNum = whole[i - 1] + decimalNum * 10;
  }
  for (let j = 1; j <= fraction.length; j++) {
    decimalNum = Number((decimalNum + Number((fraction[j - 1] / pow).toFixed(10))).toFixed(10));
    pow *= 10;
  }

  return { decimalNum };
}

console.log(createFractionalToDecimal());

/* Check if a Number is a Palindrome or not 
                Input: N = 121
                Output: Palindrome
*/

function isPalindrome(n = 1331) {
  let revNum = null;
  let initialNum = n;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    revNum = rem + revNum * 10;
  }
  return revNum === initialNum;
}

console.log(isPalindrome());

/* Check if a number is Armstrong Number (Narcissistic Number): 
          Input: N = 153
          Output: Armstrong Number
*/

function isArmstrong(n = 1634) {
  let sum = null;
  let actualNum = n;
  let nCopy = n;
  let count = null;

  while (nCopy > 0) {
    nCopy = Math.floor(nCopy / 10);
    count++;
  }

  while (n > 0) {
    console.log({ count });
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit ** count;
  }
  return actualNum === sum;
}

console.log(isArmstrong());

/* Find the sum of digits:
         Input: N = 987
         Output: 24
 */

function getSumOfDigits(n = 987) {
  let sum = null;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }
  return { sum };
}

console.log(getSumOfDigits((n = 987)));

/* Find the average of digits: 
                 Input: 987;
                 Output: 5.5
*/

function getAverageOfDigits(n = 4567) {
  let sum = null;
  let count = null;

  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
    count++;
  }

  return sum / count;
}

console.log(getAverageOfDigits());

/* Find the largest and smallest digit in a number:
                    Input: 9483
                    Output: Largest = 9 , smallest = 3; 
*/

function getSmallestLargestDigit(n = 9753) {
  let largest = Number.NEGATIVE_INFINITY;
  let smallest = Number.POSITIVE_INFINITY;

  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    if (largest < digit) {
      largest = digit;
    }
    if (smallest > digit) {
      smallest = digit;
    }
  }

  return { largest, smallest };
}

console.log(getSmallestLargestDigit());

/* Check if a number is a strong Number:
             Input: n = 145
             Output: Strong Number
 */

function getStrongNumber(n = 145) {
  let strongNum = null;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    let sum = 1;
    for (let i = 1; i <= digit; i++) {
      sum *= i;
    }
    strongNum += sum;
  }
  return { strongNum };
}

console.log(getStrongNumber());

/* Check if a Number is an Automorphic Number
          Input: N = 25;
          Ouput: Automorphic Number (since 25^2 = 625 ends with 25)
 Automorphic: A number whose square ends with the same digits as the original number
 */

function isAutomorphic(n = 25) {
  let sqr = n ** 2;
  let pow = 1;
  let lastDigits = null;
  while (sqr !== 0) {
    let digit = sqr % 10;
    sqr = Math.floor(sqr / 10);
    lastDigits += digit * pow;
    if (n === lastDigits) return { result: `${n} is Automorphic Number` };
    pow *= 10;
  }

  return { result: `${n} is not an Automorphic Number` };
}

console.log(isAutomorphic());

/* find the Frequency of each digit:
         Input: N = 112233
         Output: 1 -> 2, 2 -> 2, 3 -> 2
 */

function getFrequencyOfDigit(n = 112233) {
  let frequency = {};
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    frequency[digit] = (frequency[digit] || 0) + 1;
  }

  return frequency;
}

console.log(getFrequencyOfDigit());
