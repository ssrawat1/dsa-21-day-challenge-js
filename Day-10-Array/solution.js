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

console.log(getMax());
