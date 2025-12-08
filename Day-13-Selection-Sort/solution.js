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

function trackSortIndex(arr = [7, 2, 9, 4, 1]) {
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

console.log(trackSortIndex());

/******************************************************************
    Sort an Array of Objects by Name
          Input:[{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
          Output: Sorted alphabetically by name.
 *******************************************************************/

function sortByName(arr = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name.toLowerCase() < arr[i].name.toLowerCase()) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sortByName());

/**********************************************************************************
          Find the K Largest Elements Without Full Sorting
                 Input: [5, 1, 9, 3, 7], K = 2
                 Output: [9, 7] (Stop early once top K elements are placed.)
 **********************************************************************************/

function kLargestElement(arr = [5, 1, 9, 3, 7], K = 2) {
  for (let i = 0; i < K; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[idx]) {
        idx = j;
      }
    }
    if (i !== idx) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return arr.slice(0, K);
}

console.log(kLargestElement());

/**********************************************************************************
          Sort a 2D Array by Second Element in Each Subarray
                Input: [[3, 9], [1, 4], [2, 5]]
                Output: Sorted by second values → [[1,4], [2,5], [3,9]]
 **********************************************************************************/

function sortBy2ndElement(
  arr = [
    [3, 9],
    [1, 4],
    [2, 5],
  ]
) {
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[idx][1]) {
        idx = j;
      }
    }
    if (i !== idx) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return arr;
}

console.log(sortBy2ndElement());

/**********************************************************************************
          Sort an Array and Count How Many Times Minimum Changed
                 Input: [8, 3, 5, 2, 6]
                 Output: Number of times a new minimum was found.
 **********************************************************************************/

function minChangedCountWhileSorting(arr = [8, 3, 5, 2, 6]) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
        count++;
      }
    }
    if (i !== idx) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return count;
}

console.log(minChangedCountWhileSorting());

/**********************************************************************************
         Sort Only Elements at Even Indexes
             Input: [9, 4, 7, 6, 3, 2]
             Even index elements: 9, 7, 3
             Output: Sort only these positions using selection logic.
 **********************************************************************************/

function sortAtEvenIndex(arr = [9, 4, 7, 6, 3, 2]) {
  let n = arr.length % 2 === 0 ? arr.length - 2 : arr.length - 1;

  for (let i = 0; i <= n; i += 2) {
    let idx = i;
    for (let j = i + 2; j < arr.length; j += 2) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    if (i !== idx) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return arr;
}

console.log(sortAtEvenIndex());
