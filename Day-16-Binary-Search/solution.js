/********************************************************************************
      Find an Element Using Binary Search
            Input: [1, 3, 5, 7, 9], search = 7
            Output: 3
            Return -1 If Element Is Not Found
 ********************************************************************************/

function getTargetElement(arr = [1, 3, 5, 7, 9], target = 7) {
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


/********************************************************************************
      Find the First Occurrence of a Repeated Number
            Input: [2, 4, 4, 4, 9, 11], search = 4
            Output: index 1
 ********************************************************************************/

function getFirstOccurrence(arr = [2, 4, 4, 4, 9, 11], search = 4) {
  let start = 0;
  let end = arr.length - 1;
  let ans = null;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
      ans = mid;
      end = mid - 1
    } else if (arr[mid] < search) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans === null ? "Not Found" : { index: ans };
};

console.log(getFirstOccurrence())


/********************************************************************************
      Find the Last Occurrence of a Repeated Number
            Input: [2, 4, 4, 4, 9, 11], search = 4
            Output: index 3
 ********************************************************************************/

function getLastOccurrence(arr = [2, 4, 4, 4, 9, 11], target = 4) {
  let start = 0;
  let end = arr.length - 1;
  let ans = null;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] == target) {
      ans = mid;
      start = mid + 1
    } else if (arr[mid] < target) {
      start = mid + 1
    } else { end = mid - 1 }
  }
  return ans == null ? "Not found" : { index: ans }
};
console.log(getLastOccurrence())