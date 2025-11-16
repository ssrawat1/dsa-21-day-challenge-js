/***********************************************************
         Print All Numbers Divisible by 3 and 5 up to N
    Input: N = 60
    Output: 15, 30, 45, 60
    
    Naive Approach: O(n)
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log(i);
    }
    
    Optimized Approach: O(n / (a*b)) ✓
    Numbers divisible by both 3 and 5 are divisible by LCM(3,5) = 15
    Jump directly by 15 instead of checking every number.
    
    Time Complexity: O(1) - Direct calculation possible
    Space Complexity: O(1)
***********************************************************/

function printDivisibleBy3And5(n = 60) {
  let a = 3;
  let b = 5;
  let lcm = (a * b) / Math.gcd(a, b);  // LCM = 15
  
  const result = [];
  for (let i = lcm; i <= n; i += lcm) {
    result.push(i);
  }
  return result;
}

console.log(printDivisibleBy3And5(60));

/***********************************************************
         Find the Sum of All Odd Numbers up to N
    Input: N = 100
    Output: Sum = 2500
    
    Mathematical Pattern of Odd Numbers:
    1, 3, 5, 7, 9, 11, ... up to N
    
    Formula: Sum of first n odd numbers = n²
    
    Naive Approach: O(n)
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
    
    Optimized Approach: O(1) ✓
    Count how many odd numbers exist up to N
    Use direct formula: sum = count²
    
    Example: N = 100
    Odd count = ceil(100/2) = 50
    Sum = 50² = 2500
    
    Time Complexity: O(1) - Constant time calculation
    Space Complexity: O(1)
***********************************************************/

function sumOfOddNumbers(n = 100) {
  // Count how many odd numbers exist up to N
  const oddCount = Math.ceil(n / 2);
  
  // Sum of first n odd numbers = n²
  const oddSum = oddCount * oddCount;
  
  return { n, oddCount, oddSum };
}

console.log(sumOfOddNumbers(100));

/***********************************************************
          Find the Sum of All Even Numbers up to N
    Input: N = 100
    Output: Sum = 2550
    
    Mathematical Pattern of Even Numbers:
    2, 4, 6, 8, 10, 12, ... up to N
    
    Formula: Sum of first n even numbers = n(n+1)
    
    Naive Approach: O(n)
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
      sum += i;
    }
    
    Optimized Approach: O(1) ✓
    Count how many even numbers exist up to N
    Use direct formula: sum = count × (count + 1)
    
    Example: N = 100
    Even count = floor(100/2) = 50
    Sum = 50 × 51 = 2550
    
    Time Complexity: O(1) - Constant time calculation
    Space Complexity: O(1)
***********************************************************/

function sumOfEvenNumbers(n = 100) {
  // Count how many even numbers exist up to N
  const evenCount = Math.floor(n / 2);
  
  // Sum of first n even numbers = n(n+1)
  const evenSum = evenCount * (evenCount + 1);
  
  return { n, evenCount, evenSum };
}

console.log(sumOfEvenNumbers(100));

/***********************************************************
              Print the Cubes of Numbers from 1 to N
    Input: N = 5
    Output: 1, 8, 27, 64, 125
    
    Cube of a number n: n³ = n × n × n
    
    Approach: Simple loop from 1 to N
    Calculate cube for each number
    
    Mathematical Insight:
    Sum of cubes: 1³ + 2³ + 3³ + ... + n³ = [n(n+1)/2]²
    
    Time Complexity: O(n)
    Space Complexity: O(1) or O(n) if storing results
***********************************************************/

function printCubesUptoN(n = 5) {
  const cubes = [];
  
  for (let i = 1; i <= n; i++) {
    cubes.push(i ** 3);
  }
  
  return cubes;
}

console.log(printCubesUptoN(5));

/***********************************************************
      Find Sum of Cubes from 1 to N (Optimized)
    Input: N = 5
    Output: Sum = 225
    
    Formula: 1³ + 2³ + 3³ + ... + n³ = [n(n+1)/2]²
    
    Naive Approach: O(n)
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i ** 3;
    }
    
    Optimized Approach: O(1) ✓
    Use direct formula without loop
    
    Example: N = 5
    Sum = [5 × 6 / 2]² = [15]² = 225
    
    Verification:
    1³ + 2³ + 3³ + 4³ + 5³ = 1 + 8 + 27 + 64 + 125 = 225 ✓
    
    Time Complexity: O(1) - Constant time calculation
    Space Complexity: O(1)
***********************************************************/

