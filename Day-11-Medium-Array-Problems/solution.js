/****************************************************************
      Find Missing Number from Range 1 to N
            Input: [-2, -1, 1, 2]
            Output: 0
*****************************************************************/

function findMissing(nums = [-2, -1, 1, 2]) {
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
