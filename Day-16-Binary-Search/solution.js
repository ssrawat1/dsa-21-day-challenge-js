/********************************************************************************
      Find an Element Using Binary Search
            Input: [1, 3, 5, 7, 9], search = 7
            Output: 3
            Return -1 If Element Is Not Found
 ********************************************************************************/

function getTargetElement(arr = [1, 3, 5, 7, 9], target = 2) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return { index: mid }
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return { index: -1 }
};

console.log(getTargetElement())