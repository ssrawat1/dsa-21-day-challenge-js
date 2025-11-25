/****************************************************************
      Find the Maximum and Minimum Element
            Input: [10, 25, 3, 18]
            Output: Max = 25, Min = 3
*****************************************************************/

function getMax(arr = [10, 25, 3, 18]) {
  if (!arr || !arr.length) throw new Error('Invalid input');

  let max = Number.NEGATIVE_INFINITY;
  let currMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currMax = arr[i];
    if (currMax > max) {
      max = currMax;
    }
  }

  return max;
}

function getMin(arr = [10, 25, 3, 18]) {
  if (!arr || !arr.length) throw new Error('Invalid input');

  let max = Number.POSITIVE_INFINITY;
  let currMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currMax = arr[i];
    if (currMax < max) {
      max = currMax;
    }
  }

  return max;
}

console.log(getMax());
console.log(getMin());

/****************************************************************
      Find the Maximum and Minimum Element
            Input: [10, 25, 3, 18]
            Output: Max = 25, Min = 3
*****************************************************************/

function reverse(arr = [1, 23, 4, 5]) {
  if (!arr || !arr.length) throw new Error('Invalid input');

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  return arr;
}

console.log(reverse());
