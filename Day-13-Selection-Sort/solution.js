/******************************************************************
     Sort an Array in Ascending Order Using Selection Sort
                  Input: [7, 2, 9, 4, 1]
                  Output: [1, 2, 4, 7, 9]
 *******************************************************************/

function sortInAsc(arr = [7, 2, 9, 4, 1]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

console.log(sortInAsc());

/******************************************************************
     Sort an Array in Ascending Order Using Selection Sort
                  Input: [3, 8, 5, 2, 9]
                  Output: [9, 8, 5, 3, 2]

 *******************************************************************/

function sortInDesc(arr = [9, 8, 5, 3, 1]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    console.log({ minIdx });
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

console.log(sortInDesc());

/******************************************************************
     Find the Kth Smallest Element Using Selection Logic
                   Input: [9, 4, 7, 1, 3], K = 3
                   Output: 4
 *******************************************************************/

function getKthSmallestElement(arr = [9, 4, 7, 1, 3], K = 3) {
  for (let i = 0; i < K; i++) {
    let isSwap = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return arr[K - 1];
}

console.log(getKthSmallestElement());

/******************************************************************
    Selection Sort but Track Index of Minimum for Each Pass
                 Input: [4, 2, 5, 3, 1]
                 Output:
                 Pass 1 → min index = 4
                 Pass 2 → min index = 3
 *******************************************************************/

function sortInAsc(arr = [7, 2, 9, 4, 1]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    console.log(`Pass ${i + 1} -> min index = ${minIdx}`);
  }
  return arr;
}

console.log(sortInAsc());
