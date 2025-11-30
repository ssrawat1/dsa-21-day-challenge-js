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

/****************************************************************
      Maximum Subarray Sum (Kadane's Algorithm )
            Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4];
            Output: 6
*****************************************************************/

function getMaximumSubarraySum(arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
    }
  }
  return { maxSum };
}

console.log(getMaximumSubarraySum());

/****************************************************************
      Find the longest subarray with sum = k
            Input: [1, 2, 3, 4, 5] , K = 9
            Output: [2, 3, 4]
*****************************************************************/
function getLongestSubarray(arr = [1, 2, 3], K = 100) {
  let startIdx = -1;
  let endIdx = -1;
  let longestLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === K) {
        let currentLength = j - i + 1;

        if (currentLength > longestLength) {
          longestLength = currentLength;
          startIdx = i;
          endIdx = j;
        }
      }
    }
  }

  return startIdx !== -1 ? { subarray: arr.slice(startIdx, endIdx + 1) } : [];
}

console.log(getLongestSubarray());

/*****************************************************************************
      Find the length of the longest subarray with no repeating elements
            Input: [1, 2, 3, 1, 2, 3, 4]
            Output: 4
******************************************************************************/

function getLongestSubarrayLength(arr = [1, 2, 3, 2, 4, 5]) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    while (set.has(arr[i])) {
      set.delete(arr[left]);
      left++;
    }

    set.add(arr[i]);
    maxLength = Math.max(maxLength, i + 1 - left);
  }

  return { maxLength };
}

console.log(getLongestSubarrayLength());

/****************************************************************
        Maximum Subarray (Kadane's Algorithm -> O(n))
            Input: [1, 2, 3, 1, 2, 3, 4]
            Output: 4
*****************************************************************/

function getSubarrayOfMaximumSum(arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
  let currentSum = 0;
  let maxSum = -Infinity;
  let tempIdx = 0;
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
      endIdx = i;
      startIdx = tempIdx;
    }

    if (currentSum < 0) {
      currentSum = 0;
      tempIdx = i + 1;
    }
  }

  return { subArray: arr.slice(startIdx, endIdx + 1) };
}

console.log(getSubarrayOfMaximumSum());

/****************************************************************
       Find the longest increasing subarray (Continuous)
            Input: [1, 2, 2, 3, 4, 5]
            Output: length = 4,  SubArray = [2, 3, 4, 5] 
*****************************************************************/

function getLongestIncreasingSubarray(arr = [2, 2, 2, 2]) {
  if (arr.length <= 1) return { length: arr.length, SubArray: arr };

  let length = 1;
  let startIdx = 0;
  let endIdx = 0;
  let tempIdx = 0;
  let maxLength = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      length = 0;
      tempIdx = i + 1;
    }

    length++;

    if (length > maxLength) {
      maxLength = length;
      startIdx = tempIdx;
      endIdx = i + 1;
    }
  }
  console.log({ startIdx, endIdx });
  return { length: maxLength, SubArray: arr.slice(startIdx, endIdx + 1) };
}

console.log(getLongestIncreasingSubarray());
