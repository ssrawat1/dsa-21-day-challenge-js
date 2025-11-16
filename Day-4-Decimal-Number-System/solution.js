/***********************************************************
              Create a Number from Array of Digits
    Input: [2, 4, 6, 5]
    Output: 2465
    
    Condition: 2 should be in units place, 4 in tens place,
    6 in hundreds place, and so on.
***********************************************************/

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

/***********************************************************
           Find Two Digits with Given Sum and Difference
    Input: Sum = 10, Difference = 36
    Output: d1 = 7, d2 = 3, num1 = 73, num2 = 37
    
    Find two digits whose sum is 10 and when formed as 
    two-digit numbers, their difference is 36.
***********************************************************/

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

/***********************************************************
                  Split Number into Digits
    Input: N = 12345
    Output: [1, 2, 3, 4, 5]
    
    Convert a number into an array of individual digits
    in their correct order.
***********************************************************/

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

/***********************************************************
                      Reverse a Number
    Input: N = 13579
    Output: 97531
    
    Reverse the digits of a number while maintaining
    its mathematical value.
***********************************************************/

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

/***********************************************************
            Remove the Decimal Point Mathematically
    Input: N = 12.34
    Output: 1234
    
    Convert a decimal number to a whole number by 
    removing the decimal point.
***********************************************************/

function decimalToDigit(n = 12.34) {
  while (!Number.isInteger(n)) {
    n *= 10;
  }
  return n;
}

console.log(decimalToDigit());

/***********************************************************
        Separate Whole and Fractional Parts of a Number
    Input: N = 5.75
    Output: Whole = 5, Fraction = 0.75
    
    Extract the integer part and decimal part from 
    a decimal number separately.
    
    Note: Approach 3 is used to handle floating-point 
    precision issues. JavaScript can't precisely 
    represent some floating-point numbers (e.g., 0.1 + 0.2 !== 0.3)
***********************************************************/

function separateWholeAndFractionalParts(n = 5.75) {
  /*
  *** APPROACH 1: Simple Math ***
  let whole = Math.floor(n);
  let fractional = n - whole;
  return { whole, fractional };
  */

  /*
  *** APPROACH 2: Loop Based ***
  let fractional = 0;
  for (let i = 1; i <= n; i++) {
    fractional = i;
  }
  let whole = n - fractional;
  return { fractional, whole };
  */

  /*
  *** APPROACH 3: Handle Floating-Point Precision ***
  To get decimal number we can divide any number by 1.
  Computer can't precisely represent floating point numbers.
  Example: 0.1 + 0.2 === 0.3 (false in JavaScript!)
  */

  const fractionPart = Number((n % 1).toFixed(10));
  const wholePart = Number((n - fractionPart).toFixed(10));
  return { fractionPart, wholePart };
}

console.log(separateWholeAndFractionalParts());

/***********************************************************
        Generate a Decimal Number from Digit Arrays
    Input: Whole = [1, 2], Fraction = [3, 4]
    Output: 12.34
    
    Combine separate arrays of whole digits and 
    fractional digits into a single decimal number.
***********************************************************/

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

/***********************************************************
              Check if a Number is a Palindrome
    Input: N = 121
    Output: Palindrome (true)
    
    A palindrome number reads the same forwards and 
    backwards (e.g., 121, 1331, 12321).
***********************************************************/

function isPalindrome(n = 1331) {
  let revNum = 0;
  let initialNum = n;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    revNum = rem + revNum * 10;
  }
  return revNum === initialNum;
}

console.log(isPalindrome());

/***********************************************************
        Check if a Number is an Armstrong Number
    Input: N = 153
    Output: Armstrong Number (true)
    
    Also called Narcissistic Number.
    153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
    
    An Armstrong number is equal to the sum of its digits 
    each raised to the power of the number of digits.
***********************************************************/

function isArmstrong(n = 1634) {
  let sum = 0;
  let actualNum = n;
  let nCopy = n;
  let count = 0;

  while (nCopy > 0) {
    nCopy = Math.floor(nCopy / 10);
    count++;
  }

  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit ** count;
  }
  return actualNum === sum;
}

console.log(isArmstrong());

/***********************************************************
                    Find the Sum of Digits
    Input: N = 987
    Output: 24 (9 + 8 + 7)
    
    Calculate the sum of all individual digits in a number.
***********************************************************/

function getSumOfDigits(n = 987) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }
  return { sum };
}

console.log(getSumOfDigits());

/***********************************************************
                 Find the Average of Digits
    Input: N = 4567
    Output: 5.5 (Sum: 22, Count: 4, Average: 5.5)
    
    Calculate the average value of all digits in a number.
***********************************************************/

function getAverageOfDigits(n = 4567) {
  let sum = 0;
  let count = 0;

  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
    count++;
  }

  return sum / count;
}

console.log(getAverageOfDigits());

/***********************************************************
        Find the Largest and Smallest Digit in a Number
    Input: N = 9753
    Output: Largest = 9, Smallest = 3
    
    Identify the maximum and minimum digits present 
    in a number.
***********************************************************/

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

/***********************************************************
              Check if a Number is a Strong Number
    Input: N = 145
    Output: Strong Number (true)
    
    145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
    
    A strong number is equal to the sum of factorials 
    of its digits.
***********************************************************/

function getStrongNumber(n = 145) {
  let strongNum = 0;
  let originalNum = n;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
      factorial *= i;
    }
    strongNum += factorial;
  }
  return originalNum === strongNum;
}

console.log(getStrongNumber());

/***********************************************************
          Check if a Number is an Automorphic Number
    Input: N = 25
    Output: Automorphic Number (true)
    
    25² = 625 (ends with 25)
    
    An automorphic number is a number whose square ends 
    with the same digits as the original number.
    Examples: 5 (5² = 25), 6 (6² = 36), 25 (25² = 625)
***********************************************************/

function isAutomorphic(n = 25) {
  let sqr = n ** 2;
  let pow = 1;
  let lastDigits = 0;
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

/***********************************************************
                 Find the Frequency of Each Digit
    Input: N = 112233
    Output: { 1: 2, 2: 2, 3: 2 }
    
    Count how many times each digit appears in a number
    and return as a frequency map.
***********************************************************/

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

/***********************************************************
              Check if a Number is a Harshad Number
    Input: N = 18
    Output: Harshad Number (true)
    
    18 is divisible by (1 + 8) = 9
    
    A Harshad number (also called Niven number) is a 
    positive integer that is perfectly divisible by 
    the sum of its own digits.
    Examples: 12 (1+2=3, 12%3=0), 18 (1+8=9, 18%9=0)
***********************************************************/

function isHarshadNumber(n = 21) {
  let sum = 0;
  let num = n;
  while (n !== 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }

  return num % sum !== 0
    ? { result: `${num} is not Harshad Number` }
    : { result: `${num} is Harshad Number` };
}

console.log(isHarshadNumber());