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
