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

/*  */