function sumOfCubes(n = 5) {
  // Sum of cubes formula: [n(n+1)/2]²
  const sumOfNaturalNumbers = (n * (n + 1)) / 2;
  const sumOfCubesResult = sumOfNaturalNumbers ** 2;
  
  return { n, sumOfCubes: sumOfCubesResult };
}

console.log(sumOfCubes(5));

/***********************************************************
    Print Only Numbers That Are Both Even and Perfect Squares
    Input: range = 90
    Output: 4, 16, 36, 64
    
    Conditions:
    1. Must be even (divisible by 2)
    2. Must be a perfect square (√n is integer)
    
    Approach:
    - Start with i = 2 (first even number)
    - Increment by 2 (stay even)
    - Calculate i² for each even number
    - Only i² are guaranteed to be perfect squares
    
    Why this works:
    (2)² = 4   ✓ even perfect square
    (4)² = 16  ✓ even perfect square
    (6)² = 36  ✓ even perfect square
    (8)² = 64  ✓ even perfect square
    
    Note: Squares of even numbers are always even!
    (2k)² = 4k² (always even)
    
    Time Complexity: O(√n)
    Space Complexity: O(1) or O(k) if storing results
***********************************************************/

function printEvenPerfectSquares(range = 90) {
  const result = [];
  
  // i is even number, i² is even perfect square
  for (let i = 2; i ** 2 <= range; i += 2) {
    result.push(i ** 2);
  }
  
  return result;
}

console.log(printEvenPerfectSquares(90));

/***********************************************************
    Print Perfect Squares (Any Type) up to N
    Input: N = 100
    Output: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
    
    Perfect Squares: Numbers that are square of integers
    1² = 1, 2² = 4, 3² = 9, 4² = 16, ...
    
    Optimized Approach: O(√n)
    Instead of checking every number if it's a perfect square,
    directly generate perfect squares by squaring integers
    until square exceeds N.
    
    Naive Approach: O(n)
    for (let i = 1; i <= n; i++) {
      if (Math.sqrt(i) % 1 === 0) result.push(i);
    }
    
    Optimized Approach: O(√n) ✓
    for (let i = 1; i ** 2 <= n; i++) {
      result.push(i ** 2);
    }
    
    Time Complexity: O(√n) - Much better!
    Space Complexity: O(√n) for storing results
***********************************************************/

function printPerfectSquares(n = 100) {
  const result = [];
  
  for (let i = 1; i ** 2 <= n; i++) {
    result.push(i ** 2);
  }
  
  return result;
}

console.log(printPerfectSquares(100));

/***********************************************************
    Print Multiples of a Number up to N (Optimized)
    Input: num = 5, N = 50
    Output: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
    
    Naive Approach: O(n)
    for (let i = 1; i <= n; i++) {
      if (i % num === 0) result.push(i);
    }
    
    Optimized Approach: O(n/num) ✓
    Jump directly by 'num' instead of checking every number
    
    Time Complexity: O(n/num) - Much better!
    Space Complexity: O(n/num)
***********************************************************/

function printMultiples(num = 5, n = 50) {
  const result = [];
  
  for (let i = num; i <= n; i += num) {
    result.push(i);
  }
  
  return result;
}

console.log(printMultiples(5, 50));

/***********************************************************
                  Optimization Comparison Summary
    
    Problem: Find pattern up to N
    
    Technique            Time Complexity    Use Case
    ─────────────────────────────────────────────────
    Naive Loop           O(n)              Basic, when no pattern
    Skip Loop            O(n/k)            Multiples of k
    Direct Formula       O(1)              Sum of sequences
    Square Root Loop     O(√n)             Perfect squares
    
    Key Optimizations:
    1. Use mathematical formulas when available
    2. Skip unnecessary iterations (jump by step size)
    3. Use √n when looking for square relationships
    4. Identify patterns in sequences
***********************************************************/

// Performance Comparison Example
function performanceComparison() {
  const n = 100000;
  
  console.log("\n=== Performance Comparison: Sum of first 100,000 odd numbers ===\n");
  
  // Naive approach: O(n)
  console.time("Naive Loop O(n)");
  let sum1 = 0;
  for (let i = 1; i <= n; i += 2) {
    sum1 += i;
  }
  console.timeEnd("Naive Loop O(n)");
  console.log(`Result: ${sum1}\n`);
  
  // Optimized approach: O(1)
  console.time("Direct Formula O(1)");
  const oddCount = Math.ceil(n / 2);
  let sum2 = oddCount * oddCount;
  console.timeEnd("Direct Formula O(1)");
  console.log(`Result: ${sum2}\n`);
  
  console.log("✓ Direct formula is much faster!");
}

performanceComparison();