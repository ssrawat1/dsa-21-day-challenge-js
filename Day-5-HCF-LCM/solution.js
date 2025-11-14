/* Print All Factors of a Number:
  100 -> 1 2 4 5 10 20 25 50 100 
  81 -> 1 3 9 27 81

 */

function getAllFactors(n = 27) {
  const factors = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      const secondPair = n / i;
      if (i !== secondPair) factors.splice(factors.length / 2 + 1, 0, secondPair);
    }
  }

  return factors;
}

console.log(getAllFactors());

/* Print All Multiples of a Number up to N:
                Input: Number = 4, Limit = 30;
                Output: [4,8,12,16,20,24,28]
  */

function getMultiples(num = 5, limit = 50) {
  let currMultiple = num;
  let allMultiples = [];
  while (currMultiple <= limit) {
    allMultiples.push(currMultiple)
    currMultiple += num;
  }
  return allMultiples
}

console.log(getMultiples());
