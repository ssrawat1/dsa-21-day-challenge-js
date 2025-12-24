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

/********************************************************************************
      Find the Smallest Element Greater Than a Given Value
                 Input: [3, 5, 8, 12, 17], search = 10
                 Output: 12
 ********************************************************************************/

function getSmallestElementThanTarget(arr = [
  3, 5, 8, 12, 17], search = -1) {
  let start = 0;
  let end = arr.length - 1;
  let result = null;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > search) {
      result = arr[mid];
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result !== null ? { smallestElement: result } : "No element exists";
}

console.log(getSmallestElementThanTarget())

/********************************************************************************
      Find the Greatest Element Smaller Than a Given Value
            Input: [3, 5, 8, 12, 17], search = 10
            Output: 8
 ********************************************************************************/

function getGreatestElementSmallerThanGiven(arr = [3, 5, 8, 12, 17], search = 10) {
  let start = 0;
  let end = arr.length - 1;
  let result = null;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < search) {
      result = arr[mid];
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return result !== null ? { greatestElement: result } : "No element exists";
};

console.log(getGreatestElementSmallerThanGiven());


/********************************************************************************
      Check If a Number Is a Perfect Square Using Binary Search
               Input: N = 36
               Output: true
               For N = 37 → false.
 ********************************************************************************/

function isPerfectSquare(N = 36) {
  // Handle edge cases
  if (N < 0) return { result: false, reason: "Negative numbers cannot be perfect squares" };
  if (N === 0 || N === 1) return { result: true, sqrt: N };

  let start = 1;
  let end = Math.floor(N / 2);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;

    if (square === N) {
      return { result: true, sqrt: mid };
    } else if (square > N) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return { result: false };
}

/********************************************************************************
      Find the Peak Element in a Mountain Array (Binary Search Variant)
                Input: [1, 3, 5, 7, 6, 4, 2]
                Output: Peak = 7 at index 3
 ********************************************************************************/

function getPeakElement(arr = [1, 3, 5, 7, 6, 4, 2]) {
  
 };

console.log(getPeakElement())