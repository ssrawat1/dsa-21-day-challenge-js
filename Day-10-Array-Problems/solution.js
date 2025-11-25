/****************************************************************
      Find the Maximum and Minimum Element
            Input: [10, 25, 3, 18]
            Output: Max = 25, Min = 3
*****************************************************************/

function getMaxAndMin(arr = [10, 25, 3, 18]) {
  if (!arr || !arr.length) throw new Error('Invalid input');

  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  let currMax = 0;
  let currMin = 0;

  for (let i = 0; i < arr.length; i++) {
    currMax = arr[i];
    if (currMax > max) {
      max = currMax;
    }
    currMin = arr[i];
    if (currMin < min) {
      min = currMin;
    }
  }

  return { max, min };
}

console.log(getMaxAndMin());

/****************************************************************
      Reverse an array (Manual Method Only)
            Input:[1, 2, 3, 4, 5]
            Output: [ 5, 4, 3, 2, 1 ]
*****************************************************************/

function reverse(arr = [1, 2, 3, 4, 5]) {
  if (!arr || !arr.length) throw new Error('Invalid input');

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start++], arr[end--]] = [arr[end], arr[start]];
  }
  return arr;
}

console.log(reverse());

/****************************************************************
      Check if an Array is Sorted (Ascending)
            Input: [1, 2, 3, 4, 5]
            Output: Sorted
*****************************************************************/

function isSorted(arr = [5, 5, 5, 5]) {
  if (!arr || !arr.length) throw new Error('Invalid input');
  let isAsc = false;
  let isDecided = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (!isDecided) {
      if (arr[i] === arr[i + 1]) {
        continue;
      } else {
        isDecided = true;
        isAsc = arr[i] < arr[i + 1] ? true : false;
      }
    }

    if (isAsc) {
      if (arr[i] > arr[i + 1]) return 'Not Sorted In Ascending Order';
    } else {
      if (arr[i + 1] > arr[i]) return 'Not Sorted in Descending Order';
    }
  }

  if (!isAsc && !isDecided) return 'Sorted In Ascending';
  return isAsc ? 'Sorted In Ascending' : 'Sorted In Descending';
}

console.log(isSorted());

/****************************************************************
      Remove All Duplicates from an Array (Use filter method)
            Input: [1, 2, 2, 3, 3, 4]
            Output: [1, 2, 3, 4]
*****************************************************************/

function removeDuplicates(arr = [1, 2, 2, 3, 3, 4], filter = true, manual = false) {
  if (!arr || !arr.length) throw new Error('Invalid input');
  if (manual) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (!set.has(arr[i])) set.add(arr[i]);
    }
    return Array.from(set);
  } else {
    return arr.filter((element, i) => arr.indexOf(element) === i);
  }
}

console.log(removeDuplicates());

/****************************************************************
      Merge Two Arrays Without Using Concat or Spread
            Input: [1, 2, 3] and [4, 5]
            Output: [1, 2, 3, 4, 5]
*****************************************************************/

function mergeTwoArray(a = [1, 2, 3], b = [4, 5]) {
  if (!a || !b || !a.length || !b.length) throw new Error('Invalid input');

  let merged = [];
  let n = a.length;
  let m = b.length;
  let length = n + m;
  let idx = 0;
  for (let i = 0; i < length; i++) {
    if (i < n) {
      merged[i] = a[i];
    } else {
      merged[i] = b[idx];
      idx++;
    }
  }

  return merged;
}

console.log(mergeTwoArray());

/****************************************************************
         Find the Second Largest Element
            Input: [10, 20, 4, 45, 99]
            Output: 45
*****************************************************************/

function getSecondLargest(nums = [10, 20, 4, 45, 99]) {
  if (!nums || nums.length < 2) {
    throw new Error('Array must have at least 2 elements');
  }

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    }
  }

  return secondLargest;
}

console.log(getSecondLargest());

/****************************************************************
         Rotate an Array to the Right by K Steps
            Input: [1, 2, 3, 4, 5] , K = 2
            Output: [4, 5, 1, 2, 3]
*****************************************************************/

function rotateByKStep(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 7) {
  let n = arr.length;
  let backup = arr.slice(0, n - K);
  let idx = 0;

  for (let i = n - K; i < n; i++) {
    arr[idx] = arr[i];
    idx++;
  }

  for (let i = 0; i < backup.length; i++) {
    arr[idx + i] = backup[i];
  }
  return arr;
}

console.log(rotateByKStep());

/****************************************************************
        Check if Two Arrays Are Equal (Same Order)
            Input: [1, 2, 3] vs [1, 2, 3]
            Output: Equal
*****************************************************************/

function isEqual(a = [1, 2, 3], b = [1, 2, 3]) {
  if (!a || !b || !a.length || !b.length) throw new Error('Invalid input');

  if (a.length !== b.length) return 'Not Equal';

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return 'Not Equal';
  }

  return 'Yes They are Equal';
}

console.log(isEqual());

/****************************************************************
       Count Even and Odd Numbers in an Array
            Input: [1, 5, 7, 8, 10]
            Output: Even = 3, Odd = 2
*****************************************************************/

function getEvenOddCount(arr = [1, 5, 7, 8, 10]) {
  if (!arr || !arr.length) throw new Error('Invalid Arguments');

  let EvenCount = 0;
  let OddCount = 0;

  for (const num of arr) {
    num % 2 == 0 ? OddCount++ : EvenCount++;
  }
  return { EvenCount, OddCount };
}

console.log(getEvenOddCount());

/****************************************************************
       Find All Unique Pairs Whose Sum Equals a Target
            Input: [1, 2, 3, 4, 5], target = 6
            Output: (1,5), (2,4)
*****************************************************************/

function getUniquePairs(arr = [1, 2, 3, 4, 5], target = 6) {
  if (!arr || !arr.length || typeof target !== 'number') {
    throw new Error('Invalid arguments');
  }
  let seen = new Set();
  let pairs = [];
  for (const num of arr) {
    const nextPair = target - num;
    if (!seen.has(nextPair)) {
      seen.add(num);
    } else {
      const a = Math.min(num, nextPair);
      const b = Math.max(num, nextPair);
      let key = a + '' + b;
      if (!seen.has(key)) {
        seen.add(key);
        pairs.push([a, b]);
      }
    }
  }
  return pairs;
}

console.log(getUniquePairs());
