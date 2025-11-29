/****************************************************************
      Find Missing Number from Range 1 to N
            Input: [-2, -1, 1, 2]
            Output: 0
*****************************************************************/

function findMissing(nums = [5, 6, 8, 9]) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
    actualSum += nums[i];
  }
  const n = nums.length + 1;
  const expectedSum = (n * (min + max)) / 2;
  return { missingNum: expectedSum - actualSum };
}

console.log(findMissing());

/****************************************************************
      Move All zeroes to End (Stable, O(n))
            Input: [0, 1, 0, 3, 12]
            Output: [1, 3, 12, 0, 0]
*****************************************************************/

function moveZeoresToEnd(nums = [0, 1, 0, 3, 12]) {
  let start = 0;
  let end = 1;

  while (end < nums.length) {
    if (nums[start] === 0 && nums[end] !== 0) {
      [nums[start++], nums[end++]] = [nums[end], nums[start]];
    } else if (nums[start] !== 0 && nums[end] === 0) {
      start++;
      end++;
    } else {
      end++;
    }
  }
  return nums;
}

console.log(moveZeoresToEnd());

/****************************************************************
      Find the First Repeating Element In an Array
            Input: [10, 5, 3, 4, 3, 5, 6]
            Output: 3
*****************************************************************/

function getFirstRepeatingElement(nums = [10, 5, 3, 4, 3, 5, 6]) {
  let seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return { repeatingElement: num };
    }
    seen.add(num);
  }

  return { repeatingElement: null };
}

console.log(getFirstRepeatingElement());
