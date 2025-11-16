/***********************************************************
                 Find the Maximum of Three Numbers
    Input: a = -1, b = -2, c = -3
    Output: -1
    
    Approach: Compare first two numbers, keep the max,
    then compare it with the third number to get overall max.
    
    Time: O(1)
    Space: O(1)
***********************************************************/

function getThreeNumMax(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw Error('Error: Invalid arguments - all inputs must be numbers');
  }
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

console.log(getThreeNumMax(-1, -2, -3));

/***********************************************************
          Check if a Number is Positive, Negative or Zero
    Input: n = -5
    Output: Negative
    
    Approach: Divide any number by 1 to normalize it.
    - If result > 0: Positive
    - If result < 0: Negative
    - If result = 0: Zero
***********************************************************/

function checkNum(n) {
  if (typeof n !== 'number') {
    throw Error('Argument is not valid - must be a number');
  }

  return n / 1 > 0 ? 'Positive' : n / 1 < 0 ? 'Negative' : 'Zero';
}

console.log(checkNum(-2));

/***********************************************************
                  Calculate Electricity Bill
    Input: units = 230
    Output: Rs 1670
    
    Slab Structure:
    0-100 units     → Rs 5 per unit
    101-200 units   → Rs 7 per unit
    201-300 units   → Rs 10 per unit
    Above 300 units → Rs 12 per unit
    
    Example: 230 units
    = (100 × 5) + (100 × 7) + (30 × 10)
    = 500 + 700 + 300 = Rs 1500
***********************************************************/

function getElectricityBill(unit) {
  let bill = 0;
  let billCycle = 100;

  if (unit >= 0 && unit <= 100) {
    bill = unit * 5;
  } else if (unit > 100 && unit <= 200) {
    let left = unit - billCycle;
    bill = billCycle * 5 + left * 7;
  } else if (unit > 200 && unit <= 300) {
    let left = unit - billCycle * 2;
    bill = billCycle * 5 + billCycle * 7 + left * 10;
  } else if (unit > 300) {
    let left = unit - billCycle * 3;
    bill = billCycle * 5 + billCycle * 7 + billCycle * 10 + left * 12;
  } else {
    return 'Invalid unit value';
  }

  return bill;
}

console.log(getElectricityBill(230));

/***********************************************************
            Check if a Character is Vowel or Consonant
    Input: c = 'A'
    Output: Vowel
    
    Vowels: a, e, i, o, u (case-insensitive)
    All other alphabetic characters are consonants.
***********************************************************/

function isVowel(c) {
  if (!c || typeof c !== 'string' || c.length !== 1) {
    throw new Error('Invalid argument - must be a single character');
  }

  const char = c.toLowerCase();

  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return 'Vowel';
  } else if (char >= 'a' && char <= 'z') {
    return 'Consonant';
  } else {
    return 'Not a letter';
  }
}

console.log(isVowel('A'));

/***********************************************************
                    Check if a Year is a Leap Year
    Input: year = 2000
    Output: Leap Year
    
    Leap Year Rules:
    ✓ Divisible by 400 → Leap Year
    ✓ Divisible by 4 AND NOT by 100 → Leap Year
    ✗ All other cases → Not a Leap Year
    
    Examples:
    2000 → Leap (divisible by 400)
    1900 → Not Leap (divisible by 100 but not 400)
    2004 → Leap (divisible by 4, not by 100)
    2001 → Not Leap (not divisible by 4)
***********************************************************/

function isLeapYear(year) {
  if (typeof year !== 'number' || year < 0) {
    throw new Error('Invalid year');
  }
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(2000));

/***********************************************************
      Check Character Type: Uppercase, Lowercase, Digit, Special
    Input: char = 'a'
    Output: Lowercase Letter
    
    Character Classification:
    - 'a' to 'z' → Lowercase Letter
    - 'A' to 'Z' → Uppercase Letter
    - '0' to '9' → Digit
    - All others → Special Character
***********************************************************/

function checkCharacterType(char) {
  if (typeof char !== 'string' || char.length !== 1) {
    throw new Error('Invalid input - must be a single character');
  }

  if (char >= 'a' && char <= 'z') {
    return 'Lowercase Letter';
  } else if (char >= 'A' && char <= 'Z') {
    return 'Uppercase Letter';
  } else if (char >= '0' && char <= '9') {
    return 'Digit';
  } else {
    return 'Special Character';
  }
}

console.log(checkCharacterType('a'));

/***********************************************************
              Check Triangle Type Using Sides
    Input: a = 3, b = 4, c = 5
    Output: Right Angled Triangle
    
    Triangle Types:
    1. Right Angled Triangle: a² + b² = c²
    2. Equilateral Triangle: All 3 sides equal (All angles = 60°)
    3. Isosceles Triangle: 2 sides equal (2 angles equal)
    4. Scalene Triangle: All sides different
    
    Triangle Inequality: Sum of any two sides > third side
    
    Examples:
    (3, 4, 5) → Right Angled (3² + 4² = 5²)
    (5, 5, 5) → Equilateral
    (5, 5, 8) → Isosceles
    (3, 4, 6) → Scalene
***********************************************************/

function checkTriangleType(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Invalid arguments - all must be numbers');
  }

  // Check Triangle Inequality Theorem
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 'Not a valid triangle';
  }

  // Check Right Angled Triangle (Pythagorean Theorem)
  if (a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || c ** 2 + a ** 2 === b ** 2) {
    return 'Right Angled Triangle';
  }

  // Check Equilateral Triangle
  if (a === b && b === c) {
    return 'Equilateral Triangle';
  }

  // Check Isosceles Triangle
  if (a === b || b === c || a === c) {
    return 'Isosceles Triangle';
  }

  // Scalene Triangle
  return 'Scalene Triangle';
}

console.log(checkTriangleType(3, 4, 5));

/***********************************************************
                 Calculate Income Tax Based on Slabs
    Input: salary = 750000
    Output: Tax = Rs 75000
    
    Income Tax Slabs (India):
    0 - 2,50,000          → No Tax (0%)
    2,50,001 - 5,00,000   → 5%
    5,00,001 - 10,00,000  → 20%
    Above 10,00,000       → 30%
    
    Example: salary = 7,50,000
    Tax = (2,50,000 × 0%) + (2,50,000 × 5%) + (2,50,000 × 20%)
    = 0 + 12,500 + 50,000 = Rs 62,500
***********************************************************/

function checkIncomeTax(salary) {
  if (typeof salary !== 'number' || salary < 0) {
    throw new Error('Invalid salary - must be a positive number');
  }

  let totalTax = 0;

  if (salary <= 250000) {
    totalTax = 0;
  } else if (salary <= 500000) {
    totalTax = (salary - 250000) * 0.05;
  } else if (salary <= 1000000) {
    totalTax = 250000 * 0.05 + (salary - 500000) * 0.20;
  } else {
    totalTax = 250000 * 0.05 + 500000 * 0.20 + (salary - 1000000) * 0.30;
  }

  return { salary, tax: totalTax.toFixed(2), afterTax: (salary - totalTax).toFixed(2) };
}

console.log(checkIncomeTax(750000));

/***********************************************************
            Check if Number is Positive, Negative or Zero
    Input: num = -5
    Output: Negative
    
    Simple approach using if-else conditions.
    Direct comparison without division.
***********************************************************/

function checkNumType(num) {
  if (typeof num !== 'number') {
    throw new Error('Argument must be a number');
  }

  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  } else {
    return 'Zero';
  }
}

console.log(checkNumType(-5));